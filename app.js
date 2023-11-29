const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const patch = require('path');

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    layoutsDir: patch.join(__dirname, 'views/layouts'),
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,

        allowProtoMethodsByDefault: true,
    }
}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname));

app.get('/', function(req, res) {

    res.render('index');

});

app.get('/about', function(req, res) {

    res.render('merda');

});

app.get('/login', function(req, res) {

    res.send('login');

});

app.listen('4049', function(req, res) {

    console.log("servidor rodando em localhost:4049");

});