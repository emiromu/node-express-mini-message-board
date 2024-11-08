import fs from 'fs';
import path from 'path';
import express from 'express';

// import authorRouter from './routes/authorRouter.js';
// import bookRouter from './routes/bookRouter.js';

const app = express();
const __dirname = path.resolve();
const assetsPath = path.join(__dirname, "public");

const messages = [
    {
      text: "Yaho~",
      user: "Coco",
      added: new Date()
    },
    {
      text: "I wrote this1",
      user: "Titi",
      added: new Date()
    }
  ];


app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use("/authors", authorRouter);
// app.use("/books", bookRouter);

app.get("/(index)?", (req, res) => {
    res.render("index", { welcome: "Welcome to the messages page", messages: messages });
});

app.get("/new", (req, res) => {
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
