# Angular2 With Clarity Frontend with Springboot Backend Seed Project
A basic project that includes a frontend with Angular2 + Clarity framework with Spring boot as the backend

#Installation
Install maven (latest 3.3). Ensure your PATH variable has the maven installation path included

Install Java 8 (ensure your JAVA_HOME is pointintg to Java 8 Contents/Home) 

git clone the project in a directory. 
cd directory/angular2-clarity-springboot-seed
$ mvn clean install
everything should build

cd into backend : 
$ mvn spring-boot:run
this will start the backend server

in another terminal cd into frontend/src/main/frontend
$ npm start
this will start the angular-cli server running @port 4200

in a browser localhost:4200 - will show the Angular2-Clarity UI 
