let gulp = require('gulp');
let sass = require('gulp-sass') (require('node-sass'));
let browserSync = require('browser-sync').create();
let useref = require('gulp-useref');
let uglify = require('gulp-uglify');
let gulpIf = require('gulp-if');
let cssnano = require('gulp-cssnano');

// gulp.task('hello', function(){
//     console.log('hello')
// })

gulp.task('styles',  function(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('useref', function(){
    return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('app/js/*.js', uglify()))
    .pipe(gulp.dest('dist'))
});



gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', gulp.series(['styles']));
    
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload);
})