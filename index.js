var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    if (req.path == "env") {
        res.write(JSON.stringify(process.env));
    } else if (req.path.startsWith("env/")) {
        res.write(process.env[req.path.slice(3));
    } else {
        res.write('Yo!');
    }
    res.end();
}).listen(process.env.PORT || 3000);
