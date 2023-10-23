import React from 'react';
import Image from 'next/image'
import logo from '../../../public/images/logo-suma-azul.png';
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="bg-red-suma p-4 w-full">
            <div className="container w-40 mx-auto flex items-center justify-center">
                <Link href="/">
                    <Image src={logo} alt='logo'/>
                </Link>
            </div>
        </nav>
    );
}