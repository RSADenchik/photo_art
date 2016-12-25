var gulp          = require('gulp'),
    connect       = require('gulp-connect'),
    sass          = require('gulp-sass'),
    uncss         = require('gulp-uncss'),
    prefix        = require('gulp-autoprefixer'),
    minifyCSS     = require('gulp-minify-css'),
    autowatch     = require('gulp-autowatch'),
    plumber       = require('gulp-plumber'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    csso          = require('gulp-csso'),
    imagemin      = require('gulp-imagemin');


// HTML

gulp.task('htmls', function () {
    gulp.src(['*.html'])
        .pipe(connect.reload());
});

// SCSS

gulp.task('styles', function() {
    return gulp.src(['css/scss/main.scss'] )
        .pipe(plumber())
        .pipe(sass())
        //.pipe(prefix([{  browsers: ['IE 8', 'IE 9', 'last 5 versions', 'Firefox 14', 'Opera 11.1']  }]))
        // .pipe(minifyCSS({keepBreaks: true}))
        .pipe(csso())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

// Delete unused classes
gulp.task('uncss', function() {
   return gulp.src('css/main.css')
       .pipe(uncss({
           html: ['index.html']
       }))
       .pipe(gulp.dest('./out'));
});
// Delete unused images



 // JS
gulp.task('js', function() {
    gulp.src([
        'js/partials/jquery-2.0.0.min.js',
        'js/partials/bootstrap.min.js',
        'js/partials/mobile-detect.min.js',
        'js/partials/jquery.easing.min.js',
        'js/partials/jquery.fadethis.min.js',
        'js/partials/jquery.filterizr.js',
        'js/partials/jquery.uploadfile.js',
        'js/partials/jquery.googlemap.js',
        'js/partials/responsiveslides.min.js',
        'js/partials/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/'));

});

// WATCH

var paths = {
    htmls:          ['*.html'],
    styles:         'css/scss/**/*.scss'
};


gulp.task('watch', function(cb) {
    autowatch(gulp, paths);
    return cb();
});

// IMAGE

gulp.task('images', function() {
    gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'));
});

// LIVERELOAD 

gulp.task('connect', function() {
    connect.server({
        port: '8000',
        livereload: true
    });
});

// DEFAULT

gulp.task('default',  [
    'connect',
    'styles',
    'watch'
]);