"use server"

import { LoginSchema } from "@/src/schemas";

export async function authenticate(prevState : any, formData: FormData) {
    
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
   
}