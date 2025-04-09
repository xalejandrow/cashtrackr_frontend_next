import getToken from "@/src/auth/token";

const getBudget= async (budgetId: string) => {
    // console.log(budgetId);
    const token = await getToken();
    const url = `${process.env.API_URL}/budgets/${budgetId}`;
    const req = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const json = await req.json();
    // console.log(json);
    if(!req.ok) {
        
    }

    return json;
}

export default async function EditBudgetPage({params} : {params: {id: string}}) {

    const { id } = await params;
    // console.log(id);
    await getBudget(id);
    
    return (
        <div>
        EditBudgetPage
        </div>
    )
}
