import express from 'express';


const indexRouter = express.Router();

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

indexRouter.get("/(index)?", (req, res) => {
    res.render("index", { welcome: "Welcome to the messages page", messages: messages });
});

export default indexRouter;