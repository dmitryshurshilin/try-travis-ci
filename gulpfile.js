const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('default', () => {
    gulp.src('./assets/stylus/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./assets/build/'));
});
