const {City, connection} = require("./db");

connection.sync().then(() => {
    initialize().then(() =>{
        console.log("Db initialized");
        process.exit();
    })
})


function initialize () {
    const cities = [
        {
            id: 1,
            naziv: 'Kakanj',
            brojStanovnika: 70000
        },
        {
            id: 2,
            naziv: 'Sarajevo',
            brojStanovnika: 500000
        },
        {
            id: 3,
            naziv: 'Tuzla',
            brojStanovnika: 250000
        }
    ];
    return new Promise ((resolve,reject) => {
        City.bulkCreate(cities).catch((reason) => reject(reason));
    });
}