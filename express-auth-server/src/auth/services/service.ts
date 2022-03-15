import AuthRepository from "../repositories/authRepository.model";
import * as bcrypt from "bcryptjs";
import * as jose from "jose";
import {createSecretKey} from "crypto"

export default class AuthService {
  constructor(readonly authRepository: AuthRepository) {}

  async signIn(username: string, password: string): Promise<string | null> {
    if (!username || !password) {
      return null;
    }

    const user = this.authRepository.findUser(username);

    const hashPassword = bcrypt.hashSync(password, 10);
    if (!user || !bcrypt.compareSync(user.password, hashPassword)) {
      return null;
    }

    if(!process.env.JWT_SECRET) {
        console.log('No jwt key')
        return null;
    }

    const secretKey = createSecretKey(process.env.JWT_SECRET, 'utf-8');

    // build token
    const jwt = await new jose.SignJWT({ "urn:example:claim": true })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setIssuer("urn:example:issuer")
      .setAudience("urn:example:audience")
      .setExpirationTime("1h")
      .sign(secretKey);

    return jwt;
  }

  signUp(username: string, password: string): boolean {
    // hash the password

    if (!username || !password) {
      return false;
    }

    return this.authRepository.signUp(username, password);
  }
}
