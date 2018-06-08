var gulp = require('gulp');

gulp.task('develop', function () {
  nodemon({ script: 'bin/www', ext: 'html js' })
    .on('restart', function () {
      console.log('restarted!')
    })
})
