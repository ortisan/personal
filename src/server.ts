import * as restify from 'restify';
import {logger} from './config'


const server = restify.createServer({
    // certificate: fs.readFileSync('path/to/server/certificate'),
    // key: fs.readFileSync('path/to/server/key'),
    name: 'PersonalApp',
    log: logger
});

server.use(restify.CORS());
/*
server.use(restify.CORS({
    origins: ['https://foo.com', 'http://bar.com', 'http://baz.com:8081'],   // defaults to ['*']
    credentials: true,                 // defaults to false
    headers: ['x-foo']                 // sets expose-headers
}));
*/


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


server.get('/users', function (req, res, next) {

    res.send([
        {id: 1, name: 'Mr. Nice', email: 'teste@teste.com'},
        {id: 1, name: 'Mr. Nice', email: 'teste@teste.com'},
        {id: 1, name: 'Mr. Nice', email: 'teste@teste.com'},
        {id: 1, name: 'Mr. Nice', email: 'teste@teste.com'}
    ]);

    next();

});

server.listen(8080);