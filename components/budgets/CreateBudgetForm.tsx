"use client";

import { createBudget } from "@/actions/create-budget-action";
import { useActionState } from "react";
import ErrorMessage from "../ui/ErrorMessage";

export default function CreateBudgetForm() {
	const [state, dispatch] = useActionState(createBudget, {
		errors: [],
		success: "",
	});

	return (
		<form className="mt-10 space-y-3" 
			noValidate 
			action={dispatch}
		>

		{state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}

		<div className="space-y-3">
			<label htmlFor="name" className="text-sm uppercase font-bold">
			Nombre Presupuesto
			</label>
			<input
			id="name"
			className="w-full p-3  border border-gray-100 bg-gray-500"
			// className="w-full p-3  border border-gray-100 bg-slate-100"
			type="text"
			placeholder="Nombre del Presupuesto"
			name="name"
			/>
		</div>
		<div className="space-y-3">
			<label htmlFor="amount" className="text-sm uppercase font-bold">
			Cantidad Presupuesto
			</label>
			<input
			type="number"
			id="amount"
			className="w-full p-3  border border-gray-100 bg-gray-500"
			// className="w-full p-3  border border-gray-100 bg-slate-100"
			placeholder="Cantidad Presupuesto"
			name="amount"
			/>
		</div>
		<input
			type="submit"
			className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
			value="Crear Presupuesto"
		/>
		</form>
	);
}
