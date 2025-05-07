'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Início
                </Link>
                <Link href="/galeria" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Galeria
                </Link>
                <Link href="/familia" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Família
                </Link>
                <Link href="/biografia" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Biografia
                </Link>
                <Link href="/sobre" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Sobre
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Início
            </Link>
            <Link href="/galeria" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Galeria
            </Link>
            <Link href="/familia" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Família
            </Link>
            <Link href="/biografia" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Biografia
            </Link>
            <Link href="/sobre" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Sobre
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
