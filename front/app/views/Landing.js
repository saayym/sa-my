"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/src/components/Landing/Hero";

export default function Landing() {
    const [loadingText, setLoadingText] = useState(".");

    useEffect(() => {
        const loadingSequence = [".", "..", "..."];
        let index = 0;

        const interval = setInterval(() => {
            setLoadingText(loadingSequence[index]);
            index = (index + 1) % loadingSequence.length;
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Hero />
            <p className="text-center text-4xl font-bold tracking-tight sm:text-4xl mb-40">
                En cours de développement{loadingText}
            </p>
        </>
    );
}
