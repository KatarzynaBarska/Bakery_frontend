import React from 'react';

import './Button.css'

interface Props {
    children: React.ReactNode;
    kasia: string;
}

export const Button = (props: Props) => {
    return (
        <>
            <button className="Button" style={{padding: props.kasia}}>
                {props.children}
            </button>
        </>
    );
}