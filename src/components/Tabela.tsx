import React from 'react';
import { Cliente } from '../core/Cliente';
import { IconeEdicao, IconeLixo } from './icones';

interface TabelaProps {
    clientes: Cliente[];
    clienteSelecionado?: (cliente: Cliente) => void;
    clienteExcluido?: (cliente: Cliente) => void;
}

export function Tabela({ clientes, clienteSelecionado, clienteExcluido }: TabelaProps) {

    const exibirAcoes = clienteExcluido || clienteSelecionado;


    function renderizaCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}

            </tr>
        )
    }

    function renderizaDados() {
        return clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizaAcoes(cliente) : false}
                </tr>
            )
        });
    }

    function renderizaAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {clienteSelecionado ? (

                    <button
                        onClick={() => clienteSelecionado?.(cliente)}
                        className={`
                            flex justify-center items-center
                            text-green-600 rounded-full p-2 m-1
                            hover:bg-purple-50
                        `}
                    >
                        {IconeEdicao}
                    </button>

                ) : false}

                {clienteExcluido ? (

                    <button
                        onClick={() => clienteExcluido?.(cliente)}
                        className={`
                            flex justify-center items-center
                            text-red-500 rounded-full p-2 m-1
                            hover:bg-purple-50
                        `}
                    >
                        {IconeLixo}
                    </button>

                ) : false}


            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizaCabecalho()}
            </thead>
            <tbody>
                {renderizaDados()}
            </tbody>
        </table>
    );
}