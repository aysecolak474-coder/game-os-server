const http = require("http");

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });

        res.end("GAMEOS SERVER ONLINE");
        return;
    }

    if (req.url.startsWith("/game/")) {

        const game = req.url.split("/game/")[1];

        console.log("OYUN ISTENDI: " + game);

        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });

        res.end(JSON.stringify({
            status: "ok",
            game: game,
            message: game + " baslatma istegi alindi"
        }));

        return;
    }

    res.writeHead(404);
    res.end("404");
});

server.listen(PORT, "0.0.0.0", function () {
    console.log("GAMEOS SERVER ONLINE - Port: " + PORT);
});