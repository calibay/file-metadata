var express = require("express");
var app = express();
var multer = require("multer");
var upload = multer({dest: './uploads/'});
var bodyparser = require("body-parser");
var fileSize = 0;
app.use(express.static('public'));

app.post('/', upload.single('fileName'), (req, res) => {
    fileSize = req.file.size;
    res.writeHead(301, {Location: '/get-file-size'});
    res.end();
});

app.get('/get-file-size', (req, res) => {
    res.send({size: fileSize});
});

app.listen(process.env.PORT);