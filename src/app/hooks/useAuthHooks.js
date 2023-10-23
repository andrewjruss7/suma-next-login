import { useState } from 'react';
import { login as loginApi } from "@/app/services/apiCalls";
import { register as registerApi } from "@/app/services/apiCalls";
import { useRouter } from 'next/navigation';

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const router = useRouter();

    const doLogin = async (username, password) => {
        setIsLoading(true);
        setIsSuccess(false);
        setIsError(false);

        try {
            const response = await loginApi(username, password);
            if (response.ok) {
                const userDataResponse = await response.json();
                setIsSuccess(true);
                setData(userDataResponse);
                setIsAuthenticated(true);
            } else {
                setIsError(true);
            }
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const doLogout = async () => {
        console.log('👀')
        setIsAuthenticated(false);
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(false);
        setData(null);

        await router.push('/');
    };

    const doRegister = async () => {
        setIsLoading(true);
        setIsSuccess(false);
        setIsError(false);

        try {
            const response = await registerApi();
            if (response.ok) {
                const userDataResponse = await response.json();
                setIsSuccess(true);
                setData(userDataResponse);
                setIsAuthenticated(true);
            } else {
                setIsError(true);
            }
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { isAuthenticated, doLogin, doLogout, doRegister, isLoading, isSuccess, isError, data };
};



