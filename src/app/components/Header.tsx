'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
        <div className='flex flex-col h-full px-10 py-8'>
            <div className='flex items-center justify-between pb-8 border-b border-gray'>
                <div className='flex items-center gap-2.5'>
                    <Logo />
                    <span className='text-lg font-bold font-display text-white ml-4'>Eugenio Felix</span>
                </div>
                <button
                    onClick={OnClose}
                    aria-label='Close'
                    className='bg-transparent border-none cursor-pointer text-orange leading-none text-2xl'
                >
                    ×
                </button>            
            </div>
            <ul className='flex flex-col flex-1 justify-center'>
                {navItems.map(({ label, href }) => (
                    <li key={label} className='border-b border-white/6'>
                        <Link
                            href={href}
                            onClick={OnClose}
                            className='flex items-center justify-between py-4 font-bold text-white/25 hover:text-gray transition-colors duration-200 group'
                        >
                            {label}
                            <span className='text-orange opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200'>
                                →
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='pt-6 border-t border-white/8 mt-auto'>
                <p className='text-[11px] uppercase tracking-widest text-white/25 font-mono mb-1'>Get in touch</p>
                <a href="mailto:hello@eugeniofelix.com" className='text-[13px] text-orange font-mono hover:underline'>
                    hello@eugeniofelix.com
                </a>
            </div>
        </div>
    );
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <header className='relative z-50'>
            <nav className='flex items-center gap-3 px-8 py-5 border-b border-white/8'>
                <button
                    onClick={() => setOpen(true)}
                    aria-label='Open'
                    // Fixed: Wrapped in {` `} for dynamic evaluation
                    className={`bg-transparent border-none cursor-pointer text-white text-xl leading-none p-1 transition-opacity duration-250 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
                    →
                </button>
                <Link
                    href="/"
                    // Fixed: Wrapped in {` `} and removed rogue inner { }
                    className={`flex items-center gap-2.5 transition-opacity duration-250 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
                    <Logo />
                </Link>
            </nav>
            
            <div 
                onClick={close}
                // Fixed: md-block to md:block
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-350 hidden md:block ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />
            
            {/* Fixed: w-95 to standard w-96, fixed rogue syntax at end of line */}
            <div className={`fixed top-0 left-0 h-full w-96 bg-[#111111] border-r border-white/8 z-50 hidden md:block transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <PanelContent OnClose={close} />
            </div>
            
            <div className={`fixed inset-0 bg-black z-50 block md:hidden transition-opacity duration-350 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <PanelContent OnClose={close} />
            </div>
        </header>
    );
}