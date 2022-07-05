const Region = require("../models/region");

exports.getAll = function (request, response) {
    Region.find({}, function (err, region) {
        if (err)
        {
            console.log(err);
            return response.sendStatus(400);
        }

        response.send(region);
    });
}

exports.get = function (request, response) {
    const id = request.query.id;
    Region.findOne({_id: ObjectID(id)}, function (err, region) {
        if (err)
        {
            console.log(err);
            return response.sendStatus(400);
        }

        response.send(region);
    });
}

exports.post = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const title = request.body.title;

    const region = new Region({title: title});
    region.save(function(err){
        if(err)
        {
            console.log(err);
            return response.sendStatus(400);
        }
        response.sendStatus(200);
    });
}

exports.put = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const id = request.body.id;
    const title = request.body.title;

    Region.updateOne(
        {_id: ObjectID(id)},
        {$set: {title: title}},
        function (err, result) {
            if (err){
                console.log(err);
                return response.sendStatus(500);
            }
            return response.sendStatus(200);
        }
    );

}

exports.delete = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const id = request.body.id;

    Region.deleteOne(
        {_id: ObjectID(id)},
        function (err, result) {
            if (err){
                console.log(err);
                return response.sendStatus(500);
            }
            return response.sendStatus(200);
        }
    )
}

exports.init = function (request, response) {
    Region.insertMany([
        {
            title: "Одесская"
        },
        {
            title: "Днепропетровская"
        },
        {
            title: "Черниговская"
        },
        {
            title: "Харьковская "
        },
        {
            title: "Житомирская "
        },
        {
            title: "Полтавская "
        },
        {
            title: "Херсонская "
        },
        {
            title: "Киевская "
        },
        {
            title: "Запорожская "
        },
        {
            title: "Луганская "
        },
        {
            title: "Донецкая "
        },
        {
            title: "Винницкая "
        },
        {
            title: "Кировоградская "
        },
        {
            title: "Николаевская "
        },
        {
            title: "Сумская "
        },
        {
            title: "Львовская "
        },
        {
            title: "Черкасская "
        },
        {
            title: "Хмельницкая "
        },
        {
            title: "Волынская "
        },
        {
            title: "Ровенская "
        },
        {
            title: "Ивано-Франковская"
        },
        {
            title: "Тернопольская "
        },
        {
            title: "Закарпатская "
        },
        {
            title: "Черновицкая "
        },
        ], function (err, result) {
            if (err){
                console.log(err);
                return response.sendStatus(500);
            }
            return response.sendStatus(200);
        }
    )
}