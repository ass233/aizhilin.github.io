/**
 * Created by 北狼 on 2016/9/26.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");
gulp.task("default",function () {
    return gulp.src("ES6/es6.js")
    pipe(babel())
    pipe(gulp.dest('ES6/dist'));
});