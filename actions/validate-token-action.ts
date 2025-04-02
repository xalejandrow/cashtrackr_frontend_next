"use server"

import { ErrorResponseSchema, TokenSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[],
    success: string
}
export async function validateToken(token: string, prevState: ActionStateType ){
    
    const resetPasswordToken = TokenSchema.safeParse(token);
    if(!resetPasswordToken.success){
        return {
            errors: resetPasswordToken.error.issues.map(issue => issue.message),
            success: ''
            // message: ''
        }
    }

    const url = `${process.env.API_URL}/auth/validate-token`;
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            token: resetPasswordToken.data
        })
    });

    const json = await req.json();
    
    if(!req.ok){
        const {error} = ErrorResponseSchema.parse(json);
        return {
            errors: [error],
            success: ''
        }
    }

    return {
        errors: [],
        success: ''
    }
    
}