# Softplayer
 
Softplayer contains projects based in Spring Boot 2.2 with Angular 9.0. These are a simple project with Rest architecture that simulates o CRUD for persons.

**Prerequisites:** 
* [Node *](https://nodejs.org/)
* [Java 8](https://adoptopenjdk.net/)
* [Angular 9](https://angular.io/cli)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/MarcioCostaRJr/softplayer.git
cd softplayer
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.

### Spring Boot based in Maven

To import the project into any IDE, just use some of the best known ones:

* [IntelliJ IDEA](https://www.jetbrains.com/idea/)
* [Spring Tools Suite](https://spring.io/tools)
* Any others;

Inside the IDE, just run the main class. After execution, open your browser to <http://localhost:8080>.

### Angular Configuration

To import the project into any IDE, just use some of the best known ones:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Brackets](http://brackets.io/)
* Any others;

Navigate into the `notes` folder and run:
 
```bash
npm install && npm start
```

Open your browser to <http://localhost:4200>, log in, and create notes to your hearts content!

## Information important

These projects use Basic Authentication, just data for access:

> URL: http://localhost:4200/login
>
>Description: Login to the application.

```javascript
Request:Body(Raw - JSON)		
{
    "username" : "softplayer",
    "password" : "password"
}
```

## Tools / framework used

* Java 8
* Spring Boot
* Spring Security
* Spring Data JPA
* Basic Authentication
* Lombok
* Javax Mail
* Caelum Stella Core
* H2
* NodeJs
* Angular CLI 9
