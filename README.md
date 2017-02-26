# Angular2 With Clarity Frontend with Springboot Backend Seed Project
A basic project that includes a frontend ( Angular2 + Clarity framework) and a backend (Spring boot)

#Installation
Install maven (latest 3.3). Ensure your PATH variable has the maven installation path included

Install Java 8 (ensure your JAVA_HOME is pointintg to Java 8 Contents/Home) 

You also need npm and node.js .. use Homebrew to install node/npm

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

#Development
This is just a seed project. Use this to kick start your development with Clarity/Angular2 while use SpringBoot serving as the REST backend

Right now this project uses Clarity Navigation. So there's a header, a side Navigation block and the navigation content area.

you can fill in the side-navigation using Clarity component tree-view. 
More on Clarity : https://vmware.github.io/clarity/ 
