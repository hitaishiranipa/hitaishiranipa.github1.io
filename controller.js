const Car = require('./model.js');


exports.create = (req, res) => {


    if(!req.body) {

        return res.status(400).send({

            message: "Car content can not be empty"

        });

    }


    const car = new Car({

        name: req.body.name || "No car name", 

        description: req.body.description,

        price: req.body.price,

    });




    car.save()

    .then(data => {

        res.send(data);

    }).catch(err => {

        res.status(500).send({

            message: err.message || "Something wrong while creating."

        });

    });

};


exports.findAll = (req, res) => {

    Car.find()

    .then(cars => {

        res.send(cars);

    }).catch(err => {

        res.status(500).send({

            message: err.message || "Something wrong..."

        });

    });

};

