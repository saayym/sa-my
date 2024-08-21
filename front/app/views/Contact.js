"use client";

import ContactForm from "@/src/components/Contact/Form";

export default function Contact() {

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 id="projects" className="text-3xl text-center font-semibold mt-10">
                En rentre en contact ?
            </h2>
            <hr className="mt-10 w-2/5 mx-auto" />
            <ContactForm />
        </div>
    );
}