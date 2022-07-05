const Heading = require("../models/heading");

exports.getAll = function (request, response) {
    Heading.find({}, function (err, heading) {
        if (err)
        {
            console.log(err);
            return response.sendStatus(400);
        }

        response.send(heading);
    });
}

exports.get = function (request, response) {
    const id = request.query.id;
    Heading.findOne({_id: ObjectID(id)}, function (err, heading) {
        if (err)
        {
            console.log(err);
            return response.sendStatus(400);
        }

        response.send(heading);
    });
}

exports.post = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const url = request.body.url;
    const title = request.body.title;

    const heading = new Heading({url: url, title: title});
    heading.save(function(err){
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
    const url = request.body.url;
    const title = request.body.title;

    Heading.updateOne(
        {_id: ObjectID(id)},
        {$set: {url: url, title: title}},
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

    Heading.deleteOne(
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
    Heading.insertMany([
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/5d9ab47d205c9b353e01ab2db716eaf1.png",
            title: "Детский мир"},
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/f9dd340a12a3db178a80ff26169d1010.png",
            title: "Недвижимость"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/b7209239b859b7480bcb3e21c817497a.png",
            title: "Авто"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/e22d28731ba369a96caabec5002aa763.png",
            title: "Запчасти"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/0ecb22062276d5d45b662ece07d29c64.png",
            title: "Работа"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/b1e215e1cfe61392d827aad766b44f5e.png",
            title: "Животные"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/10beec301ca5cf3ae30db61702e7e4ca.png",
            title: "Дом и сад"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/eb5e8444c9152266ab130a84a09e3c07.png",
            title: "Электроника"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/2431d6fbbdafd742079265fbdd46c901.png",
            title: "Бизнес"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/c2c2d81278bf0aae91e311c0863e188b.png",
            title: "Мода"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/19d0f0aec32dd8ae6143d99db680b0ed.png",
            title: "Хобби"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/f910473974d0298aecff3f806a2306dd.png",
            title: "Халява"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/10909ab2cdca7b8ce281e3e05771e59f.png",
            title: "Обмен"
        },
        {
            url: "https://s1.hostingkartinok.com/uploads/thumbs/2022/06/c25b726e71047b0863a5f2bbb06c752d.png",
            title: "Работа"
        }
        ], function (err, result) {
            if (err){
                console.log(err);
                return response.sendStatus(500);
            }
            return response.sendStatus(200);
        }
    )
}