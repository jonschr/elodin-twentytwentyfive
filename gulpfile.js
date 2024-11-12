//! CSS
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass')); // Ensures Dart Sass is used
var sourcemaps = require('gulp-sourcemaps');
var sassGlob = require('gulp-sass-glob');
const cleanCSS = require('gulp-clean-css');

gulp.task('style-dev', function () {
	return gulp
		.src('assets/css/theme-style.scss')
		.pipe(sassGlob())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets/dist/'));
});

gulp.task('style-prod', function () {
	return gulp
		.src('assets/css/theme-style.scss')
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('assets/dist/'));
});

// don't do a sourcemap for gutenberg
gulp.task('gutenberg-style', function () {
	return gulp
		.src('assets/css/gutenberg-style.scss')
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('assets/dist/'));
});

// don't do a sourcemap for editor
gulp.task('editor-style', function () {
	return gulp
		.src('assets/css/editor-style.scss')
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('assets/dist/'));
});

//! JAVASCRIPT
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var path = require('path');

//script paths
var jsFiles = 'assets/js/**/*.js';
var jsDest = 'assets/dist/';

gulp.task('scripts', function () {
	return gulp
		.src(jsFiles)
		.pipe(
			rename(function (path) {
				path.basename += '.min';
			})
		)
		.pipe(uglify())
		.pipe(gulp.dest(jsDest));
});

//* Watchers
gulp.task('dev', function () {
	gulp.watch(
		'assets/css/**/*.scss',
		gulp.series(['style-dev', 'gutenberg-style', 'editor-style'])
	);
	gulp.watch('assets/js/**/*.js', gulp.series(['scripts']));
});

gulp.task('prod', function () {
	gulp.watch(
		'assets/css/**/*.scss',
		gulp.series(['style-prod', 'gutenberg-style', 'editor-style'])
	);
	gulp.watch('assets/js/**/*.js', gulp.series(['scripts']));
});

//* Set the default task to dev
gulp.task('default', gulp.series(['dev']));
