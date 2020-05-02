const express = require('express');
const app = express();
const http = require('http');

const routeIndex = require('./src/routes/index');
const appMiddleware = require('./src/middlewares/app-middleware');

app.use(appMiddleware);
app.use(routeIndex);

const server = http.createServer(app);

server.listen(8888, "0.0.0.0", () => {
    if(server.listening) {
        console.log("Listening");
    }
});
