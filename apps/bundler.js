const fs = require("fs");
const path = require("path");

function escapeScriptTags(jsCode) {
  return jsCode.replace(/<\/script>/gi, "<\\/script>");
}

function bundleHTML(inputFile, outputFile) {
  try {
    // Read the input HTML file
    let htmlContent = fs.readFileSync(inputFile, "utf8");
    const baseDir = path.dirname(inputFile);

    // Process CSS links
    htmlContent = htmlContent.replace(
      /<link[^>]*href="([^"]+\.css)"[^>]*>/gi,
      (match, cssPath) => {
        try {
          const fullCssPath = path.join(baseDir, cssPath);
          const cssContent = fs.readFileSync(fullCssPath, "utf8");
          return `<style>${cssContent}</style>`;
        } catch (err) {
          console.error(`Error processing CSS file ${cssPath}:`, err);
          return match;
        }
      }
    );

    // Process JavaScript files
    htmlContent = htmlContent.replace(
      /<script[^>]*src="([^"]+\.js)"[^>]*>(\s*<\/script>)?/gi,
      (match, jsPath) => {
        try {
          const fullJsPath = path.join(baseDir, jsPath);
          let jsContent = fs.readFileSync(fullJsPath, "utf8");
          jsContent = escapeScriptTags(jsContent);
          return `<script>${jsContent}</script>`;
        } catch (err) {
          console.error(`Error processing JS file ${jsPath}:`, err);
          return match;
        }
      }
    );

    // Write the output HTML file
    fs.writeFileSync(outputFile, htmlContent);
    console.log(`Successfully bundled ${inputFile} to ${outputFile}`);
  } catch (err) {
    console.error("Error during bundling:", err);
  }
}

// Example usage:
// node bundler.js input.html output.html
if (process.argv.length >= 4) {
  const inputFile = process.argv[2];
  const outputFile = process.argv[3];
  bundleHTML(inputFile, outputFile);
} else {
  console.log("Usage: node bundler.js <input.html> <output.html>");
}
