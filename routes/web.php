<?php

use App\Controllers\AuthController;
use App\Controllers\HomeController;
use App\Controllers\TestController;
use App\Controllers\UserController;
use App\Middleware\AuthMiddleware;
use App\Middleware\CorsMiddleware;

$app->get('/', HomeController::class . ':index');
$app->get('/test', TestController::class . ':index');
$app->get('/user', UserController::class . ':index');
$app->post('/ping', AuthController::class . ':ping');
$app->post('/login', AuthController::class . ':login');
$app->post('/users', UserController::class . ':index');
$app->post('/create', UserController::class . ':create');
$app->post('/edit', UserController::class . ':edit');
$app->post('/update', UserController::class . ':update');
$app->post('/delete', UserController::class . ':destroy');

$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
	$handler = $this->notFoundHandler; // handle using the default Slim page not found handler
	return $handler($req, $res);
});
