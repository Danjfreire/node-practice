import { UserContent } from "../models/userContent.model";

export default interface ContentRepository {
    getContent(userId : string) : UserContent;
}