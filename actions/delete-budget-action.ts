"use server"

import { Budget } from "@/src/schemas";

type ActionStateType = {
    errors: string[];
}
export async function deleteBudget(budgetId: Budget['id'],prevStaet: ActionStateType, formData: FormData) {
    // console.log('desde deleteBudget');
    console.log(formData.get('password'));
    console.log('budgetId', budgetId);
    
    return {
        errors: [],
    }
}