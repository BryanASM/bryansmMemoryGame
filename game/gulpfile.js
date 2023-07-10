const {series} = require('gulp');
const gulp = require('gulp');
const rollup = require('rollup');
const clean = require('gulp-clean');
const browsersync = require('browser-sync').create();

gulp.task('clean',() =>{
    return gulp.src('node_modules').pipe(clean());
});

function reloadServer(cd){
    server.reload()
    cd()
}

function runServer(){
    server.init({
        server:{
            baseDir:'.'
        }
    });
}

function watchingFiles(cd){
    gulp.watch('js/', {events:'all'}, reloadServer);
    gulp.watch('css/', {events:'all'}, reloadServer);
    gulp.watch('*.html', {events:'all'}, reloadServer);
    cd();
}

exports.bundle = () => {
    console.log('GULP - Running bundle function');
}
exports.play = () => {
    console.log('Running Game...');
    runServer();
    watchingFiles();
};

