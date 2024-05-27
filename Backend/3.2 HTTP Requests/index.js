import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>")
});

app.get("/contact", (req, res) => {
    res.send("<h2>contact usdfdfsd..</h2>")
});

app.get("/about", (req, res) => {
    res.send("<h3>about me..dfksdlfk</h3>")
});

app.listen(port, () => {
    console.log(`Server starts on port ${port}.`);
});
