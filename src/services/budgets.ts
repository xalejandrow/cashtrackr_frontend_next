// La función cache es una función de Next.js que permite almacenar en caché los resultados de una función asíncrona.
// Esto es útil para evitar hacer múltiples solicitudes a la misma API y mejorar el rendimiento de la aplicación.
// La función cache toma una función como argumento y devuelve una nueva función que almacena en caché los resultados de la función original.

import { cache } from "react";
import { notFound } from "next/navigation";
import getToken from "../auth/token";
import { BudgetAPIResponseSchema } from "../schemas";

// En este caso, estamos utilizando la función cache para almacenar en caché los resultados de la función getBudget. (no es necesaria en versiones más nuevas de Next.js)
export const getBudget = cache (async (budgetId: string) => {
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

        const budget = BudgetAPIResponseSchema.parse(json);
        return budget;
    })