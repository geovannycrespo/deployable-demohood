const express = require('express');
const app = express();
var path = require('path');

// Tell Our Express  Server what file Directory to use
app.use(express.static(__dirname + '/dist/demohood'))

// Tell our express server what port to listen on
app.listen(process.env.PORT || 8080);

// Start Angular Application via index file
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/dist/demohood/index.html'))
})
console.log('Console Listening on port 8080');