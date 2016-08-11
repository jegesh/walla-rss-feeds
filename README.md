# rss-app

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Clone this repository, then run 
`npm install`
`bower install`

Make sure the npm_modules and bower_components directories are in the root project directory, alongside the index.html file.  Sometimes they end up getting installed in a child directory.  If that's the case, just move them out to the root directory.

### Development
Run `grunt serve` to run the project locally and enable live reload and live compilation of SASS to CSS.

### Production w/ Docker
Make sure the Docker daemon is up, then run `bash deploy_docker.sh`, and the app will run in a container with Express.js, on port 8080	

## Testing

Running `grunt test` will run the unit tests with karma.
