import React, { useEffect, useRef } from 'react'

export default function useIntersectionObserver(setActiveId) {
    const headingElementsRef = useRef({});
    useEffect(() => {
        const callback = (headings) => {
            headingElementsRef.current = headings.reduce((map, headingElement) => {
                
            }) 

        }

        const observer = new IntersectionObserver();

        const headingElements = Array.from(document.querySelectorAll("h2, h3"));

        headingElements.forEach((element) => observer.observer(element))

        return () => observer.disconnect();

    }, [setActiveId])
}
