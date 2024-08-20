"use client";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Landing from './views/Landing';
import Projects from './views/Projects';
import Contact from './views/Contact';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cachedData = localStorage.getItem('projects');
            if (!cachedData) {
                localStorage.setItem('projects', JSON.stringify([]));
            }
        }
    }, []);

    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>

            <main className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pt-12">
                <div className="relative z-10 bg-gradient-to-b from-blue-50 via-transparent to-transparent">
                    <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                        <svg className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                            <defs>
                                <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                                    <path d="M.5 200V.5H200" fill="none"></path>
                                </pattern>
                            </defs>
                            <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth="0"></path>
                            </svg>
                            <rect width="100%" height="100%" strokeWidth="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                            </rect>
                        </svg>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/projets" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <footer>
                <Footer />
            </footer>
        </BrowserRouter>
    );
}
