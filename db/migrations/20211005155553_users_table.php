<?php

use Phinx\Migration\AbstractMigration;

class UsersTable extends AbstractMigration
{

    public function change()
    {
	    $users = $this->table('users');
	    $users->addColumn('name', 'string', ['null' => true,'limit' => 80])
		    ->addColumn('email', 'string')
		    ->addColumn('password', 'string')
		    ->addColumn('created_at', 'datetime', ['default' => 'CURRENT_TIMESTAMP'])
		    ->addColumn('updated_at', 'datetime', ['default' => 'CURRENT_TIMESTAMP'])
		    ->addColumn('deleted_at', 'datetime', ['null' => true])
		    ->addIndex([ 'email'], ['unique' => true])
		    ->create();
    }
}
