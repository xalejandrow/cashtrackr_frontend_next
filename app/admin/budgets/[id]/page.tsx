import { getBudget } from "@/src/services/budgets";
import { Metadata } from "next";


export async function generateMetadata({params} : {params: Promise<{id: string}>}) : Promise<Metadata> {

    const {id} = await params;
    const budget = await getBudget(id);

    return {
            title: `CashTrackr - ${budget.name}`,
            description: `CashTrackr - ${budget.name}`
    }
}

export default async function BudgetDetailsPage({params}: { params: Promise<{ id: string }>}) {
    const { id } = await params;
    // console.log(id);
    const budget = await getBudget(id);
    // console.log(budget);

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                <h1 className="font-black text-4xl text-purple-950">{budget.name}</h1>
                <p className="text-xl font-bold">
                    Administra tus {""} <span className="text-amber-500">gastos</span>
                </p>
                </div>
            </div>
        </>
    );
}
