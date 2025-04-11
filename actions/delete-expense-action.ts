"use server"

import { Budget, Expense } from "@/src/schemas"

type BudgetAndExpenseIdType = {
    budgetId: Budget['id']
    expenseId: Expense['id']
}

type ActionStateType = {
    errors: string[]
    success: string
}

export default async function deleteExpense(
    {budgetId, expenseId}: BudgetAndExpenseIdType, 
    prevState: ActionStateType) {

    console.log(budgetId);
    console.log(expenseId);
   

    return {
        errors: [],
        success: ''
    }
    
}