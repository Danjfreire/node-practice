import { UserAuthentication } from "../models/user.model";
import AuthRepository from "./authRepository.model";

export default class InMemoryAuthRepository implements AuthRepository {

    db : UserAuthentication[];

    constructor(){
        this.db = [];
    }
    
    signUp(username: string, password: string): boolean {
        try {
            this.db.push({username, password})
            return true;    
        }catch(err) {
            return false;
        }
    }

    findUser(username: string): UserAuthentication | null {
        const user = this.db.find(entry => entry.username === username);

        if(!user) {
            // throw some error
            return null;
        }
       // check if password matches

        return user;
    }
}