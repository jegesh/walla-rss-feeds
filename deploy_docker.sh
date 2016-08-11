#!/bin/bash

npm install -g bower
npm install --production
bower install
grunt build
docker build -t angular_app .
docker run -p 8080:8080 angular_app
