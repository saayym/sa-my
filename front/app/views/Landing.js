"use client";

import Hero from "../../src/components/Landing/Hero";
import StackSlider from "../../src/components/Landing/StackSlider";
import AboutMe from "../../src/components/Landing/AboutMe";
import ProjectsList from "../../src/components/Projects/ProjectsList";
import Accordion from "../../src/components/Landing/Accordion";
import React from "react";

export default function Landing() {
    return (
        <>
            <Hero />

            <AboutMe />

            <StackSlider />

            <ProjectsList limit={3} />
            <div className="mt-4 flex items-center justify-center gap-x-6">
                <a href="/projets" className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Voir plus de projets
                </a>
            </div>

            <Accordion />
        </>
    );
}
