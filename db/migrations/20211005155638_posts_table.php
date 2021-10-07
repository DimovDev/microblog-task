<?php

use Phinx\Migration\AbstractMigration;

class PostsTable extends AbstractMigration
{

    public function change()
    {
	    $posts = $this->table('posts');
	    $posts->addColumn('title', 'string')
		    ->addColumn('content', 'longblob')
		    ->addColumn('image', 'string')
		    ->addColumn('created_at', 'datetime', ['default' => 'CURRENT_TIMESTAMP'])
		    ->addColumn('updated_at', 'datetime', ['default' => 'CURRENT_TIMESTAMP'])
		    ->addColumn('deleted_at', 'datetime', ['null' => true])

		    ->create();
    }
}
