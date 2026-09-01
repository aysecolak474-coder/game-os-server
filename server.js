```js
const http = require("http");

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("GAMEOS SERVER ONLINE");
});

server.listen(PORT, () => {
    console.log(`GameOS server listening on port ${PORT}`);
});
```
