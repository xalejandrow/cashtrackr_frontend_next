"use client";
import { confirmAccount } from "@/actions/confirm-account-action";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useActionState, useEffect, useState } from "react";
import ErrorMessage from "../ui/ErrorMessage";
import SuccessMessage from "../ui/SuccessMessage";
import { toast } from "react-toastify";


export default function ConfirmAccountForm() {

    const [isComplete, setIsComplete] = useState(false);
    const [token, setToken] = useState("");

    
    const confirmAccountWithToken = confirmAccount.bind(null, token);
    const [state, dispatch] = useActionState(confirmAccountWithToken, {
        errors: [],
        success: ''
    });
    
    useEffect(() => {
        if (isComplete) {
            dispatch();
        }
    }, [isComplete])

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(error => {
                toast.error(error);
            });
        }
    }, [state])

    const handleChange = (token: string) => {
        setIsComplete(false);
        setToken(token);        
    }

    const handleComplete = () => {
        setIsComplete(true);      
    }

    return (
        <>
            {/* {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)} */}
            {state.success && <SuccessMessage>{state.success}</SuccessMessage>}
            
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
        </>
    )
}
