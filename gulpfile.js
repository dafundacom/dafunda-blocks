const fs = require('fs')

const {
  src, dest, watch, series, parallel,
} = require('gulp')



const merge = require('merge-stream')

const concat = require('gulp-concat')



const sass = require('gulp-sass')(require('sass'))

const postcss = require('gulp-postcss')

const autoprefixer = require('gulp-autoprefixer')

const rimraf = require('rimraf')

const terser = require('terser')

const cssnano = require('cssnano')

const gulpTerser = require('gulp-terser')

const glob = require('glob')



const BUILD_DIR = 'build'



const styles = [

  {

    src: './src/scss/editor.s[ca]ss',

    distName: 'dbe.blocks.editor.build.css',

  },

  {

    src: './src/scss/frontend.s[ca]ss',

    distName: 'dbe.blocks.style.build.css',

  },

]



const _style = () => {

  const task = styles.map((style) => {

    const tt = src(style.src)

      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))

      .pipe(

        postcss([

          cssnano(),

          require('postcss-import'),

          require('tailwindcss'),

          require('autoprefixer'),

        ]),

      )

      .pipe(

        autoprefixer({

          browserlist: ['last 5 versions'],

          cascade: false,

        }),

      )



    tt.pipe(concat(style.distName)).pipe(dest(`./${BUILD_DIR}`))



    return tt

  })



  return merge(task)

}



const _config_json = (cb) => {

  glob("./src/blocks/*/config.mjs", {}, (er, paths) => {

    console.log("paths", paths);

    paths.forEach(async (_path) => {

      let data = await import(_path)

      data = data.default

      fs.writeFileSync(_path.replace("config.mjs", "block.json"), JSON.stringify(data), "utf8")

    })

  })

  cb()

}



function _clean(cb) {

  // rimraf('./dist/**/*.*', cb)

  cb()

}



function watchTask(cb) {

  watch('./src/**/*.{ts,tsx,js,jsx,php,scss}', _style, _config_json)

  cb()

}



exports.default = series(_clean, _style, _config_json, watchTask)

exports.build = series(_clean, parallel(_style, _config_json))

