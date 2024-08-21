"use client";

import Image from 'next/image';
import logo from '../../public/sa-my.png';
import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const menuRef = useRef(null);

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsMobileMenuOpen(false);
                setIsClosing(false);
            }, 300);
        } else {
            setIsMobileMenuOpen(true);
        }
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsClosing(true);
            setTimeout(() => {
                setIsMobileMenuOpen(false);
                setIsClosing(false);
            }, 300);
        }
    };

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsClosing(true);
            setTimeout(() => {
                setIsMobileMenuOpen(false);
                setIsClosing(false);
            }, 300);
        }
    };

    const handleLinkClick = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsMobileMenuOpen(false);
            setIsClosing(false);
        }, 300);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            window.addEventListener("resize", handleResize);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className="bg-blue-50 w-full">
                <div className="container flex items-center justify-between p-6 mx-auto text-gray-600 capitalize">
                    <div className="flex items-center">
                        <Link to="/" onClick={handleLinkClick}><Image src={logo} alt="Logo Samy Hammouche" className="h-10 w-10" /></Link>
                    </div>
                    <div className="hidden md:flex items-center justify-end flex-grow">
                        <Link to="/" className="block text-gray-800 mx-1.5 sm:mx-6" onClick={handleLinkClick}>Accueil</Link>
                        <Link to="/projets" className="block text-gray-800 mx-1.5 sm:mx-6" onClick={handleLinkClick}>Projets</Link>
                        <Link to="/contact" className="block text-gray-800 mx-1.5 sm:mx-6" onClick={handleLinkClick}>Contact</Link>
                        <a href="https://github.com/saayym" target="_blank" className="text-gray-800 mx-1.5 sm:mx-6" aria-label="Lien vers Github">
                            <FaGithub className="w-5 h-5 fill-current" />
                        </a>
                        <a href="https://linkedin.com/in/samy-hammouche/" target="_blank" className="text-gray-800 mx-1.5 sm:mx-6" aria-label="Lien vers LinkedIn">
                            <FaLinkedin className="w-5 h-5 fill-current" />
                        </a>
                    </div>
                    <div className="md:hidden flex items-center justify-end w-full">
                        <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none" aria-label="burgerMenu">
                            <RxHamburgerMenu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div ref={menuRef} className={`fixed top-0 left-0 w-full bg-blue-50 p-6 z-50 ${isClosing ? 'animate-slide-up' : 'animate-slide-down'}`}>
                        <div className="flex justify-between items-center mb-4">
                            <Link to="/" onClick={handleLinkClick}><Image className="h-10 w-10 mr-4" src={logo} alt="Logo Samy Hammouche"/></Link>
                            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none" aria-label="burgerMenu">
                                <FaTimes className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center">
                            <Link to="/" className="block text-gray-800 mx-1.5 sm:mx-6" onClick={handleLinkClick}>Accueil</Link>
                            <Link to="/projets" className="block text-gray-800 mx-1.5 sm:mx-6" onClick={handleLinkClick}>Projets</Link>
                            <Link to="/contact" className="block text-gray-800 mx-1.5 sm:mx-6" onClick={handleLinkClick}>Contact</Link>
                        </div>
                        <div className="flex justify-center mt-4">
                            <a href="https://github.com/saayym" target="_blank" className="text-gray-800 mx-2" aria-label="Lien vers Github">
                                <FaGithub className="w-5 h-5 fill-current" />
                            </a>
                            <a href="https://linkedin.com/in/samy-hammouche/" target="_blank" className="text-gray-800 mx-2" aria-label="Lien vers LinkedIn">
                                <FaLinkedin className="w-5 h-5 fill-current" />
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}