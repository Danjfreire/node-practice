import express from 'express'
import * as dotenv from "dotenv"
import AuthController from './auth/controllers/authController';
import InMemoryAuthRepository from './auth/repositories/inMemoryAuthRepository';


const authController = new AuthController(new InMemoryAuthRepository())

dotenv.config();
const app = express();
app.use(express.json())
app.use('/auth', authController.getRouter())

export default app;
