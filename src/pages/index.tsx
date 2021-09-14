import Head from 'next/head'
import Image from 'next/image'
import { Botao } from '../components/Botao'
import { Formulario } from '../components/Formulario'
import { Layout } from '../components/Layout'
import { Tabela } from '../components/Tabela'
import { Cliente } from '../core/Cliente'
import styles from '../styles/Home.module.css'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Alê', 15, '3'),
    new Cliente('Núbrias', 30, '4'),
    new Cliente('Carcamanho', 21, '5'),
  ];

  function clienteSelecionado(cliente: Cliente) {

  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);

  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>

        {/**<Tabela
          clientes={clientes}
          clienteExcluido={clienteExcluido}
          clienteSelecionado={clienteSelecionado}></Tabela> */}
        <Formulario cliente={clientes[0]} />
      </Layout>

    </div>
  )
}
