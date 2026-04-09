'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, Menu, Send, X } from 'lucide-react';

const navItems = [
    { label: 'Visual', href: '/visual' },
    { label: 'Code', href: '/code' },
    { label: 'Photo', href: '/photo' },
    { label: 'About', href: '/about' },
];

function Logo() {
    return (
        <Image
            src="/ef-logo-white.png"
            alt="Eugenio Felix Logo"
            width={50}
            height={50}
            priority
        />
    );
}

function PanelContent({ OnClose }: { OnClose: () => void }) {
    return (
        <div className='flex flex-col h-full p-10'>
            <div className='flex items-center justify-between pb-8 border-b border-white/8'>
                <div className='flex items-center gap-2'>
                    <Logo />
                    <span className='text-xl font-bold font-display text-white ml-4'>Eugenio Felix</span>
                </div>
                <button
                    onClick={OnClose}
                    aria-label='Close'
                    className='bg-transparent border-none cursor-pointer text-orange leading-none text-2xl'
                >
                    <X className='font-xl'/>
                </button>            
            </div>
            <ul className='flex flex-col flex-1 justify-center'>
                {navItems.map(({ label, href }) => (
                    <li key={label} className='border-b border-light/30'>
                        <Link
                            href={href}
                            onClick={OnClose}
                            className='flex items-center justify-between py-9 font-display text-white text-3xl hover:text-orange transition-colors duration-200 group'
                        >
                            {label}
                            <span className='text-orange opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200'>
                                <ChevronRight />
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='pt-6 border-t border-white/8 mt-auto'>
                <p className='text-xs uppercase tracking-wide text-light font-mono font-bold mb-1'>Get in touch</p>
                <a href="mailto:hello@eugeniofelix.com" className='text-sm text-orange font-mono hover:underline'>hello@eugeniofelix.com</a>

            </div>
        </div>
    );
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <header className='relative z-50'>
            {/* Change closed menu navigation bar */}
            <nav className='flex items-center gap-10 p-10'>
                <button
                    onClick={() => setOpen(true)}
                    aria-label='Open'
                    className={`bg-transparent border-none cursor-pointer text-white text-xl leading-none p-1 transition-opacity duration-250 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
                    <Menu className='text-xl text-orange' />
                </button>
                <Link
                    href="/"
                    className={`flex items-center gap-6 transition-opacity duration-250 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
                    <Logo />
                    <span className='text-2xl font-bold font-display text-white'>Eugenio Felix</span>
                </Link>
            </nav>
            
            <div 
                onClick={close}
                className={`fixed inset-0 bg-black/80 transition-opacity duration-200 hidden md:block ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />
            
            {/* To change panel properties like background color, width, border */}
            <div className={`fixed top-0 left-0 h-full w-96 bg-dark z-50 hidden md:block transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <PanelContent OnClose={close} />
            </div>
            
            {/* Mobile - To change panel properties like background color, width, border */}
            <div className={`fixed inset-0 bg-dark z-50 block md:hidden transition-opacity duration-350 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <PanelContent OnClose={close} />
            </div>
        </header>
    );
}