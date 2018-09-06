var gulp = require('gulp'),
    sass = require('gulp-sass');
/*     browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "Task_02/"
    });

    gulp.watch("Task_02/*.sass", ['sass']);
    gulp.watch("Task_02/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("Task_02/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']); */
//------//
gulp.task('sass', function(){
    gulp.src('style.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
}); 