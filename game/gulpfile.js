const gulp = require('gulp');
const rollup = require('rollup');
const clean = require('gulp-clean');
const browsersync = require('browser-sync').create();

gulp.task('clean',() =>{
    return gulp.src('node_modules').pipe(clean());
});

exports.bundle = () => {
    console.log('GULP - Running bundle function');
}
exports.play = () => {
    console.log('Running Game...');
    browsersync.init({
        server:{
            baseDir: '.'
        }
    })
};

