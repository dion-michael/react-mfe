import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default function MarketingApp() {
    const ref = useRef(null);

    useEffect(() => {
        if (ref) {
            mount(ref.current);
        }
    }, [ref]);

    return <div ref={ref}/>
};
