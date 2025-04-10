"use server"

import { error } from "console";

type ActionStateType = {
    errors: string[];
    success: string;
}


export default async function createExpense(budgetId: number, prevState: ActionStateType, formData: FormData) {
    console.log('desde createExpense');
    console.log(budgetId);

    
    return {
        errors: [],
        success: ''
    }
    
}