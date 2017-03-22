var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    notify = require("gulp-notify"),
    rename = require("gulp-rename"),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

gulp.task('css', function() {
    return gulp.src('./dev/allStyle.css')
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 5%']}))
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('app/style/'))
        .pipe(connect.reload())
        .pipe(notify('Success!'));
});

gulp.task('html', function() {
    gulp.src('app/index.html')
    .pipe(connect.reload());

});

gulp.task('connect', function() {
    connect.server({
        root: 'app/',
        livereload: true
    });
});

gulp.task('watch', function() {
   gulp.watch('dev/allStyle.css', ['css'])
   gulp.watch('app/index.html', ['html'])
});

gulp.task('default', ['css', 'html', 'watch', 'connect']);