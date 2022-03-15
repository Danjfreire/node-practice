import { Request, Response, Router } from "express";
import ContentRepository from "../repositories/contentRepository.model";
import ContentService from "../services/contentService";

export default class UserContentController {

    _contentService : ContentService;

    constructor(
        contentRepo : ContentRepository
    ) {
        this._contentService = new ContentService(contentRepo);
    }

    getRouter() {
        const router = Router();

        router.get("/content/:userId", this.userContentHandler.bind(this))
        return router;
    }

    userContentHandler(req: Request, res: Response) {
        // handle auth
        const userId = req.params.userId;
        
        const content =  this._contentService.getUserContent(userId);
        
        res.json(content);
    }

}