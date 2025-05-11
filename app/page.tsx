"use client";

import Image from 'next/image';
import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0); // Estado para o contador

  // Carregar o valor do contador do Local Storage ao carregar a página
  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  // Atualizar o Local Storage sempre que o contador mudar
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-pink-200 shadow-lg">
            <Image
              src="/imagens/mae-1.png" // Caminho correto
              alt="Foto do Ente Querido"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Em Memória de:
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-8">
            Maria Auxiliadora Lopes da Silva
            <br />
            <span className="text-xl text-gray-500">✰ 25 de maio de 1960 - ✞ 28 de novembro de 2008  (48 anos)</span>
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
                src="/imagens/vela1.png" // Caminho correto para a imagem da vela
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
              onClick={incrementCount}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg"
            >
              Clique Aqui
            </button>
            <p className="mt-4 text-gray-700 text-lg">
              Vela(s) acesa(s): <span className="font-bold">{count}</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


