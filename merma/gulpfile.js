const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const shell = require('gulp-shell');
const gulpsync = require('gulp-sync')(gulp);
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');


gulp.task('clean', function () {
    return gulp
        .src('build', {
            read: false,
        })
        .pipe(clean());
});

gulp.task('compile:js', () => {
    return gulp.src(['./src/public/**/*.js'])
        .pipe(babel({ presets: ['env'] }))
        .pipe(gulp.dest('./build/public'));
});

gulp.task('compile:css', () => {
    const plugins = [
        autoprefixer({ browsers: ['last 1 version'] }),
    ];
    return gulp.src('./src/public/stylesheets/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./build/public/stylesheets'));
});
gulp.task('copy:others', () => {
    return gulp
        .src([
            './src/**/*.html',
            './src/**/*.handlebars',
            './src/**/*.ttf',
            './src/**/*.otf',
            './src/**/*.eot',
            './src/**/*.svg',
            './src/**/*.woff',
            './src/**/*.woff2',
        ])
        .pipe(gulp.dest('./build'));
});

gulp.task('copy:images', () =>
    gulp.src('./src/public/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/public/images'))
);

gulp.task('compile', ['compile:js', 'compile:css']);

gulp.task('copy', ['copy:others', 'copy:images']);

gulp.task('build', gulpsync.sync(['clean', 'compile', 'copy']));

gulp.task('deploy', ["build"], shell.task(['firebase deploy']));