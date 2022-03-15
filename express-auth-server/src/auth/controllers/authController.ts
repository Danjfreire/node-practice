import { Request, Response, Router } from "express";
import AuthRepository from "../repositories/authRepository.model";
import AuthService from "../services/service";

export default class AuthController {

    _authService : AuthService;

    constructor(
        authRepo : AuthRepository
    ) {
        this._authService = new AuthService(authRepo);
    }
    
    getRouter() : Router{
        const router = Router();

        router.post("/signUp", this.signUpHandler.bind(this));
        router.post("/signIn", this.signInHandler.bind(this));
        return router;
    }

    async signInHandler(req: Request, res: Response) {
        const {username, password} = req.body;
        const result = await this._authService.signIn(username, password);

        if(!result) {
            res.status(400).json('Invalid credentials')
        }else {
            res.status(200)
            res.json({token : result})
        }
    }

    signUpHandler(req: Request, res : Response) {
        const {username, password} = req.body;

        const result = this._authService.signUp(username, password);

        if(!result) {
            res.status(400).json('Failed to create user')
        }else {
            res.status(201)
            res.send()
        }

    }

}