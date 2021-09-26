# Continous Package Release Template
This repository acts as a template repository to create an npm package that is continously upgraded and published automatically when changes are pushed to the main branch.
Furthermore, the first iteration of this repository will be used to test this aswell.

## Features
### gulp
This repository and furthermore the pipeline uses [gulp](https://gulpjs.com/) to release the package and do the
work required to do so. A close contender to gulp was the typescript as a standalone compiler to be run via the command line.
However, in order to support enhancement of the pipeline itself gulp was chosen. This allows for different
processes to be run by a single entity, such as testing, documentation generation and other things.
 
*ToDo*
* [ ] Set-Up [eslint rules](https://eslint.org/docs/rules/) - Most importantly the once that can be fixed with --fix.
* [ ] Basic Code Structure and NPM dependencies 
* [ ] Add Release notes handler 
* [ ] Add more todo items
