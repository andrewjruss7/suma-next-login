'use client'
import Image from "next/image";
import luchadors from '../../../public/images/luchadors.png';
import { useEffect, useState } from "react";
import { useLogin } from "@/app/hooks/useAuthHooks";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { isLoading, isSuccess, isError, doRegister } = useLogin();
    const router = useRouter();

    const handleRegister = async () => {
        // Validación de campos
        if (!username || !password) {
            return;
        }

        // Llamar a la API solo si los campos están completos
        await doRegister(username, password);
    };

    useEffect(() => {
        if (isSuccess) {
            console.log('Registro exitoso');
            router.push('/');
        }
    }, [isSuccess, router]);

    return (
        <div className="h-screen flex flex-col bg-white-suma">
            <div className="flex flex-1 mt-auto justify-center items-center">
                <div className="w-1/3">
                    <Image
                        src={luchadors}
                        alt="Luchadors"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-1/2 p-8">
                    <h1 className="font-spring text-font-blue font-semibold text-4xl lg:text-5xl flex justify-center">
                        MAXIMIZE YOUR MONEY
                    </h1>

                    <p className="font-worksans text-font-blue font-bold text-base mt-4 text-center">
                        Just like opening up your fridge's butter containers, our A.I.<br />helps you find secret savings every day!
                    </p>

                    <p className="font-worksans text-font-blue font-bold text-base mt-4 flex justify-center">
                        Start by creating an account.
                    </p>
                    <div className="mt-4">
                        <div className="mb-4 flex justify-center">
                            <input
                                className="font-worksans text-font-blue font-medium border-transparent focus:ring-0 w-1/2 p-4"
                                type="text"
                                placeholder="Email Address"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <input
                                className="font-worksans text-font-blue font-medium border-transparent focus:ring-0 w-1/2 p-4"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center gap-4 mb-4">
                            <button
                                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 w-full sm:w-1/2 px-8 rounded-b mb-4 md:mb-0 md:mr-4 bg-red-suma text-font-white text-lg font-medium"
                                onClick={handleRegister}
                            >
                                SIGN UP
                            </button>
                        </div>
                        {error && (
                            <p className="text-font-red text-sm text-center">{error}</p>
                        )}
                    </div>
                    <div className="mt-4 text-center flex flex-col md:flex-row md:justify-center">
                        <p className="font-worksans text-font-blue font-medium md:mr-2">Don't have an account?</p>
                        <button className="font-worksans text-font-red font-bold btn-forgot-red">Sign in</button>
                    </div>
                    <p className="font-worksans text-font-blue font-medium text-sm mt-4 text-center">
                        By signing up you agree to SUMA <a href="/terms-of-service" className="text-font-red border-b border-font-red">Terms of Service</a> and <a href="/privacy-policy" className="text-font-red border-b border-font-red">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}