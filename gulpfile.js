// Carregar os modulos
var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('toque/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('toque/main.css'))
});

gulp.task ('default', function () {
	gulp.watch('scss/*.scss', ['sass']);
});
