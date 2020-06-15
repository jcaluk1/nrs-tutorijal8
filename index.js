const express = require('express');
const app = express();
const {City, connection} = require("./db");

const PORT = 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    City.findAll().then((citiesRaw) => {
        const cities = citiesRaw.map (cityRaw => cityRaw.dataValues)
        res.render('cities', {results: cities})
    })
  
})

app.get("/gradovi", (req, res) => {
    City.findAll().then((cities) => {
        res.send(cities);
    })
});

app.get("/gradovi/:id", (req, res) => {
    City.findOne({where:{id:req.params.id}}).then((city) => {
        res.send(city);
    })
});

app.delete("/gradovi/:id", (req, res) => {
    City.destroy(({where:{id:req.params.id}})).then(() => {
        res.send({message: `City with Id ${req.params.id} deleted`});
    })
})

app.post("/gradovi", (req, res) => {
    const grad = req.body.grad;
    console.log('Graaaad',grad);
    if (grad != null && grad.naziv != null && grad.brojStanovnika != null) {
        City.create(grad).then((city) => res.send(city));
    } else {
        res.status(400).send({error: 'Bad input data'});
    }
})

app.put("/gradovi", async (req,res) => {
    const grad = req.body.grad;
    if (grad != null && grad.id != null && grad.brojStanovnika != null) {
        await City.update({brojStanovnika: grad.brojStanovnika},{where:{id: grad.id}});
        city = await City.findOne({where:{id:grad.id}});
        res.send(city);
        
    } else {
        res.status(400).send({error: 'Bad input data'});
    }
});


module.exports = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));