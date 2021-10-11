<?php


use App\Controllers\BaseController;
use App\Controllers\TestController;
use App\Middleware\AuthMiddleware;
use App\Middleware\CorsMiddleware;
use Slim\Csrf\Guard;
use Slim\Views\Twig;

require_once __DIR__ . '/../vendor/autoload.php';

try {

	$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
	$dotenv->load();

} catch (Dotenv\Exception\InvalidPathException $e) {
	//
}

$app = new Slim\App([
	'settings' => [
		'displayErrorDetails' => getenv('APP_DEBUG') === 'true',
		'determineRouteBeforeAppMiddleware' => true,
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


$app->add(
	new \Slim\Middleware\Session([
		'name' => 'blog_session',
		'autorefresh' => true,
		'lifetime' => '24 hour',
	])
);

$container = $app->getContainer();

$container['view'] = function ($container) {
	$view = new Twig(__DIR__ . '/../resources/views', [
		'cache' => $container->settings['views']['cache']
	]);

	$basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
	$view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));

	return $view;
};
$container["csrf"] = function ($container) {
	$guard = new Guard();
	$guard->setPersistentTokenMode(true);
	return $guard;
};

$container[App\Controllers\BaseController::class] = function ($c) {
	return new BaseController($c);
};

$container['validator'] = function ($container) { return new Awurth\SlimValidation\Validator; };

$container['session'] = function ($c) {
	return new \SlimSession\Helper();
};
require_once __DIR__ . '/database.php';
require_once __DIR__ . '/../routes/web.php';



