// https://github.com/danfinlay/jazzicon#readme
// Live Example http://requirebin.com/?gist=64341df46d79cc72567417c022e9d0ee
var jazzicon = require('jazzicon')
 
var body = document.querySelector('body')
for(var i = 0; i < 60; i++) {
  var el = jazzicon(100, Math.round(Math.random() * 10000000))
  body.appendChild(el)
}