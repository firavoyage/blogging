write a js fn. it's a latex converter.

- use const and arrow fn.
- param: string html including single and double dollar symbols.
- returns: string html, which is already converted. no need to include any rendering library using the returned value. just place it in dom and it shows properly.
- the fn should have jsdoc comment.
- use katex. the cdn links should be an html code block before the script.
- abstract the core fn from string latex inside dollar symbols to string html. the main converter should depend on the core.
- do not add a ui. i only want the two fn in one js code block and the cdn links in an html code block.
- do not convert the content that should not be converted. for example, latex in comments, inline code or code block, etc. you know the full list of elements that should be ignored.
- do not pass the full html to katex using innerhtml, which means if there is an img tag with src in the html, dont let there be a network side effect. a possible solution is to only pass the selected latex to core.
- if katex have some useful config, tell me and compare the options.
- if you have any suggestions, tell me.
