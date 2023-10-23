import React from 'react';
import Image from 'next/image'
import logo from '../../../public/images/logo-suma-azul.png';

export function Footer() {
    return (
        <footer className="bg-red-suma text-white p-4 absolute bottom-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm flex items-center">
                    <Image src={logo} alt="Logo de Your Company" className="h-8 w-auto mr-2" />
                    © 2023 Suma. All rights reserved.
                </div>
                <div className="text-sm">
                    <a href="#" className="text-blue-400 hover:text-blue-600 hover:underline">Terms and Conditions</a>
                    <span className="mx-2">|</span>
                    <a href="#" className="text-blue-400 hover:text-blue-600 hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}