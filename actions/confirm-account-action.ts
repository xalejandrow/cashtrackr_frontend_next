"use server";

type ActionStateType = {
    errors: string[]
}
export async function confirmAccount(prevState: ActionStateType) {
    console.log('desde confirmAccount');

    return {
        errors: []
    }
    
}