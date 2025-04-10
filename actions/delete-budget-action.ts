"use server"

import getToken from "@/src/auth/token";
import { Budget, ErrorResponseSchema, PasswordValidationSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[];
}
export async function deleteBudget(budgetId: Budget['id'],prevStaet: ActionStateType, formData: FormData) {
    // console.log('desde deleteBudget');
    console.log(formData.get('password'));
    console.log('budgetId', budgetId);
    
    const currentPassword = PasswordValidationSchema.safeParse(formData.get('password'));
    if(!currentPassword.success) {
        return {
            errors: currentPassword.error.issues.map((issue) => issue.message)
        }
    }

    // Comporbar password
    const token = await getToken();
    const checkPasswordUrl = `${process.env.API_URL}/auth/check-password`;
    const checkPasswordReq = await fetch(checkPasswordUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: currentPassword.data
        })
    });

    const checkPasswordJson  = await checkPasswordReq.json();
    // console.log(checkPasswordJson);

    if(!checkPasswordReq.ok) {
        const {error} = ErrorResponseSchema.parse(checkPasswordJson);
        return {
            errors: [error]
        }
    }
    
    
    return {
        errors: [],
    }
}