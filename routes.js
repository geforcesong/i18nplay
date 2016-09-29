var i18next = require('i18next');

module.exports = function (app) {
    app.get('/', function (req, res) {
        if (req.query.lan == 'en')
            req.i18n.changeLanguage('en');
        else if (req.query.lan == 'cn')
            req.i18n.changeLanguage('zh');
        else
            req.i18n.changeLanguage('es');
        console.log(req.t('HI'));
        res.render("home.ejs", { "name": "George" });
    });
}