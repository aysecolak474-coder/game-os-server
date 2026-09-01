const http = require("http");

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {

    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // OPTIONS isteði
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    // Ana sayfa
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });

        res.end("GAMEOS SERVER ONLINE");
        return;
    }

    // Oyun isteði
    if (req.url.startsWith("/game/")) {

        const game = decodeURIComponent(
            req.url.substring("/game/".length)
        );

        console.log("OYUN ISTENDI: " + game);

        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
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