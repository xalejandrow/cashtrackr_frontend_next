"use server"

import { Budget, Expense } from "@/src/schemas";

type BudgetAndExpenseIdType = {
    budgetId: Budget['id'];
    expenseId: Expense['id'];
}

type ActionStateType = {
    errors: string[];
    success: string;
}

export default async function editExpense(
        {budgetId, expenseId}: BudgetAndExpenseIdType, 
        prevState: ActionStateType, 
        formData: FormData) 
    {

        console.log(budgetId);
        console.log(expenseId);
            
    return {
        errors: [],
        success: ''
    }
}