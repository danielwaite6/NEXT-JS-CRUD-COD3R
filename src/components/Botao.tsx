import React from 'react';

interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray';
    className?: string;
    children: any;
}

export function Botao(props: BotaoProps) {

    const cor = props.cor ?? 'gray'

    return (
        <button
            className={`
                bg-gradient-to-r from-${cor}-400 to-${cor}-700
                text-white px-4 py-2 rounded-full
                ${props.className}
            `}
        >
            {props.children}
        </button>
    );
}