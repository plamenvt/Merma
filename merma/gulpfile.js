const gulp = require("gulp"),
gulpsync = require("gulp-sync")(gulp),
clean = require("gulp-clean"),
nodemon = require("gulp-nodemon");


gulp.task("clean", () => {
return gulp.src("build", { read: false })
    .pipe(clean({ force: true }));
});

const babel = require("gulp-babel");

gulp.task("compile:js", () => {
    return gulp.src("src/**/*.js")
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(gulp.dest("build/js"));
});

gulp.task("compile", gulpsync.sync(["compile:js"]));


gulp.task("build", gulpsync.sync(["compile"]));