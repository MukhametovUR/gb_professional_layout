'use strict';

const browserSync = require('browser-sync');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// gulp.task('css', function() {
//     return gulp.src('./css/scss/style.scss')
//             .pipe(sass())
//             .pipe(gulp.dest("build/css"))
// });

// gulp.task('copy-html', function() {
//     return gulp.src('index.html')
//             .pipe(sass())
//             .pipe(gulp.dest("build"))
// });

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.watch("./scss/*.scss", gulp.series('css','reload'));

gulp.task('reload', function(done) {
    browserSync.reload();
    done();
});