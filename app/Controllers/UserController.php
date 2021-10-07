<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\Test;

use App\Models\User;

use Cake\Utility\Hash;
use Illuminate\Database\Query\Builder;


use Psr\Http\Message\{
	ServerRequestInterface as Request,
	ResponseInterface as Response
};

class UserController extends BaseController
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


		$users = User::all();

		if (!$users) {
			return $response->withJson([
				"error" => 1,
				"message" => "NO USERS",

			]);
		}
		$responseData = [
			"error" => 0,
			"message" => "SUCCESS",
			"users" => $users,

		];
		return $response->withJson($responseData);

	}

	public function create(Request $request, Response $response, $args)
	{
		$name = $request->getParam('name');
		$email = $request->getParam('email');
		$password = $request->getParam('password');
		$confirmPassword = $request->getParam('confirmPassword');

		if (User::whereEmail($email)->count() > 0) {
			return $response->withJson([
				"error" => 1,
				"message" => "This email is already used.",
			]);
		}

		if ($password !== $confirmPassword) {
			return $response->withJson([
				"error" => 1,
				"message" => "Password don't match",

			]);
		}
		if (!$password || !$confirmPassword || !$email || !name) {
			return $response->withJson([
				"error" => 1,
				"message" => "Please fill all fields!",

			]);
		}
		$user = new User();
		$user->name = $name;
		$user->password = password_hash($password, PASSWORD_DEFAULT);
		$user->email = $email;
		$user->save();
		if ($user) {
			$responseData = [
				"error" => 0,
				"message" => "User created successfully.",

			];

		}
		return $response->withJson($responseData);

	}

	public function edit(Request $request, Response $response, $args)
	{
		$id = $request->getParam('id');

		$user = User::where('id', $id)->first();
		if ($user) {
			$responseData = [
				"error" => 0,
				"user" => $user
			];
		}
		return $response->withJson($responseData);
	}

	public function update(Request $request, Response $response, $args)
	{
		$id = $request->getParam('id');
		$name = $request->getParam('name');
		$email = $request->getParam('email');
		$password = $request->getParam('password');
		$confirmPassword = $request->getParam('confirmPassword');


		if ($password !== $confirmPassword) {
			return $response->withJson([
				"error" => 1,
				"message" => "Password don't match",

			]);
		}
		if (!$password || !$confirmPassword || !$email || !name) {
			return $response->withJson([
				"error" => 1,
				"message" => "Please fill all fields!",

			]);
		}
		$user = User::where('id', $id)->first();
		$user->name = $name;
		$user->password = password_hash($password, PASSWORD_DEFAULT);
		$user->email = $email;
		$user->save();
		if ($user->save()) {
			$responseData = [
				"error" => 0,
				"message" => "User has been updated successfully.",

			];
		}
		return $response->withJson($responseData);

	}

	public function destroy(request $request, response $response)
	{
		$id = $request->getParam('id');
		$user = User::where('id', $id)->first();
		$user->delete();
		if ($user->delete()) {
			$responseData = [
				"error" => 0,
				"message" => "User has been deleted successfully.",
			];
		}
		return $response->withJson($responseData);
	}
}

