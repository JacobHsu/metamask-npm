var pump = require('pump')
var fs = require('fs')
 
var source = fs.createReadStream('sample.txt')
var dest = fs.createWriteStream('output.txt')
 
pump(source, dest, function(err) {
  console.log('pipe finished', err)
})
 
setTimeout(function() {
  dest.destroy() // when dest is closed pump will destroy source
}, 1000)