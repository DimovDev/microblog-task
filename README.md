# Micro blog-task


This project was created with Slim 3, Bootstrap 4, and React.



1.Clone this repository:https://github.com/DimovDev/microblog-task/edit/dev

2.In console :cp .env.example .env or copy .env.example data in .env

3.Create a new mysql database and fill your db name,username and password in .env

4.Install all dependencies: npm run init

This will starting: npm install  && composer install && composer && vendor/bin/phpunit tests && php vendor/bin/phinx migrate

vendor/bin/phpunit -starts all unit tests

php vendor/bin/phinx migrate  -start migration  will be creating tables and inserts admin user user:admin@example.com pass:password

3. Start application: npm run runer:
This will be starting run php -S localhost:8080 -t public  public/index.php & react-scripts start

4. Open in your browser http://localhost:3000/

5. Enjoy the blog.To see admin panel you login first with user:admin@example.com pass:password


## License

The Slim and React frameworks is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
