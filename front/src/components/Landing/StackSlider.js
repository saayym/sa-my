"use client";

import React, { useEffect, useState } from 'react';
import stacks from '../../data/stacks.json';

export default function StackSlider() {
    const [stackItems, setStackItems] = useState([]);

    useEffect(() => {
        setStackItems([...stacks, ...stacks]);
    }, []);

    return (
        <div className="slider-container bg-blue-50 pt-4 pb-4">
            <div className="slider">
                {stackItems.map((stack, index) => (
                    <div key={index} className="slide">
                        <img src={stack.image} alt={stack.name} className="stack-image"/>
                        <p className="stack-title">{stack.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
