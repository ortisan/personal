"use strict";
const restify = require('restify');
const config_1 = require('./config');
const server = restify.createServer({
    // certificate: fs.readFileSync('path/to/server/certificate'),
    // key: fs.readFileSync('path/to/server/key'),
    name: 'PersonalApp',
    log: config_1.logger
});
function send(req, res, next) {
    res.send('hello ' + req.params.name);
    return next();
}
server.post('/hello', function create(req, res, next) {
    res.send(201, Math.random().toString(36).substr(3, 8));
    return next();
});
server.put('/hello', send);
server.get('/hello/:name', send);
server.head('/hello/:name', send);
server.del('hello/:name', function rm(req, res, next) {
    res.send(204);
    return next();
});
server.listen(8080);
//# sourceMappingURL=server.js.map