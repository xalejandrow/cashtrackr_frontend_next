import type { Metadata } from "next";
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
      
    </>
  );
}
