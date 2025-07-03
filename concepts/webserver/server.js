const http = require("http");
const fs = require("fs");
const path = require("path");
const { log, error } = require("console");

const port = "6969";

const svr = http.createServer((req, res) => {
    let fl;
    if (req.url === "/") {
        fl = "index.html";
    } else if (req.url === "/about") {
        fl = "about.html";
    } else {
        fl = req.url;
    }
    const filePath = path.join(__dirname, fl);

    const extName = String(path.extname(filePath)).toLowerCase(); // gives extension of asset requested
    const mimeTypes = { // file types to support, MIMETypes
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".txt": "text/text",
        ".png": "text/png"
    };
    const contentType = mimeTypes[extName] || "application/octet-stream"; // else, binary-like

    fs.readFile(filePath, (err, content) => {
        if (err && err.code === "ENOENT") {
            res.writeHead(404, { "content-type": "text.html" });
            res.end("404: Not found lil bro...")
        } else {
            res.writeHead(200, { "content-type": contentType });
            res.end(content, "utf-8");
        }
    });
});

svr.listen(port, () => {
    console.log(`Server up and listening on port ${port}`);
});
