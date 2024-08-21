import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import samy from '../../../public/images/samy.jpeg';

export default function Hero() {
    const adjectives = [
        '4th year student at Supinfo',
        'Junior Fullstack Developer',
        'Frontend lover',
        'Backend enjoyer',
        'UX/UI enthusiast',
        'Tech addict'
    ];

    const [currentAdjective, setCurrentAdjective] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % adjectives.length;
            const fullText = adjectives[i];

            setCurrentAdjective(isDeleting ? fullText.substring(0, currentAdjective.length - 1) : fullText.substring(0, currentAdjective.length + 1));

            if (!isDeleting && currentAdjective === fullText) {
                setTimeout(() => setIsDeleting(true), 400);
            } else if (isDeleting && currentAdjective === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }

            setTypingSpeed(isDeleting ? 50 : 150);
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentAdjective, isDeleting, loopNum, typingSpeed, adjectives]);

    return (
        <>
            <section className="relative overflow-hidden pb-12">
                <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            Samy Hammouche
                        </h1>
                        <p className="text-4xl font-bold tracking-tight sm:text-4xl">
                            <span className="text-blue-600" id="adjectives">
                                {currentAdjective}&nbsp;
                            </span>
                            <span className="blinking-cursor">|</span>
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            &quot;Les compétences se gagnent grâce à la passion.&quot;
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a className="float float-animation isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                               href="#a-propos-de-moi">
                                Découvrir mon portfolio
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="relative mx-auto mt-10 max-w-lg">
                        <Image className="img w-full rounded-2xl border border-gray-100" src={samy} alt="Samy Hammouche, Développeur Fullstack Junior"/>
                    </div>
                </div>
            </section>
        </>
    )
}
