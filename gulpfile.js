var gulp = require('gulp'),
    groupCss = require('gulp-group-css-media-queries'),
    cleanCSS = require('gulp-clean-css'),
    notify = require("gulp-notify"),
    rename = require("gulp-rename"),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    removeHtmlComments = require('gulp-remove-html-comments');

gulp.task('css', function() {
    return gulp.src('./dev/allStyle.css')
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 5%']}))
        .pipe(groupCss())
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('./app/style/'))
        .pipe(notify('Success!'));
});

gulp.task('compress', function() {
    gulp.src('./dev/img/about/dalls/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/img/about/dalls/'));
        gulp.src('./dev/img/about/nose/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/img/about/nose/'));
        gulp.src('./dev/img/background/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/img/background/'));
        gulp.src('./dev/img/exhib/new/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/img/exhib/new/'));
        gulp.src('./dev/img/exhib/old/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/img/exhib/old/'));
        gulp.src('./dev/img/header/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/img/header/'));
        gulp.src('./dev/img/prettyBorder/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/img/png/'));
});

gulp.task('html', function() {
    return gulp.src('./dev/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(removeHtmlComments())
        .pipe(gulp.dest('./app/'));
});

gulp.task('watch', function() {
   gulp.watch('dev/allStyle.css', ['css'])
   gulp.watch('./app/index.html', ['html'])
});

gulp.task('default', ['css', 'html', 'watch']);