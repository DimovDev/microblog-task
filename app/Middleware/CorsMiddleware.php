<?php
namespace App\Middleware;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class CorsMiddleware{
	/**
 *
	 * @param  ServerRequestInterface $request  PSR7 request
	 * @param ResponseInterface $response PSR7 response
	 * @param callable $next     Next middleware
	 *
	 * @return ResponseInterface
	 */

	public function __invoke(ServerRequestInterface $request, ResponseInterface $response, callable $next): ResponseInterface
	{
		$response = $next($request, $response);
		return $response
			->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000'  )
			->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization,Set-Cookie,withCredentials')
			->withHeader("Content-Type", "application/json",'image/*')
			->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS,HEAD');
	}
}
