'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLogin } from '../hooks/useAuthHooks';
import { useRouter } from 'next/navigation';
import luchadors from '../../../public/images/luchadors.png';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const {isLoading, isSuccess, isError, doLogin } = useLogin();
    const router = useRouter();

    const handleLogin = async () => {
        setError(null);
        await doLogin(username, password);
    };

    useEffect(() => {
        if (isSuccess) {
            router.push('/profile');
        } else if (isLoading) {
            setError(null);
        } else if (isError) {
            if (isError) {
                setError('Credenciales incorrectas');
            } else {
                setError('Ocurrió un error al iniciar sesión');
            }
        }
    }, [isLoading, isSuccess, isError, router]);

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
                        WELCOME BACK
                    </h1>
                    <p className="font-worksans text-font-blue font-bold text-base mt-4 flex justify-center">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        ready to take your "fince\ñera" fiesta to the next level!
                    </p>
                    <div className="mt-4">
                        <div className="mb-4 flex justify-center">
                            <input
                                className="font-worksans text-font-blue font-medium border-transparent focus:ring-0 w-1/2 p-4"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <input
                                className="font-worksans text-font-blue font-medium border-transparent focus:ring-0 w-1/2 p-4"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex justify-center mb-4">
                            <button className="font-worksans font-semibold text-font-red border-b border-font-red">
                                Forgot your password?
                            </button>
                        </div>

                        <div className="flex justify-center gap-4 mb-4">
                            <button
                                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 w-full sm:w-1/2 px-8 rounded-b mb-4 md:mb-0 md:mr-4 bg-red-suma text-font-white text-lg font-medium"
                                onClick={handleLogin}
                            >
                                SIGN IN
                            </button>
                        </div >
                        <div className="mt-4 text-center">
                            {error && (
                                <div className="text-red-suma font-worksans font-bold text-center">
                                    {error}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 text-center flex flex-col md:flex-row md:justify-center">
                        <p className="font-worksans text-font-blue font-medium md:mr-2">Don't have an account?</p>
                        <button className="font-worksans text-font-red font-bold btn-forgot-red">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}