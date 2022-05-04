let gulp = require('gulp');
let sass = require('gulp-sass') (require('node-sass'));
let browserSync = require('browser-sync').create();


gulp.task('styles', function(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'Infosys-Equinox'
        },
    })
});


gulp.task('watch', function(){
    return gulp.watch('scss/**/*.scss', gulp.series(['styles']));
})