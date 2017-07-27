var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Dynamic server
gulp.task('default', function() {
    browserSync.init({
        host: "outfront/",
        injectChanges: true

    });

    // Have BrowserSync inject styles when it notices changes to any css files within the base folder
    gulp.watch("./*.css").on('change', function() {
      // grab css files and send them into browserSync.stream
      // this injects the css into the page
      gulp.src('./*.css')
        .pipe(browserSync.stream());
    });

    // Have BrowserSync reload the page when php files are changed
    gulp.watch("./*.php").on('change', browserSync.reload);

});

// NOTE: USE THIS FILE WITH KOALA OR SCOUT APP IF USING SASS. 
