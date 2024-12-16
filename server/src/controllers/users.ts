import express, {Request, Response} from "express";

import {deleteUserById, getUserById, getUserBySessionToken, getUsers, UserModel} from "../db/users";




export const getAllUsers = async (req: Request, res: Response) : Promise<any> => {
    try {
        const users = await getUsers();
        // console.log("TES");
        // console.log(req);
        return res.json(users);
    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteUser = async (req: Request, res: Response) : Promise<any> => {
    try {
        const {id} = req.params;
        const deletedUser =  await deleteUserById(id);
        return res.json(deletedUser);
    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateUser = async (req: Request, res: Response) : Promise<any> => {
    try {
        const {username} = req.body;
        const {id} = req.params;
        if(!username){
            return res.sendStatus(400);
        }
        const user = await getUserById(id);

        if(!user){
            return res.sendStatus(400);
        }
        user.username = username;
        await user.save();
        return res.json(user);
    } catch (error){
        console.log(error);
        
        return res.sendStatus(400);
    }
}

export const getProfile = async (req: Request, res: Response): Promise<any> => {
    try {

        const sessionToken = req.headers.authorization?.split(" ")[1];

        if (!sessionToken) {
            return res.sendStatus(401); 
        }

        // Fetch user using the session token
        const user = await getUserBySessionToken(sessionToken);

        if (!user) {
            return res.sendStatus(404); 
        }

        // Return user profile info
        return res.json({
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        console.error("Error fetching profile:", error);
        return res.sendStatus(400); // Bad request if there's an error
    }
};