<?php

use App\Controllers\AuthController;
use App\Controllers\HomeController;
use App\Controllers\PostController;
use App\Controllers\TestController;
use App\Controllers\UserController;
use App\Middleware\AuthMiddleware;


$app->get('/', HomeController::class . ':index');

$app->post('/ping', AuthController::class . ':ping');
$app->post('/login', AuthController::class . ':login');

$app->post('/users/users', UserController::class . ':index');
$app->post('/users/create', UserController::class . ':create');
$app->post('/users/edit', UserController::class . ':edit');
$app->post('/users/update', UserController::class . ':update');
$app->post('/users/delete', UserController::class . ':destroy');

$app->post('/posts/posts', PostController::class . ':index');
$app->post('/posts/create', PostController::class . ':create');
$app->post('/posts/edit', PostController::class . ':edit');
$app->post('/posts/update', PostController::class . ':update');
$app->post('/posts/delete', PostController::class . ':destroy');
$app->post('/posts/post', PostController::class . ':show');


$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
	$handler = $this->notFoundHandler; // handle using the default Slim page not found handler
	return $handler($req, $res);
});
