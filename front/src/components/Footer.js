import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
    return (
        <>
            <footer className="relative bg-blue-50 pt-8 pb-6">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-blue-50 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left">
                        <div className="w-full text-center px-4">
                            <h4 className="text-3xl font-semibold">On garde contact ?</h4>
                            <p className="text-lg mt-0 mb-2 text-blueGray-600">
                                Contactez moi par email ou retrouvez moi sur les réseaux sociaux ci-dessous :
                            </p>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <IoIosMail className="w-6 h-6 mx-auto" />
                                </button>
                                <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <FaLinkedin className="w-6 h-6 mx-auto" />
                                </button>
                                <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <FaGithub className="w-6 h-6 mx-auto" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Tous droits réservés © sa-my {new Date().getFullYear()}. - Développé avec ❤️ en React.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
