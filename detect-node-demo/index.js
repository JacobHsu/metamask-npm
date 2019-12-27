// ui\app\components\ui\jazzicon\jazzicon.component.js
// import isNode from 'detect-node'
var isNode = require('detect-node');
 
if (isNode) {
  console.log("Running under Node.JS");
} else {
  alert("Hello from browser (or whatever not-a-node env)");
}