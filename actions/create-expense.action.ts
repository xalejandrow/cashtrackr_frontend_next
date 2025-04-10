"use server"

import { DraftExpenseSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[];
    success: string;
}


export default async function createExpense(budgetId: number, prevState: ActionStateType, formData: FormData) {
    // console.log('desde createExpense');
    // console.log(budgetId);

    const expenseData = {
        name: formData.get('name'),
        amount: formData.get('amount'),
    }

    const expense = DraftExpenseSchema.safeParse(expenseData);
    if(!expense.success) {
        return {
            errors: expense.error.issues.map(issue => issue.message),
            success: ''
        }
    }
    
    return {
        errors: [],
        success: ''
    }
    
}