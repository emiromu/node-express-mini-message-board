import express from 'express';
import {getMessage} from '../controllers/messageController.js';


const messageRouter = express.Router();
messageRouter.get("/(message)?",getMessage);

export default messageRouter;