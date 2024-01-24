<?php

namespace App\Controllers;



use Psr\Container\ContainerInterface;

class BaseController extends Controller
{
	/**
	 * The container instance.
	 *
	 * @var Psr\Container\ContainerInterface
	 */
	protected $c;
	protected $b;


	/**
	 * Set up controllers to have access to the container.
	 *
	 * @param ContainerInterface $container
	 */
	public function __construct(ContainerInterface $container )
	{
		parent::__construct($container);
		$this->c = $container;
		$this->b = $this->c->get('db');


	}


}
