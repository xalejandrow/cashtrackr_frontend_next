import type { Metadata } from "next";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata : Metadata = {
  title: "CashTrackr - Crear una cuenta",
  description: "CashTrackr - Crear una cuenta",
};

export default function RegisterPage() {


    
	return (
		<>
			<h1 className="font-black text-6xl text-purple-950">Crea una Cuenta</h1>
			<p className="text-3xl font-bold">
				y controla tu <span className="text-amber-500">finanzas</span>
			</p>

			<RegisterForm />
		
			<nav className="mt-10 flex flex-col space-y-4">
				<Link 
					href='/auth/login'
					className="text-center text-gray-500"
				>
					¿Ya tienes cuenta? Iniciar Sesión
				</Link>
			</nav>
		</>
	);
}
