"use client";

import Navigation from '../components/Navigation';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useState } from 'react';

type Member = {
  id: number;
  src: string;
  name: string;
  relation: string;
  description?: string;
};

export default function Family() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const familyMembers: Member[] = [
    {
      id: 1,
      src: '/imagens/avo-1.jpg',
      name: 'Geraldo Lopes da Silva',
      relation: 'Pai',
    },
    {
      id: 2,
      src: '/imagens/vo.png',
      name: 'Maria Martinhs de Freitas',
      relation: 'Mãe',
    },
    {
      id: 3,
      src: '/imagens/nunes.jpg',
      name: 'Nunes',
      relation: 'Filho',
      description: 'Saudade Eterna!!!',
    },
    {
      id: 4,
      src: '/imagens/nayane.jpg',
      name: 'Nayane',
      relation: 'Filha',
      description: 'Saudade Eterna!!!',
    },
    {
      id: 5,
      src: '/imagens/marido.png',
      name: 'Joaquim Almeida da Silva',
      relation: 'Marido',
      description: 'Companheiro de vida e amor eterno.',
    },
    {
      id: 6,
      src: '/imagens/neto.png',
      name: 'Enzo Gabriel',
      relation: 'Neto',
    },
  ];

  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Família</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {familyMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedMember(member)} // Abre o modal ao clicar
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:opacity-90"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.relation}</p>
                {member.description && (
                  <p className="text-gray-500 text-sm">{member.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedMember(null)} // Fecha o modal
              >
                ✕
              </button>
              <div className="relative w-full h-96">
                <Image
                  src={selectedMember.src}
                  alt={selectedMember.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{selectedMember.name}</h3>
                <p className="text-sm text-gray-500">{selectedMember.relation}</p>
                {selectedMember.description && (
                  <p className="text-sm text-gray-500 mt-2">{selectedMember.description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

