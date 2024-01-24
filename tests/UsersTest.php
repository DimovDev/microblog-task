<?php


use GuzzleHttp\Client;
use PHPUnit\Framework\TestCase;
use Slim\Http\Environment;
use Slim\Http\Request as Request;
use Slim\Http\UploadedFile;



class UsersTest extends TestCase
{
	protected  $app;

	public function setUp()
	{

		try {
			$dotenv = Dotenv\Dotenv::createMutable(__DIR__ . '/../', ".env.testing");
			$dotenv->load();
		} catch (Dotenv\Exception\InvalidPathException $e) {
			//
		}
		$this->http = new GuzzleHttp\Client([
			'base_uri' => 'http://localhost:8080/',
			'exceptions' => false,
			'http_errors' => true
		]);
	}

	public function testCreateUserWithValidInformation()
	{

		$request = $this->http->post('/users/create', [

			"query" => [
				"name" => "test name",
				"email" => "test@email.com",
				"password" => "password",
				"repassword" => "password",
			]
		]);
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(201, $request->getStatusCode());
		$this->assertArrayHasKey('authData', $body);
	}

	public function testCreateUserWithMissingNameOrEmail()
	{

		$request = $this->http->post('/users/create', [
			"query" => [
				"name" => "test name",
				"email" => "test@email.com",

			]
		]);
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(411, $request->getStatusCode());
		$this->assertArrayHasKey('message', $body);
		$this->assertArrayHasKey('error', $body);
		$this->assertSame($body["message"], "Please fill all fields!");
		$this->assertSame($body["error"], 1);
	}



	public function testGetAllUsers()
	{
		$request = $this->http->post('/users/users');
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(200, $request->getStatusCode());
		$this->assertArrayHasKey('users', $body);
		$this->assertArrayHasKey('message', $body);


	}


	public function testGetPostWithoutParameter()
	{
		$request = $this->http->post('/posts/post');
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(404, $request->getStatusCode());
		$this->assertArrayHasKey('error', $body);
		$this->assertArrayHasKey('message', $body);


	}

	public function testDeleteUserWithParameter()
	{
		$request = $this->http->post('/users/delete', [

			"query" => [
				"id" => 2,
			]
		]);
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(200, $request->getStatusCode());
		$this->assertArrayHasKey('message', $body);


	}

	public function testDeleteUsersWithoutParameter()
	{
		$request = $this->http->post('/users/delete');
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(404, $request->getStatusCode());
		$this->assertArrayHasKey('message', $body);
	}
	public function testLoginUserWithValidInformation()
	{

		$request = $this->http->post('/login', [

			"query" => [

				"email" => "admin@example.com",
				"password" => "password",

			]
		]);
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(200, $request->getStatusCode());
		$this->assertArrayHasKey('authData', $body);
	}

	public function testLoginUserWithInvalidInformation()
	{

		$request = $this->http->post('/login', [

			"query" => [
				"email" => "admin@example.com",
				"password" => "wrongpassword",
			]
		]);
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(401, $request->getStatusCode());
		$this->assertArrayHasKey('message', $body);
	}

}

