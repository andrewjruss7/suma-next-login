'use client'
import React, { useState, useEffect } from 'react';
import { useLogin } from "@/app/hooks/useAuthHooks";
import { useRouter } from 'next/navigation';

export default function ProfileHome() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const { doLogout } = useLogin();

    const userData = {
        username: "Jeanne Halvorson",
        email: "kminchelle@qq.com",
        image: "https://robohash.org/autquiaut.png?size=50x50&set=set1",
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        doLogout();
        router.push('/');
    };

    useEffect(() => {
        openModal();
    }, []);

    return (
        <main>
            <div className="relative h-screen">
                <div className="absolute inset-0 z-10">
                    {/* Establece la imagen de fondo */}
                    <div className="h-screen bg-my_bg_image bg-cover bg-no-repeat bg-center relative z-10">
                        <div className="bg-green-suma bg-opacity-80 h-full w-full"></div>
                    </div>
                </div>
                <div className="w-full h-full p-8 lg:p-24 relative z-10">
                    <div className="px-8 lg:px-20 py-8 lg:py-20">
                        <h1 className="font-spring text-font-blue font-semibold text-4xl lg:text-5xl">
                            DASHBOARD
                        </h1>
                    </div>
                </div>
                {/* Muestra la imagen de perfil en un contenedor que se puede hacer clic */}
                <div className="fixed top-0 right-0 z-20">
                    <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        <img
                            src={userData.image}
                            alt="Imagen de perfil"
                            className="w-16 h-16 rounded-full"
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                margin: '8px',
                            }}
                        />
                    </div>
                </div>

                {/* Modal para mostrar más detalles del perfil */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-30" onClick={closeModal}>
                        <div className="absolute inset-0 bg-black bg-opacity-75" onClick={closeModal}></div>
                        <div className="fixed top-0 right-0 z-30 mt-16">
                            <div className="w-64 p-4 bg-green-suma text-white rounded-lg shadow-lg m-4">
                                {userData ? (
                                    <>
                                        <h2 className="text-lg font-semibold">{userData.username}</h2>
                                        <p>{userData.email}</p>
                                    </>
                                ) : (
                                    <p>Cargando datos...</p>
                                )}
                                <button
                                    className="mt-4 px-4 py-2 w-full text-font-blue font-black rounded hover:bg-red-600"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
