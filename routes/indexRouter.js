import express from 'express';
import {getMessages} from '../controllers/messageController.js';


const indexRouter = express.Router();
indexRouter.get("/(index)?",getMessages);

export default indexRouter;