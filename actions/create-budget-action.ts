"use server"

import { DraftBudgetSchema, SuccessSchema } from "@/src/schemas";
import { cookies } from "next/headers";

type ActionStateType = {
    errors: string[];
    success: string;
}

export async function createBudget(prevState: ActionStateType, formData: FormData) {

    const budget = DraftBudgetSchema.safeParse({
        name: formData.get('name'),
        amount: formData.get('amount')
    })
    if (!budget.success) {
        return {
            errors: budget.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const token =(await cookies()).get('CASHTRACKR_TOKEN')?.value;
    const url = `${process.env.API_URL}/budgets`;
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: budget.data.name,
            amount: budget.data.amount
        })
    });

    const json = await req.json();
    // console.log(json);
    const success = SuccessSchema.parse(json);

    

    return{
        errors: [],
        success
    }

}
    