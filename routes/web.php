<?php
use App\Controllers\HomeController;
use App\Controllers\TestController;
use App\Controllers\UserController;

$app->get('/', HomeController::class . ':index');
$app->get('/test', TestController::class . ':index');
$app->get('/user', UserController::class . ':index');

$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
	$handler = $this->notFoundHandler; // handle using the default Slim page not found handler
	return $handler($req, $res);
});
