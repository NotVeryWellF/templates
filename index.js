const hbs = require("express-hbs");

module.exports = function applyHbs(app) {
	app.engine("hbs", hbs.express4({}));
	app.set("view engine", "hbs");
	app.set("views", __dirname + "/views");

    hbs.registerHelper('toJSON', (obj) => {
        if (typeof obj === 'object'){
            return JSON.stringify(obj);
        }
        return obj;
    });
};