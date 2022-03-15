import express from 'express'
import * as dotenv from "dotenv"
import AuthController from './auth/controllers/authController';
import InMemoryAuthRepository from './auth/repositories/inMemoryAuthRepository';
import UserContentController from './content/controllers/usercontentController';
import InMemoryContentRepository from './content/repositories/inMemoryContentRepository';
import { checkAuth } from './authentication';


const authController = new AuthController(new InMemoryAuthRepository());
const contentController = new UserContentController(new InMemoryContentRepository);

dotenv.config();
const app = express();
app.use(express.json())
app.use('/auth', authController.getRouter())
app.use('/user', checkAuth ,contentController.getRouter())

export default app;
