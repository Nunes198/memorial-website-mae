"use client";

import Image from 'next/image';
import Navigation from './components/Navigation';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0); // Estado para o contador

  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
            <Image
              src="/imagens/pai-1.jpg" // Caminho correto
              alt="Foto do Ente Querido"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Em Memória de
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-8">
            Joaquim Almeida da Silva
            <br />
            <span className="text-xl text-gray-500">✰ 09 de setembro de 1953 - ✞ 05 de setembro de 2012</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            A memória é um modo de ter as pessoas que amamos sempre por perto.
          </p>

          <div className="mt-8">
            <p className="text-gray-600">
              Este é um espaço dedicado à memória e celebração da vida de nosso querido ente.
              Aqui compartilhamos histórias, memórias e momentos especiais que mantêm vivo
              seu legado em nossos corações.
            </p>
          </div>

          {/* Botão com contador */}
          <div className="mt-12">
            {/* Imagem da vela */}
            <div className="mb-4">
              <Image
                src="/imagens/vela.png" // Caminho correto para a imagem da vela
                alt="Imagem de uma vela"
                width={150} // Largura igual ao botão
                height={50} // Altura igual ao botão
                className="mx-auto"
              />
            </div>

            <p className="text-xl font-semibold text-gray-700 mb-4">
              Acenda uma vela para essa pessoa
            </p>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg"
            >
              Clique Aqui
            </button>
            <p className="mt-4 text-gray-700 text-lg">
              Velas acesas: <span className="font-bold">{count}</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


