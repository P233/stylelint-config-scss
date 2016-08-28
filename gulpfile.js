const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');

gulp.task('lint', () => {
  return gulp
    .src('./guidelines.scss')
    .pipe(gulpStylelint({
      syntax: 'scss',
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }));
});

gulp.task('watch', () => {
  gulp.watch(['./guidelines.scss', './.stylelintrc.json'], ['lint']);
});
