# Simple Todo

This is yet another simple todo app for learning NodeJS, Express, Typescript, Mongoose and Angular2.

## Getting Started

To install it to your local machine do this:
```
git clone git://github.com/deugene/simple-todo.git
```
Installing dependencies:
```
cd simple-todo
npm install
```
Start mongod service, if it doesn't autostart with OS. By default app connect to
```
mongodb://localhost/ng2expressTodo
```
in development mode. You may change it in server/app.ts file.

## Commands

Starting app under development env with nodemon:
```
npm run dev
```
Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

# Client

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Build

Run `ng build` to build client part of the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Enjoy!
