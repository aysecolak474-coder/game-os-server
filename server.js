const http = require("http");

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("GAMEOS SERVER ONLINE");
});

server.listen(PORT, "0.0.0.0", function () {
    console.log("GAMEOS SERVER ONLINE - Port: " + PORT);
});