<?php

namespace App\Controllers;

use App\Controllers\Controller;
use Psr\Http\Message\{
    ServerRequestInterface as Request,
    ResponseInterface as Response
};

class HomeController extends BaseController
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
//dump($response); die();
        return $this->c['view']->render($response, 'home/index.twig', [
            'appName' => $this->c['settings']['app']['name'],
        ]);
    }
}
