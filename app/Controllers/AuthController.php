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
use SlimSession\Helper;

class AuthController extends BaseController
{

	/**
	 * @param Request $request
	 * @param Response $response
	 * @param $args
	 *
	 * @return mixed
	 */
	public function index(Request $request, Response $response, $args)
	{
		$table = $this->b->table('users_test');
		$test = $table->get();
//		$test = $this->table->get();
//		$test = $this->table->get();
		$test = Test::all();
//		$user= User::all();
//		$test = new Test;
//		$test->name="test3";
//		$test->email="test3@example.com";
//		$test->password=hash('sha256','password');
//		$test->save();

		dump($test);
		die();

	}

	public function ping(Request $request, Response $response, $args)
	{
		$token  = $request->getAttribute("token");
		$userId = $token["data"]->id;
		$user   = User::find($userId);

		if (!$user) {
			return $response->withJson([
				"error"   => 1,
				"message" => "ERROR USER",
			]);
		}

//		$response = $this->setAuthCookie($user, $response);

		$responseData = [
			"error"    => 0,
			"message"  => "SUCCESS",
			"authData" => [
				"email" => $user->email,
			],
		];

		return $response->withJson($responseData);
	}

	public function login(Request $request, Response $response)
	{

		$username = $request->getParam('email');
		$password = $request->getParam('password');

		$user = User::where("email", $username)->withTrashed()->first();

		if (!$user) {
			return $response->withJson([
				"error" => 1,
				"message" => "ERROR USER",

			]);
		}
		$hash=$user->password;
		if ($user->password != password_verify($password, $hash)) {
			return $response->withJson([
				"error" => 2,
				"message" => "ERROR PASSWORD",
			]);
		}

		$responseData = [
			"error" => 0,
			"message" => "SUCCESS",
			"authData" => [
				"email" => $user->email,
			],
		];
		return $response->withJson($responseData);

	}

	private function setSession($user,$response)
	{
		$session = new Helper();
		$session->set("email", $user->email,);
		return $response;
	}
}

