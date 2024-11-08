import * as db from './mockDB.js';
import path from 'path';
import express from 'express';
import indexRouter from './routes/indexRouter.js';


const app = express();
const __dirname = path.resolve();
const assetsPath = path.join(__dirname, "public");


app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use("/(index)?", indexRouter);

app.get("/new", (req, res) => {
    res.render("form");
});

app.post("/new", (req, res) => {
    db.newMessage(req.body.message, req.body.username);
    res.render("form");
  });


app.get("*", (req, res) => {
    res.send("404 Not Found");
  });

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini message board app - listening on port ${PORT}!`);
});
