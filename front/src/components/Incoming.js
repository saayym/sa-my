"use client";

import React, { useEffect, useState } from 'react';

export default function Incoming() {
    const [loadingText, setLoadingText] = useState(".");

    useEffect(() => {
        const texts = [".", "..", "..."];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % texts.length;
            setLoadingText(texts[index]);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <p className="text-center text-4xl font-bold tracking-tight sm:text-3xl">En cours de développement{loadingText}</p>
        </div>
    );
}