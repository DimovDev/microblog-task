<?php

namespace App\Controllers;

use App\Models\Post;


use Psr\Http\Message\{
	ServerRequestInterface as Request,
	ResponseInterface as Response
};
use Slim\Http\UploadedFile;


class PostController extends BaseController
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

		$posts = Post::all();

		if (count($posts)==0) {
			return $response->withJson([
				"error" => 1,
				"message" => "No posts",

			], 404);
		}
		$responseData = [
			"error" => 0,
			"message" => "SUCCESS",
			'posts' => $posts,
		];
		return $response->withJson($responseData, 200);

	}


	public function create(Request $request, Response $response, $args)
	{
		$title = $request->getParam('title');
		$content = $request->getParam('content');
		$uploadedFiles = $request->getUploadedFiles();;
		$uploadedFile = $uploadedFiles['file'];

		if (!$title || !$content || !$uploadedFiles) {
			return $response->withJson([
				"error" => 1,
				"message" => "Please fill all fields!",

			], 411);
		}

		$post = new Post();
		$post->title = "$title";
		$post->content = "$content";
		$post->save();
		if ($post->save()) {


			$images_path = __DIR__ . "/../../public/postImages/" . $post->id . '/';
			if (!is_dir($images_path)) {
				mkdir($images_path, 0777, true);
			}
			try {

				$filename = $this->moveUploadedFile($images_path, $uploadedFile);
				$post->image = $filename;
				$post->save();

				$responseData = [
					"error" => 0,
					"message" => "Post created successfully.",
					"post" => $post,
				];
				return $response->withJson($responseData, 201);

			} catch (Exception $e) {
				$responseData = [
					"error" => 1,
					"message" => "Encountered an error: while uploading. NO FILE UPLOADED",
				];
				return $response->withJson($responseData, 500);
			}
		}
	}


	public function edit(Request $request, Response $response, $args)
	{
		$id = $request->getParam('id');

		$post = Post::where('id', $id)->first();
		if (!$post) {
			$responseData = [
				"error" => 1,
				"message" => "No such post.",

			];
			return $response->withJson($responseData, 404);
		}
		$responseData = [
			"error" => 0,
			"message" => "SUCCESS.",
			"post" => $post,
		];
		return $response->withJson($responseData, 200);
	}

	public function update(Request $request, Response $response, $args)
	{
		$title = $request->getParam('title');
		$content = $request->getParam('content');
		$id = $request->getParam('id');
		$uploadedFiles = $request->getUploadedFiles();;
		$uploadedFile = @$uploadedFiles['file'];

		if (!$title || !$content) {
			return $response->withJson([
				"error" => 1,
				"message" => "Please fill all fields!",

			]);
		}
		$post = Post::where('id', $id)->first();
		$post->title = $title;
		$post->content = $content;
		$post->update();
		if ($post->save()) {
			$responseData = [
				"error" => 0,
				"message" => "Post updated successfully.",
				"uploadedFile" => $uploadedFile
			];
			if ($uploadedFile) {
				$images_path = __DIR__ . "/../../public/postImages/" . $post->id . '/';
				if (!is_dir($images_path)) {
					mkdir($images_path, 0777, true);
				}
				try {

					$filename = $this->moveUploadedFile($images_path, $uploadedFile);
					$post->image = $filename;
					$post->save();

					$responseData = [
						"error" => 0,
						"message" => "Post updated successfully.",
					];
				} catch (Exception $e) {
					$responseData = [
						"error" => 1,
						"message" => "Encountered an error: while uploading. NO FILE UPLOADED",
					];
				}
			}
		}
		return $response->withJson($responseData);

	}

	public function show(Request $request, Response $response, $args)
	{

		$id = $request->getParam('id');

		$post = Post::where('id', $id)->first();

		if (!$post) {
			$responseData = [
				"error" => 1,
				"message" => "No posts",

			];
			return $response->withJson($responseData, 404);
		}
		$responseData = [
			"error" => 0,
			"message" => "SUCCESS",
			'post' => $post,
		];
		return $response->withJson($responseData, 200);

	}

	public function destroy(request $request, response $response)
	{
		$id = $request->getParam('id');
		$post = Post::where('id', $id)->first();
		if (!$post) {
			$responseData = [
				"error" => 1,
				"message" => "Post haven't been deleted.",
			];
			return $response->withJson($responseData, 404);
		}
		$post->delete();
		$responseData = [
			"error" => 0,
			"message" => "Post has been deleted successfully.",
		];
		return $response->withJson($responseData, 200);
	}

	function moveUploadedFile($images_path, UploadedFile $uploadedFile): string
	{
		$extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
		$basename = uniqid('img-' . date('Ymd') . '-');
		$filename = sprintf('%s.%0.8s', $basename, $extension);

		$uploadedFile->moveTo($images_path . DIRECTORY_SEPARATOR . $filename);

		return $filename;
	}
}

