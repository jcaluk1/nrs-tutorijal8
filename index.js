const express = require('express');
const app = express();

const PORT = 8088;
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    res.render('cities', {results: cities});
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));