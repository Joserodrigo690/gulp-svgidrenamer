var gulp = require('gulp');
var svgidrenamer = require('./index');

gulp.task('default', ['svgmin']);

gulp.task('svgmin', function () {
    return gulp.src('example/input/**/*.svg')
        .pipe(svgidrenamer())
        .pipe(gulp.dest('example/output'));
});
