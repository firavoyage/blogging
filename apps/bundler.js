const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function bundleWebApp(inputHtmlPath, outputHtmlPath) {
    try {
        let htmlContent = await readFile(inputHtmlPath, 'utf-8');
        const baseDir = path.dirname(inputHtmlPath);
        
        // Process all stylesheets (multiple formats)
        htmlContent = await processResources(htmlContent, baseDir, [
            // Matches: <link rel="stylesheet" href="...">
            /<link\s+[^>]*rel=("|')stylesheet\1[^>]*href=("|')([^"']+)\2[^>]*>/gi,
            // Matches: <link href="..." rel="stylesheet">
            /<link\s+[^>]*href=("|')([^"']+)\1[^>]*rel=("|')stylesheet\3[^>]*>/gi,
            // Matches self-closing: <link href="..." rel="stylesheet" />
            /<link\s+[^>]*href=("|')([^"']+)\1[^>]*rel=("|')stylesheet\3[^>]*\/>/gi
        ], '<style>', '</style>');
        
        // Process all scripts
        htmlContent = await processResources(htmlContent, baseDir, [
            // Matches: <script src="..."></script>
            /<script\s+[^>]*src=("|')([^"']+)\1[^>]*>\s*<\/script>/gi,
            // Matches self-closing (invalid but some use it)
            /<script\s+[^>]*src=("|')([^"']+)\1[^>]*\/>/gi
        ], '<script>', '</script>');
        
        await writeFile(outputHtmlPath, htmlContent);
        console.log(`Successfully bundled to ${outputHtmlPath}`);
    } catch (error) {
        console.error('Error during bundling:', error);
    }
}

async function processResources(htmlContent, baseDir, regexPatterns, openTag, closeTag) {
    const replacements = [];
    
    for (const regex of regexPatterns) {
        let match;
        while ((match = regex.exec(htmlContent)) !== null) {
            const fullTag = match[0];
            // The href/src value is in different positions depending on the pattern
            const resourcePath = match[2] || match[3] || match[1];
            
            if (resourcePath.startsWith('http') || resourcePath.startsWith('//')) {
                continue;
            }
            
            const fullPath = path.join(baseDir, resourcePath);
            try {
                const content = await readFile(fullPath, 'utf-8');
                replacements.push({
                    tag: fullTag,
                    content: `${openTag}\n${content}\n${closeTag}`
                });
            } catch (error) {
                console.error(`Error reading file ${resourcePath}:`, error);
            }
        }
    }
    
    // Make replacements in reverse order to avoid position shifting
    for (let i = replacements.length - 1; i >= 0; i--) {
        htmlContent = htmlContent.replace(replacements[i].tag, replacements[i].content);
    }
    
    return htmlContent;
}

// Usage
if (process.argv.length < 4) {
    console.log('Usage: node bundler.js <input.html> <output.html>');
    process.exit(1);
}

bundleWebApp(process.argv[2], process.argv[3]);