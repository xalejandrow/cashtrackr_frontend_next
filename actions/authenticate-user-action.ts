"use server"

import { cookies } from "next/headers";
import { ErrorResponseSchema, LoginSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[]
}

export async function authenticate(prevState : ActionStateType, formData: FormData) {
    
    const loginCredentials = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    // console.log(loginCredentials);
    const auth = LoginSchema.safeParse(loginCredentials);
    if(!auth.success) {
        return {
            errors: auth.error.errors.map(issue => issue.message)
        }
    }

    const url = `${process.env.API_URL}/auth/login`;
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: auth.data.password,
            email: auth.data.email
        })
    });

    const json = await req.json();

    // Setear Cookies
    (await cookies()).set({
        name:'CASHTRACKR_TOKEN',
        value: json,
        httpOnly: true,
        path: '/'
    })

    if(!req.ok) {
        const  { error } = ErrorResponseSchema.parse(json);
        return {
            errors: [error]
        }
    }
        

    return {
        errors: []
    }
   
}