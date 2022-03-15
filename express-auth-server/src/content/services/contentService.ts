import ContentRepository from "../repositories/contentRepository.model";

export default class ContentService {
    constructor(readonly contentRepository : ContentRepository) {}

    getUserContent(userId : string) {
        return this.contentRepository.getContent(userId);
    }
}