<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\Test;

use App\Models\User;
use Illuminate\Database\Query\Builder;

use Psr\Http\Message\{
	ServerRequestInterface as Request,
	ResponseInterface as Response
};

class TestController extends BaseController
{
//	protected $table;
//
//	public function __construct(Builder $table)
//	{
//		$this->table = $table;
//
//	}
	/**
	 * @param Request $request
	 * @param Response $response
	 * @param $args
	 *
	 * @return mixed
	 */
	public function index(Request $request, Response $response, $args)
	{
		$table=$this->b->table('users_test');
		$test=$table->get();
//		$test = $this->table->get();
//		$test = $this->table->get();
		$test = Test::all();
//		$user= User::all();
//		$test = new Test;
//		$test->name="test3";
//		$test->email="test3@example.com";
//		$test->password=hash('sha256','password');
//		$test->save();
		$user = Test::where("email", "test@example.com")->first();
		$session = new \SlimSession\Helper();
		$session->set('my_key', "test@example.com");
		$my_value = $session->my_key;
		dump($user);
		die();

	}
}

