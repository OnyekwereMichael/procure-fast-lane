import { useMutation } from "@tanstack/react-query";
import { INewUser, IVerifyUser } from "../types";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const CreateUserAccount = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async ({ email, phone, name, password, password_confirmation }: INewUser) => {
            try {
                const res = await fetch(`${BASE_URL}api/auth/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, phone, name, password, password_confirmation })
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.error);
                console.log(data);
                if (data.error) throw new Error(data.error);
                toast.success(`${data.message}`);
                navigate('/auth/verify');
               
                return data;
            } catch (error: unknown) {
                console.error(error);
                if (error instanceof Error) {
                    toast.error(error.message || 'Failed to create user');
                } else {
                    toast.error('Failed to create user');
                }
            }
        }
    });
};
export const VerifyEmail = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async ({ email, otp }: IVerifyUser) => {
            try {
                const res = await fetch(`${BASE_URL}api/auth/verify-email`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, otp })
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.error);
                console.log(data);
                if (data.error) throw new Error(data.error);
                toast.success(`${data.message}`);
                navigate('/auth/register-company');
               
                return data;
            } catch (error: unknown) {
                console.error(error);
                if (error instanceof Error) {
                    toast.error(error.message || 'Failed to verify email');
                } else {
                    toast.error('Failed to verify email');
                }
            }
        }
    });
};
