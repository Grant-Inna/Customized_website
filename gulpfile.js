var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    notify = require("gulp-notify"),
    rename = require("gulp-rename");

gulp.task('default', function() {
    return gulp.src('dev/allStyle.css')
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('style/'))
        .pipe(notify('Success!'));
});

gulp.task('watch', function() {
   gulp.watch('dev/allStyle.css', ['default']);
});