## E-commerce API with Node.Js, Express.js, Handlerbars.js, MYSQL and Sequelize ORM

In this project, you will work with a group to build a full-stack app using Node.js, Express.js, Sequelize, Handlebars.js, and MVC architecture.

## Discription 

Whether you are a collector, first time buyer, or reseller, you will need a trustworthy, reliable and easy site where you can do all of the above. On this app each user has their own personal profile that includes past orders, shopping cart, and user personal information. Each user will also have their own personal profile that includes past orders, shopping cart, and user personal information. 

## Table of Contents

## Table of Contents

- [Discription](#discription)
- [User Story](#user-stories)
- [Acceptance Criteria](#acceptance-criteria)
- [Specifications](#specifications)


## User Stories

* As a user  I want to create an account  and able to login.


* As a user when I try to login I want to be able to see a list of product.

* As a user I'm able to add to cart and checkout

### Acceptance Criteria

* It's done when the `/` homepage route renders a list of all projects from the database.

* It's done when the `/project/:id` route renders an individual project's details based on the route parameter id.

* It's done when the `/login` route renders a form to log in and a form to create a new account.

* It's done when a user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the `/profile` route renders the logged-in user's projects and a form to create a new project.

* It's done when only a logged in user can visit the `/profile` route.

* It's done when a logged in user is redirected to `/profile` when they try to visit `/login` again.

* It's done when a user on the profile page can use the form to create a new project in the database.

* It's done when a user on the profile page can select a "Delete" button to remove their project from the database.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.

## Specifications 

* The database models have the following fields and associations:

  * `User`

    * `id`: primary key

    * `name`

    * `email`

    * `password`

  * `Project`

    * `id`: primary key

    * `name`

    * `description`

    * `price`

    * `user_id`: foreign key that references `User.id`

  
---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.