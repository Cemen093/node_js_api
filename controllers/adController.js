const Ad = require("../models/ad");

exports.getAll = function (request, response) {
    Ad.find({}, function (err, ad) {
        if (err)
        {
            console.log(err);
            return response.sendStatus(400);
        }

        response.send(ad);
    });
}

exports.get = function (request, response) {
    const id = request.query.id;
    Ad.findOne({_id: ObjectID(id)}, function (err, ad) {
        if (err)
        {
            console.log(err);
            return response.sendStatus(400);
        }

        response.send(ad);
    });
}

exports.post = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const url = request.body.url;
    const title = request.body.title;
    const description = request.body.description;
    const price = request.body.price;
    const date = request.body.date;
    const regionId = request.body.regionId;
    const headingId = request.body.headingId;
    const vip = request.body.vip;

    const ad = new Ad({
        url: url,
        title: title,
        description: description,
        price: price,
        date: date,
        regionId: regionId,
        headingId: headingId,
        vip: vip,
    });
    ad.save(function(err){
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
    const url = request.body.url;
    const title = request.body.title;
    const description = request.body.description;
    const price = request.body.price;
    const date = request.body.date;
    const regionId = request.body.regionId;
    const headingId = request.body.headingId;
    const vip = request.body.vip;

    Ad.updateOne(
        {_id: ObjectID(id)},
        {$set: {
                url: url,
                title: title,
                description: description,
                price: price,
                date: date,
                regionId: regionId,
                headingId: headingId,
                vip: vip,
            }},
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

    Ad.deleteOne(
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
    Ad.insertMany([
            {
                url: "https://ireland.apollo.olxcdn.com/v1/files/mibnl7tl0cpe3-UA/image;s=644x461",
                title: "Армированная пленка для прудов и озер",
                description: "none",
                price: 125,
                date: new Date(2022, 6, 30),
                regionId: 1,
                headingId: 1,
                vip: true,
            },
        {
            url: "https://ireland.apollo.olxcdn.com/v1/files/og5g0rk7er182-UA/image;s=644x461",
            title: "Комиксы ,манга,Робин Хобб",
            description: "none",
            price: 300,
            date: new Date(2022, 6, 30),
            regionId: 1,
            headingId: 1,
            vip: true,
        },
        {
            url: "https://ireland.apollo.olxcdn.com/v1/files/4ktecc3ba6im1-UA/image;s=644x461",
            title: "Ручка переноса огня АК АК74 тактическая ручка переноса",
            description: "none",
            price: 400,
            date: new Date(2022, 6, 30),
            regionId: 1,
            headingId: 1,
            vip: true,
        },
        {
            url: "https://ireland.apollo.olxcdn.com/v1/files/bhj34ga0oye2-UA/image;s=644x461",
            title: "Квартира 4 ком. 522-мкрн.5 мин. м.Студенческая,квадратный холл",
            description: "none",
            price: 61500,
            date: new Date(2022, 6, 30),
            regionId: 1,
            headingId: 1,
            vip: true,
        },
        {
            url: "https://ireland.apollo.olxcdn.com/v1/files/jxx9zqd6k6272-UA/image;s=644x461",
            title: "Дом с гаражом Фарбоване",
            description: "none",
            price: 500000,
            date: new Date(2022, 6, 30),
            regionId: 1,
            headingId: 1,
            vip: true,
        },
        {
            url: "https://ireland.apollo.olxcdn.com/v1/files/er0tzh9be98x1-UA/image;s=644x461",
            title: "клетки для бройлеров и кур-несушек",
            description: "none",
            price: 1500,
            date: new Date(2022, 6, 29),
            regionId: 1,
            headingId: 1,
            vip: true,
        },
        {
            url: "https://ireland.apollo.olxcdn.com/v1/files/kz51zqy0q0242-UA/image;s=644x461",
            title: "Покраска автомобилей",
            description: "none",
            price: 0,
            date: new Date(2022, 6, 30),
            regionId: 1,
            headingId: 1,
            vip: true,
        },
        {
            url: "https://ireland.apollo.olxcdn.com/v1/files/wi9cf8blgad11-UA/image;s=644x461",
            title: "Стеллаж. Loft. Лофт. Офисная мебель.",
            description: "none",
            price: 999,
            date: new Date(2022, 6, 27),
            regionId: 1,
            headingId: 1,
            vip: true,
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