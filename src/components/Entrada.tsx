import React from 'react';

interface EntradaProps {
    tipo?: 'text' | 'number';
    texto: string;
    valor: any;
    somenteLeitura?: boolean;
    className?: string;
    valormudou?: (valor: any) => void;
}

export function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.texto}
            </label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
                onChange={e => props.valormudou?.(e.target.value)}
            />
        </div>
    );
}