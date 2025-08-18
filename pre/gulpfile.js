const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const cleanCSS = require('gulp-clean-css');
const terser = require('terser');
const htmlmin = require('gulp-htmlmin');
const through2 = require('through2');

async function processHTML() {
  return through2.obj(async function(file, enc, cb) {
    try {
      const htmlPath = file.path;
      const htmlDir = path.dirname(htmlPath);
      const $ = cheerio.load(file.contents.toString(), {
        decodeEntities: false
      });

      // Process CSS files
      $('link[rel="stylesheet"]').each(function() {
        const href = $(this).attr('href');
        if (!href) return;

        try {
          const cssPath = path.resolve(htmlDir, href);
          let cssContent = fs.readFileSync(cssPath, 'utf8');
          const minifiedCSS = cleanCSS.minify(cssContent).styles;
          $(this).replaceWith(`<style>${minifiedCSS}</style>`);
        } catch (err) {
          console.error(`Error processing CSS ${href}:`, err.message);
          $(this).remove();
        }
      });

      // Process JS files - using terser directly
      const jsElements = $('script[src]').toArray();
      for (const element of jsElements) {
        const $script = $(element);
        const src = $script.attr('src');
        if (!src) continue;

        try {
          const jsPath = path.resolve(htmlDir, src);
          let jsContent = fs.readFileSync(jsPath, 'utf8');
          const minifiedJS = await terser.minify(jsContent);
          if (minifiedJS.error) throw minifiedJS.error;
          
          $script.removeAttr('src');
          $script.text(minifiedJS.code);
        } catch (err) {
          console.error(`Error processing JS ${src}:`, err.message);
          $script.remove();
        }
      }

      // Remove HTML comments
      let processedHtml = $.html();
      processedHtml = processedHtml.replace(/<!--[\s\S]*?-->/g, '');

      file.contents = Buffer.from(processedHtml);
      cb(null, file);
    } catch (err) {
      console.error('Error processing HTML:', err.message);
      cb(err);
    }
  });
}

gulp.task('build', function() {
  return gulp.src('input.html')
    .pipe(processHTML())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true
    }))
    .pipe(gulp.dest('./'))
    .on('end', () => console.log('Processing complete! Output saved to output.html'));
});

gulp.task('default', gulp.series('build'));