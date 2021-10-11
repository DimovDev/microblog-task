<?php

namespace App\Controllers;

use App\Controllers\Controller;


use App\Models\User;

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




	public function login(Request $request, Response $response)
	{

		$username = $request->getParam('email');
		$password = $request->getParam('password');

		$user = User::where("email", $username)->first();

		if (!$user || $user->password != password_verify($password, $user->password)) {
			return $response->withJson([
				"error" => 1,
				"message" => "Email or password are incorrect",

			]);
		}
		$hash=$user->password;
		if ($user->password != password_verify($password, $hash)) {
			return $response->withJson([
				"error" => 2,
				"message" => "ERROR PASSWORD",
			],401);
		}

		$responseData = [
			"error" => 0,
			"message" => "SUCCESS",
			"authData" => [
				"email" => $user->email,
			],
		];
		return $response->withJson($responseData,200);

	}

	private function setSession($user,$response)
	{
		$session = new Helper();
		$session->set("email", $user->email,);
		return $response;
	}
}

