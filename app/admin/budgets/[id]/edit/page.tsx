import { Metadata } from "next";
import { cache } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import EditBudgetForm from "@/components/budgets/EditBudgetForm";
import getToken from "@/src/auth/token";
import { BudgetAPIResponseSchema } from "@/src/schemas";


// La función cache es una función de Next.js que permite almacenar en caché los resultados de una función asíncrona.
// Esto es útil para evitar hacer múltiples solicitudes a la misma API y mejorar el rendimiento de la aplicación.
// La función cache toma una función como argumento y devuelve una nueva función que almacena en caché los resultados de la función original.
// En este caso, estamos utilizando la función cache para almacenar en caché los resultados de la función getBudget. (no es necesaria en versiones más nuevas de Next.js)
const getBudget = cache (async (budgetId: string) => {
// const getBudget = async (budgetId: string) => {
    // console.log(budgetId);
    const token = await getToken();
    const url = `${process.env.API_URL}/budgets/${budgetId}`;
    const req = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    const json = await req.json();
    // console.log(json);
    if(!req.ok) {
        notFound();
    }

    // console.log('json en getBudget: ',json);
    // return json;
    const budget = BudgetAPIResponseSchema.parse(json);
    // console.log('budget en getBudget: ',budget);
    return budget;
// }
})

export async function generateMetadata({params} : {params: Promise<{id: string}>}) : Promise<Metadata> {

    const {id} = await params;
    const budget = await getBudget(id);
    // console.log('budget' ,budget);
    
    return {
            title: `CashTrackr - ${budget.name}`,
            description: `CashTrackr - ${budget.name}`
    }
}

export default async function EditBudgetPage({params} : {params: Promise<{id: string}>}) {
    
    const {id} = await params;
    const budget = await getBudget(id);
    // console.log('budget en Function: ',budget);    
    
    return (
        <>
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
            <div className='w-full md:w-auto'>
                <h1 className='font-black text-4xl text-purple-950 my-5'>
                Editar Presupuesto:
                 {budget.name}
                </h1>
                <p className="text-xl font-bold">Llena el formulario y crea un nuevo {''}
                <span className="text-amber-500">presupuesto</span>
                </p>
            </div>
            <Link
                href={'/admin'}
                className='bg-amber-500 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center'
            >
                Volver
            </Link>
            </div>
            <div className='p-10 mt-10  shadow-lg border '>
                <EditBudgetForm 
                    budget={budget}
                />
            </div>
      </>
    )
}
