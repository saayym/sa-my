"use client";

import {FaLightbulb} from "react-icons/fa";
import {IoMdTrendingUp} from "react-icons/io";
import {FaArrowsSplitUpAndLeft} from "react-icons/fa6";

export default function AboutMe() {
    return (
        <>
            <div className="h-full lg:w-8/12 mt-12 mx-auto mb-16 p-4" id="a-propos-de-moi">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">À propos de moi</h2>

                <hr className="mt-10 w-2/5 mx-auto" />

                <div className="grid gap-14 md:grid-cols-3 md:gap-5 mt-8 p-3">
                    <div className="rounded-xl bg-white p-6 text-center shadow">
                        <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-blue-500 shadow-blue-500/40">
                            <FaLightbulb className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">Curieux</h3>
                        <p className="px-4 text-gray-500">Texte</p>
                    </div>
                    <div className="rounded-xl bg-white p-6 text-center shadow">
                        <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-blue-500 shadow-blue-500/40">
                            <IoMdTrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">Autonome</h3>
                        <p className="px-4 text-gray-500">Texte</p>
                    </div>
                    <div className="rounded-xl bg-white p-6 text-center shadow">
                        <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-blue-500 shadow-blue-500/40">
                            <FaArrowsSplitUpAndLeft className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">Polyvalent</h3>
                        <p className="px-4 text-gray-500">Texte</p>
                    </div>
                </div>
            </div>
        </>
    )
}