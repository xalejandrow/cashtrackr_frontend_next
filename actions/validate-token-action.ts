"use server"

import { error } from "console";

type ActionStateType = {
    errors: string[],
    success: string
}
export async function validateToken(token: string, prevState: ActionStateType ){
    console.log(token);
    console.log('desde validateToken');
    

    return {
        errors: [],
        success: ''
    }
    
}