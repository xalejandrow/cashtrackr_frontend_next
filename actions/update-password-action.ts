"use server"

import { UpdatePasswordSchema } from "@/src/schemas"

type ActionStateType = {
    errors: [],
    success: ''
}

export async function updatePassword(prevState: ActionStateType, formData: FormData) {
    // console.log('desde updatePassword');
    // console.log(formData);

    const userPassword = UpdatePasswordSchema.safeParse({
        current_password: formData.get('current_password'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    })

    if (!userPassword.success) {
        return {
            errors: userPassword.error.issues.map(issue => issue.message),
            success: ''
        }
    }
    
    return {
        errors: [],
        success: ''
    }
}