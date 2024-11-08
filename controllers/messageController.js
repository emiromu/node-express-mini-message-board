import * as db from '../mockDB.js';
import asyncHandler from 'express-async-handler';
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

const getMessages = asyncHandler(async (req, res) => {
  const messages = await db.getMessages();

  if (!messages) {
    throw new CustomNotFoundError("No messages found - check the mock DB");
  }

  res.render("index", { welcome: "Welcome to the messages page", messages: messages });
});

export {getMessages};
