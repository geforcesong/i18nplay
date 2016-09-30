var express = require('express');
var i18next = require('i18next');
var i18nextMiddleware = require('i18next-express-middleware');
var i18nextBackend = require('i18next-node-fs-backend');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');

i18next.use(i18nextBackend).init({
    preload: ['en', 'es', 'cn'],
    fallbackLng: 'en', // default language
    debug: false,
    backend: {
        loadPath: path.join(__dirname, '/locales/{{lng}}/translation.json'),
        getAsync: false
    }
});
app.use(i18nextMiddleware.handle(i18next));
app.use(express.static('public'));

require('./routes.js')(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});