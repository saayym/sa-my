import React, { useState } from 'react';
import accordionData from '../../data/accordion.json';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-screen-md mx-auto p-10">
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="text-gray-900" data-inactive-classes="text-gray-500">
                {accordionData.map((item, index) => (
                    <div key={index}>
                        <h3 id={`accordion-flush-heading-${index}`}>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 text-gray-900"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`accordion-flush-body-${index}`}
                            >
                                <span>{item.question}</span>
                                <svg
                                    data-accordion-icon=""
                                    className={`w-6 h-6 shrink-0 ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </h3>
                        <div
                            id={`accordion-flush-body-${index}`}
                            className={`${activeIndex === index ? '' : 'hidden'}`}
                            aria-labelledby={`accordion-flush-heading-${index}`}
                        >
                            <div className="py-5 border-b border-gray-200">
                                <p className="mb-2 text-gray-500">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}