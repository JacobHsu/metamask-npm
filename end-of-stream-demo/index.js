var eos = require('end-of-stream');
const PortStream = require('extension-port-stream');

//extension.runtime.onConnect.addListener(connectRemote)
const readableStream = new PortStream(remotePort)
 
eos(readableStream, function(err) {
  // this will be set to the stream instance
    if (err) return console.log('stream had an error or closed early');
    console.log('stream has ended', this === readableStream);
});
 
eos(writableStream, function(err) {
    if (err) return console.log('stream had an error or closed early');
    console.log('stream has finished', this === writableStream);
});
 
eos(duplexStream, function(err) {
    if (err) return console.log('stream had an error or closed early');
    console.log('stream has ended and finished', this === duplexStream);
});
 
eos(duplexStream, {readable:false}, function(err) {
    if (err) return console.log('stream had an error or closed early');
    console.log('stream has finished but might still be readable');
});
 
eos(duplexStream, {writable:false}, function(err) {
    if (err) return console.log('stream had an error or closed early');
    console.log('stream has ended but might still be writable');
});
 
eos(readableStream, {error:false}, function(err) {
    // do not treat emit('error', err) as a end-of-stream
});