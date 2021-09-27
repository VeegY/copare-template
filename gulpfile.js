const eslint = require("gulp-eslint")
const {dest, series, src, task} = require("gulp");
const typescript = require("gulp-typescript");
const mocha = require('gulp-mocha');
const typescriptProject = typescript.createProject("tsconfig.json");
const del = require("del");

function cleanLib() {
    return del("lib/**/*")
}

function test() {
    return src('test/**/*.ts')
        .pipe(mocha({reporter: 'list', ui: 'bdd', require: ['ts-node/register']}));
}

function lint(){
    return src('src/*.*')
        .pipe(eslint({
            fix: true,
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function compileLib() {
    return typescriptProject
        .src()
        .pipe(typescriptProject())
        .pipe(dest("lib"));
}

task('build:lib', series(lint, test, compileLib));
task("rebuild:lib", series(cleanLib, "build:lib"));
task("test", test);
