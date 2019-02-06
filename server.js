const express = require('express');
const path = require('path');
const port = 3000;

const app = express();


function listenCB () {
    console.log("We are running on " + port);
}

function homeSendFile (req, res) {
    res.status(200) .sendFile(path.join(__dirname, 'index.html'));
}




app.get('/', homeSendFile);
app.listen(port, listenCB);