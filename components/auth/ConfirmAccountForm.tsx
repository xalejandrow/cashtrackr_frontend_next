"use client";
import { confirmAccount } from "@/actions/confirm-account-action";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useActionState, useState } from "react";


export default function ConfirmAccountForm() {

    const [token, setToken] = useState("");
    const [state, dispatch] = useActionState(confirmAccount, {
        errors: []
    });

    const handleChange = (token: string) => {
        setToken(token);        
    }

    const handleComplete = () => {
        dispatch()        
    }

    return (
        <div className="flex justify-center gap-5 my-10">
            <PinInput
                value={token}
                onChange={handleChange}
                onComplete={handleComplete}
            >
                <PinInputField className="h-10 w-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                <PinInputField className="h-10 w-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                <PinInputField className="h-10 w-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                <PinInputField className="h-10 w-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                <PinInputField className="h-10 w-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                <PinInputField className="h-10 w-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
            </PinInput>
        </div>
    )
}
