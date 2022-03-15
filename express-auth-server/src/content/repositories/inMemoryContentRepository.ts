import { UserContent } from "../models/userContent.model";
import ContentRepository from "./contentRepository.model";

export default class InMemoryContentRepository implements ContentRepository {

    getContent(userId: string): UserContent {
        return {
            type : 'Amazing content',
            createdAt : new Date().toISOString(),
        }
    }
    
}