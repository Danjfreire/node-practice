import { NextFunction, Request, Response } from "express";
import { createSecretKey} from "crypto"
import * as jose from "jose"

export async function checkAuth(req : Request, res: Response, next: NextFunction) {
    // if Bearer token is available check it, otherwise return error
    const token = req.headers.authorization?.split('Bearer')[1].trimStart();

    if(!token) {
        res.status(403)
        res.json({message : "Forbidden, token not found"});
    }

    if(!process.env.JWT_SECRET) {
        console.log('No jwt key')
        return null;
    }

    // if token is present, check its signature
    try {
        const secretKey = createSecretKey(process.env.JWT_SECRET, 'utf-8');
        const { payload, protectedHeader } = await jose.jwtVerify(token as string, secretKey, {
            issuer: 'https://danjfreire.com',
            audience: 'danjfreire',
        })
        
        console.log(payload);
        console.log(protectedHeader);
        
        next()
    }catch(err) {
        res.status(403)
        res.json({error : {
            message : "Invalid token"
        }});
    }
} 