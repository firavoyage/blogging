# app global vars | f
@firavoyage 20240224

these are the global variables(javascript) i use when writing a web app

- `f` functions
the basic functions to process data
- `i` instructions
the integration of functions,for each button on the ui theres an instruction behind it 
- `r` resources
some data will be kept in localstorage
others will lead to a get request
  - `s` status
  - `u` url
  - `v` version
  - `d` data
- `a` application
create ui without any process of dom
  - `d` .a #app
  - `l(o father,o child)` load .a obj as innerHTML
  - `a(s text)` convert text to json  
  return .a
  - `s(s query)` selector
  return .a
