var gulp = require('gulp'),
    groupCss = require('gulp-group-css-media-queries'),
    cleanCSS = require('gulp-clean-css'),
    notify = require("gulp-notify"),
    rename = require("gulp-rename"),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin = require('gulp-htmlmin');

gulp.task('css', function() {
    return gulp.src('./dev/allStyle.css')
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 5%']}))
        .pipe(groupCss())
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('./app/style/'))
        .pipe(notify('Success!'));
});

gulp.task('html', function() {
    return gulp.src('./dev/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./app/'));
});

gulp.task('watch', function() {
   gulp.watch('dev/allStyle.css', ['css'])
   gulp.watch('./app/index.html', ['html'])
});

gulp.task('default', ['css', 'html', 'watch']);