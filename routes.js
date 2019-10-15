module.exports = (app) => {

    const cars = require('./controller.js');

    app.post('/cars', cars.create);

    app.get('/cars', cars.findAll);
}

