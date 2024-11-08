import * as db from '../mockDB.js';
import asyncHandler from 'express-async-handler';


const getMessages = asyncHandler(async (req, res) => {
  const messages = await db.getMessages();



  res.render("index", { welcome: "Welcome to the messages page", messages: messages });
});


const getMessage = asyncHandler(async (req, res) => {
  console.log('controller.getMessage()')
  const message = await db.getMessage(req.query.user, req.query.date);


  res.render("message", {message: message });
});

export {getMessages, getMessage};
