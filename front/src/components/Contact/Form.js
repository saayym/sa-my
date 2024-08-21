"use client";

import {useEffect} from "react";

export default function ContactForm() {
    useEffect(() => {
        var d = document, w = "https://tally.so/widgets/embed.js", v = function() {
            "undefined" != typeof Tally ? Tally.loadEmbeds() : d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
                e.src = e.dataset.tallySrc;
            });
        };
        if ("undefined" != typeof Tally) v();
        else if (d.querySelector('script[src="' + w + '"]') == null) {
            var s = d.createElement("script");
            s.src = w, s.onload = v, s.onerror = v, d.body.appendChild(s);
        }
    }, []);

    return (
        <>
            <iframe className="mt-8 z-50 max-w-580-px" data-tally-src="https://tally.so/embed/3NLOzb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="1" frameBorder="0" marginHeight="0" marginWidth="0" title="null"></iframe>
        </>
    )
}