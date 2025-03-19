"use server"

import { RegisterSchema } from "@/src/schemas";

export async function register(formData: FormData) {
    console.log(formData);

    const registerData = {
        email: formData.get("email"),
        name: formData.get("name"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation")
    }

    console.log(registerData);

    // Validar
    const register = RegisterSchema.safeParse(registerData);
    // console.log(register.error);

    const errors = register.error?.errors.map(error => error.message);
    console.log(errors);
    
    console.log(register);
    
    // registrar el usuario
    
    
    
}