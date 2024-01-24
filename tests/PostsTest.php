<?php


use GuzzleHttp\Client;
use PHPUnit\Framework\TestCase;
use Slim\Http\Environment;
use Slim\Http\Request as Request;
use Slim\Http\UploadedFile;



class PostsTest extends TestCase
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

	public function testCreatePostWithValidInformation()
	{

		$request = $this->http->post('/posts/create', [
			'multipart' => [

				[
					"name" => 'file',
					"contents" => "contents",
				],
				[

					"name" => 'file',
					'contents' => GuzzleHttp\Psr7\Utils::tryFopen('https://secure.gravatar.com/avatar/97fd5c0941206ad77b926864bc2eaaa0?s=74&d=mm&r=g', 'r')
				],

			],
			"query" => [
				"title" => "test title",
				"content" => "test content",
			]
		]);
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(201, $request->getStatusCode());
		$this->assertArrayHasKey('post', $body);
	}

	public function testCreatePostWithMissingTitleOrContext()
	{

		$request = $this->http->post('/posts/create', [
			'multipart' => [

				[
					"contents" => "contents",
					"name" => 'file',
				],
				[

					"name" => 'file',
					'contents' => GuzzleHttp\Psr7\Utils::tryFopen('https://secure.gravatar.com/avatar/97fd5c0941206ad77b926864bc2eaaa0?s=74&d=mm&r=g', 'r')
				],

			],

		]);
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(411, $request->getStatusCode());
		$this->assertArrayHasKey('message', $body);
		$this->assertArrayHasKey('error', $body);
		$this->assertSame($body["message"], "Please fill all fields!");
		$this->assertSame($body["error"], 1);
	}

	public function testCreatePostWithMissingImage()
	{

		$request = $this->http->post('/posts/create', [

			"query" => [
				"title" => "title",
				"content" => "content",
			]
		]);
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(500, $request->getStatusCode());

	}

	public function testGetAllPosts()
	{
		$request = $this->http->post('/posts/posts');
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(200, $request->getStatusCode());
		$this->assertArrayHasKey('posts', $body);
		$this->assertArrayHasKey('message', $body);


	}

	public function testGetPostWithParameter()
	{
		$request = $this->http->post('/posts/post', [

			"query" => [
				"id" => 4,
				]
		]);
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(200, $request->getStatusCode());
		$this->assertArrayHasKey('post', $body);
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

	public function testDeletePostWithParameter()
	{
		$request = $this->http->post('/posts/delete', [

			"query" => [
				"id" => 2,
			]
		]);
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(200, $request->getStatusCode());
		$this->assertArrayHasKey('message', $body);


	}

	public function testDeletePostWithoutParameter()
	{
		$request = $this->http->post('/posts/delete');
		$body = json_decode($request->getBody(), true);
		$this->assertEquals(404, $request->getStatusCode());
		$this->assertArrayHasKey('message', $body);



	}

}

