write a simple web app bundler using node.

- for single page web apps.
- input: an html file
- process: detect all css and js files in the html, remove the link, paste the content inside the html. all files are local, in the same folder, but some may be nested.
- output: an html file.

i dont want any dependencies

fix: processed scripts but failed to process link stylesheet

still failed to process <link href="reset.css" rel="stylesheet" />

my js files contain const right = `</script><script>((e,t)=>{...
