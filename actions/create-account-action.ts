"use server"

import { ErrorResponseSchema, RegisterSchema, SuccessSchema } from "@/src/schemas";
import { error } from "console";

type ActionStateType = {
    errors: string[],
    success: string
} 

export async function register(prevState : ActionStateType, formData: FormData) {
    console.log(formData);

    const registerData = {
        email: formData.get("email"),
        name: formData.get("name"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation")
    }

    // console.log(registerData);

    // Validar
    const register = RegisterSchema.safeParse(registerData);
    // console.log(register.error);

    
    // console.log(errors);
    if(!register.success) {
        const errors = register.error.errors.map(error => error.message);
        return {
            errors,
            success: prevState.success
        }
    }
    
    // console.log(register);
    
    // registrar el usuario
    const url = `${process.env.API_URL}/auth/create-account`;
    // console.log(url);
    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: register.data.name,
            password: register.data.password,
            email: register.data.email,
        })
    });
    
    const json = await req.json();

    if(req.status === 409) {
        const {error} = ErrorResponseSchema.parse(json);

        return {
            errors: [error],
            success: ''
        }
    }
    
    
    
    // console.log(json);
    const success = SuccessSchema.parse(json);
    console.log(success);
    
    return {
        errors: [],
        success
    }

}