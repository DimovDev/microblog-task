<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
	use SoftDeletes;

	protected $table="users";
	/**
	 * @var array
	 */
	protected $fillable = [
		'name', 'email','password'
	];

}
