const gulp = require('gulp');
const shell = require('gulp-shell');
const runSequence = require('run-sequence').use(gulp);
const protractor = require("gulp-protractor").protractor;
const logger = require("./step_definitions/util/logger.js").logger;

gulp.task('start', () => {
    return gulp.src([])
        .pipe(protractor({
            configFile: "./conf.js",
            args: ['--baseUrl', 'http://127.0.0.1:8000']
        }))
        .on('error', (err) => {
            logger.fail(err);
        });
});

gulp.task('server', (done) => {
    gulp.src('', {read: false})
        .pipe(shell([
            'start cmd /k "node_modules\\.bin\\webdriver-manager start"'
        ]))
        .on('error', (err) => {
            logger.fail(err);
        });
    setTimeout(() => {
        done();
    }, 7000);
});

gulp.task('eslint', () => {
    return gulp.src('', {read: false})
        .pipe(shell([
            'eslint ./ --fix'
        ]))
        .on('error', (err) => {
            logger.fail(err);
        });
});

gulp.task('report', () => {
    return gulp.src('', {read: false})
        .pipe(shell([
            'node reporter.js'
        ]))
        .on('error', (err) => {
            logger.fail(err);
        });
});

gulp.task('default', () => {
    runSequence('server', 'start', 'report');
});