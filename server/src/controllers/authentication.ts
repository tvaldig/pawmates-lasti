import express, {Request, Response} from 'express';
import { createUser, getUserByEmail } from '../db/users';
import { authentication, random } from '../helpers/index';

export const register = async (req: Request, res: Response) : Promise<any> => {
    try{
        const {username, email, password} = req.body;

        if(!email || !password || !username){
            return res.sendStatus(400);
            
        }
        const existingUser = await getUserByEmail(email);
        if(existingUser){
            return res.sendStatus(400);
        }
        const salt = random();
        const user = await createUser({
            username,
            email,
            authentication: {
                salt,
                password: authentication(salt, password),
            },
           
        });
        return res.status(200).json(user).end();
    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
};

export const login = async (req: Request, res: Response) : Promise<any> => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            console.log("ada salah 1");
            return res.sendStatus(400);
            
        }
        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');

        if(!user){
            console.log("ada salah 2");
            return res.sendStatus(400);
        }

        const expectHash = authentication(user.authentication.salt, password);

        if(user.authentication.password != expectHash){
            console.log("ada salah 3");
            return res.sendStatus(403);
        }
        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());
        const sessionToken = user.authentication.sessionToken;
        console.log(sessionToken);
        await user.save();
        // res.cookie('AUTH', user.authentication.sessionToken, {domain: 'localhost', path: '/', httpOnly:true, secure: true, sameSite:"none"});
        return res.status(200).json({user, sessionToken: sessionToken, userId:user._id}).end();
    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}