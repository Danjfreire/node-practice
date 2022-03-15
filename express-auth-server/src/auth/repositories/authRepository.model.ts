import { UserAuthentication } from "../models/user.model";

export default interface AuthRepository {
    signUp(username: string, password: string) : boolean;
    findUser(username: string) : UserAuthentication | null;
}