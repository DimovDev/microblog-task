<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder;

class Test extends Model
{
	use SoftDeletes;

	protected $table="users_test";



	/**
	 * @var array
	 */
	protected $fillable = [
		'name', 'email','password','role'
	];

}
