import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Biography() {
  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Biografia</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
          Maria Auxiliadora, mulher de coração doce, dividiu sua vida entre os cuidados do lar e o ofício de costureira. Criou dois filhos com zelo e amor, sendo sempre presença firme e acolhedora. Sua generosidade e disposição em ajudar marcaram todos que tiveram o privilégio de conviver com ela.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Primeiros Anos
          </h2>
          <p className="text-gray-600 mb-6">
          Nascida em um lar simples, Maria Auxiliadora cresceu cercada pelos valores da bondade, do respeito e da solidariedade. Desde jovem demonstrava um jeito meigo e uma vontade constante de cuidar dos outros.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Vida Adulta
          </h2>
          <p className="text-gray-600 mb-6">
          Casou-se e formou uma família, dedicando-se com carinho à criação de seus dois filhos. Além das tarefas do lar, atuou como costureira, profissão que exercia com esmero, sempre pronta a atender a vizinhança com um sorriso e uma palavra amiga.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Legado
          </h2>
          <p className="text-gray-600 mb-6">
          Deixou como herança a ternura nos gestos, a força no silêncio e a importância de estar presente para os que amamos. Seu exemplo de doçura, trabalho e generosidade segue vivo na memória de todos que a conheceram.
          </p>
        </div>
      </main>
       <Footer />
    </div>
  );
}
