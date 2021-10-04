<?php


use App\Controllers\BaseController;
use App\Controllers\TestController;
use App\Middleware\CorsMiddleware;

require_once __DIR__ . '/../vendor/autoload.php';

try {
	(new Dotenv\Dotenv(__DIR__ . '/../'))->load();
} catch (Dotenv\Exception\InvalidPathException $e) {
	//
}

$app = new Slim\App([
	'settings' => [
		'displayErrorDetails' => getenv('APP_DEBUG') === 'true',

		'app' => [
			'name' => getenv('APP_NAME')
		],

		'views' => [
			'cache' => getenv('VIEW_CACHE_DISABLED') === 'true' ? false : __DIR__ . '/../storage/views'
		],

		'db' => [
			'driver'    => getenv('DB_DRIVER'),
			'host'    => getenv('DB_HOST'),
			'port'    => getenv('DB_PORT'),
			'database'  => getenv('DB_DATABASE'),
			'username'  => getenv('DB_USERNAME'),
			'password'  => getenv('DB_PASSWORD'),
			'charset'   => 'utf8',
			'collation' => 'utf8_unicode_ci',
			'prefix'    => '',
		]
	],
]);

$app->options('/{routes:.+}', function ($request, $response, $args) {
	return $response;
});
$app->add(new CorsMiddleware());
$container = $app->getContainer();

$container['view'] = function ($container) {
	$view = new \Slim\Views\Twig(__DIR__ . '/../resources/views', [
		'cache' => $container->settings['views']['cache']
	]);

	$basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
	$view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));

	return $view;
};

$container[App\Controllers\BaseController::class] = function ($c) {


	return new BaseController($c);
};

$container['validator'] = function ($container) { return new Awurth\SlimValidation\Validator; };

require_once __DIR__ . '/database.php';
require_once __DIR__ . '/../routes/web.php';


