import Navigation from '../components/Navigation';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sobre Nós</h1>
        
        <div className="text-center mb-8">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/imagens/brasao.png"
              alt="Descrição da imagem"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <p className="text-lg text-gray-600 text-center">
          Este site foi criado para honrar e preservar as memórias de nossos entes queridos.
        </p>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-600">Para mais informações entre em contato:</p>
          <div className="flex justify-center items-center mt-2">
            <div className="relative w-6 h-6 mr-2">
              <Image
                src="/imagens/whatsapp.png"
                alt="WhatsApp"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="text-lg text-gray-600">(88) 99934-4202</span>
          </div>

          {/* Botão do WhatsApp */}
          <div className="mt-4">
            <a
              href="https://wa.me/5588999344202"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow-lg transform transition duration-300 hover:scale-105 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}