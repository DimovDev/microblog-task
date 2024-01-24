<?php

//use Illuminate\Database\Capsule\Manager as Capsule;
//
//$config  = $container['settings']['database'];
//$capsule = new Capsule;
//$capsule->addConnection(array_merge($config,[
//	'charset'   =>  'utf8',
//	'collation' =>  'utf8_unicode_ci'
//]));
//
//$capsule->bootEloquent();
//$capsule->setAsGlobal();
use Illuminate\Database\Capsule\Manager as Capsule;

$container['db'] = function ($container) {
	$capsule = new Capsule;
	$capsule->addConnection($container['settings']['db']);

	$capsule->setAsGlobal();
	$capsule->bootEloquent();

	return $capsule;
};
