var express = require('express');
var i18next = require('i18next');
var middleware = require('i18next-express-middleware');
var Backend = require('i18next-node-fs-backend');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');

i18next.use(Backend).use(middleware.LanguageDetector).init({
    preload: ['en', 'es', 'zh'],
    fallbackLng: 'en', // default language
    debug: false,
    backend: {
        loadPath: path.join(__dirname, '/locales/{{lng}}/translation.json'),
        getAsync: false
    }
});
app.use(middleware.handle(i18next));

require('./routes.js')(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});