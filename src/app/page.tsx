import { Metadata } from 'next';
import {
  Briefcase,
  DollarSign,
  FileText,
  Handshake,
  Lightbulb,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Users,
  Building2,
  ReceiptText,
  Banknote,
  Scale,
  CalendarDays,
  CreditCard,
  NotebookPen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contabilidade de Sucesso | Seu Escritório Contábil',
  description: 'Soluções contábeis completas para empresas e profissionais liberais. Abertura de empresa, gestão fiscal, folha de pagamento e consultoria financeira.',
  keywords: ['contabilidade', 'escritório contábil', 'contabilidade online', 'abertura de empresa', 'imposto de renda', 'gestão fiscal', 'folha de pagamento', 'consultoria financeira', 'assessoria contábil'],
  openGraph: {
    title: 'Contabilidade de Sucesso | Seu Escritório Contábil',
    description: 'Soluções contábeis completas para empresas e profissionais liberais.',
    url: 'https://seuescritorio.com.br', // Replace with actual URL
    siteName: 'Contabilidade de Sucesso',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar (simple for landing page) */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-700">Contabilidade Excellence</a>
          <div className="hidden md:flex space-x-6">
            <a href="#servicos" className="text-gray-700 hover:text-indigo-600 transition-colors">Serviços</a>
            <a href="#sobre" className="text-gray-700 hover:text-indigo-600 transition-colors">Sobre Nós</a>
            <a href="#vantagens" className="text-gray-700 hover:text-indigo-600 transition-colors">Vantagens</a>
            <a href="#contato" className="text-gray-700 hover:text-indigo-600 transition-colors">Contato</a>
            <a href="#orcamento" className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Orçamento Grátis</a>
          </div>
          <button className="md:hidden text-gray-700 focus:outline-none">
            {/* Hamburger icon for mobile */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Sua Empresa Crescendo,<br /> Suas Finanças Organizadas.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Assessoria contábil completa e personalizada para você focar no que realmente importa: o sucesso do seu negócio.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#orcamento" className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
              Solicite um Orçamento <ArrowRight className="inline-block ml-2" size={20} />
            </a>
            <a href="#contato" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-indigo-700 transition-colors transition-transform transform hover:scale-105">
              Fale Conosco
            </a>
          </div>
        </div>
        {/* Background shapes for visual interest */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-white opacity-5 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white opacity-5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/2 w-40 h-40 bg-white opacity-5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-900">Nossos Serviços</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Oferecemos uma gama completa de soluções contábeis e financeiras para atender às necessidades da sua empresa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <Building2 className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Abertura e Legalização de Empresas</h3>
              <p className="text-gray-600">Descomplique o processo de iniciar seu negócio. Cuidamos de toda a burocracia para você.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <NotebookPen className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Contabilidade Geral e Fiscal</h3>
              <p className="text-gray-600">Registro, apuração e emissão de todas as obrigações fiscais, garantindo a conformidade e otimização tributária.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <CreditCard className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Imposto de Renda Pessoa Física e Jurídica</h3>
              <p className="text-gray-600">Elaboração e entrega da sua declaração com precisão, evitando multas e otimizando restituições.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Folha de Pagamento e RH</h3>
              <p className="text-gray-600">Gestão completa da folha de pagamento, encargos sociais e obrigações trabalhistas.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <LineChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Consultoria Financeira e Empresarial</h3>
              <p className="text-gray-600">Análise e planejamento estratégico para maximizar lucros e otimizar a saúde financeira da sua empresa.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <Scale className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Planejamento Tributário</h3>
              <p className="text-gray-600">Estratégias para reduzir legalmente sua carga tributária e aumentar a lucratividade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="sobre" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1549923746-c5035540702d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Equipe de Contabilidade" className="rounded-xl shadow-2xl object-cover h-96 w-full" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Sobre Nós</h2>
            <p className="text-lg text-gray-700 mb-6">
              Na Contabilidade Excellence, acreditamos que a boa contabilidade é a base para o sucesso de qualquer negócio. Com anos de experiência no mercado, nossa equipe é composta por profissionais altamente qualificados e dedicados a oferecer soluções contábeis personalizadas e eficientes.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nosso compromisso é com a transparência, a ética e a constante atualização. Utilizamos tecnologia de ponta para otimizar processos e garantir a segurança das suas informações, proporcionando tranquilidade e permitindo que você se concentre no crescimento da sua empresa.
            </p>
            <a href="#contato" className="text-indigo-600 font-semibold hover:underline flex items-center">
              Conheça nossa história <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="vantagens" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-900">Por que nos escolher?</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nossa missão é simplificar a gestão contábil da sua empresa, oferecendo benefícios claros e tangíveis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Handshake className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Atendimento Personalizado</h3>
              <p className="text-gray-600">Cada cliente é único. Oferecemos soluções customizadas para suas necessidades.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Lightbulb className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Consultoria Estratégica</h3>
              <p className="text-gray-600">Vamos além do básico, auxiliando você a tomar decisões financeiras inteligentes.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <CalendarDays className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Prazos e Conformidade</h3>
              <p className="text-gray-600">Garantimos o cumprimento de todas as obrigações dentro do prazo e da legislação.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Briefcase className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Experiência Comprovada</h3>
              <p className="text-gray-600">Anos de atuação no mercado, construindo histórias de sucesso com nossos clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-900">O que dizem nossos clientes</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho. Veja alguns depoimentos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-16 h-16 bg-indigo-100 rounded-br-xl rounded-tl-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-lg italic text-gray-700 mt-8 mb-6">
                &ldquo;A Contabilidade Excellence transformou a gestão fiscal da minha empresa. Equipe atenciosa, eficiente e sempre disposta a ajudar.&rdquo;
              </p>
              <p className="font-semibold text-gray-900">- João Silva</p>
              <p className="text-sm text-gray-500">CEO, Tech Solutions Ltda.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-16 h-16 bg-indigo-100 rounded-br-xl rounded-tl-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-lg italic text-gray-700 mt-8 mb-6">
                &ldquo;Finalmente encontrei um escritório de contabilidade que fala a minha língua. Simples e direto, sem burocracia desnecessária.&rdquo;
              </p>
              <p className="font-semibold text-gray-900">- Maria Oliveira</p>
              <p className="text-sm text-gray-500">Arquiteta Freelancer</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-16 h-16 bg-indigo-100 rounded-br-xl rounded-tl-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-lg italic text-gray-700 mt-8 mb-6">
                &ldquo;O suporte na abertura da minha empresa foi impecável. Todo o processo foi rápido e sem dores de cabeça.&rdquo;
              </p>
              <p className="font-semibold text-gray-900">- Carlos Mendes</p>
              <p className="text-sm text-gray-500">Empreendedor, Loja Virtual X</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Middle */}
      <section id="orcamento" className="bg-indigo-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Pronto para organizar suas finanças?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Não perca tempo com burocracia. Deixe a contabilidade conosco e foque no crescimento do seu negócio.
          </p>
          <a href="#contato" className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
            Solicite seu Orçamento Grátis <ArrowRight className="inline-block ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-900">Entre em Contato</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Tire suas dúvidas, solicite um orçamento ou agende uma reunião. Estamos prontos para te atender!
          </p>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Fale Conosco</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all" placeholder="seu.email@exemplo.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone (opcional)</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all" placeholder="(XX) XXXXX-XXXX" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Sua Mensagem</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all" placeholder="Descreva sua necessidade..."></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors transform hover:scale-105">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-between p-8 bg-gray-50 rounded-xl shadow-md border border-gray-100">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Nossos Dados</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-indigo-600 mr-4 flex-shrink-0" />
                    <p className="text-lg text-gray-700">Rua da Contabilidade, 123 - Centro<br />Cidade, Estado - CEP 12345-678</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-indigo-600 mr-4 flex-shrink-0" />
                    <p className="text-lg text-gray-700">(XX) XXXX-XXXX</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-indigo-600 mr-4 flex-shrink-0" />
                    <p className="text-lg text-gray-700">contato@contabilidadeexcellence.com</p>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="w-6 h-6 text-indigo-600 mr-4 flex-shrink-0" />
                    <p className="text-lg text-gray-700">Seg - Sex: 08:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Siga-nos</h3>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    {/* Placeholder for Facebook icon */}
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19.63,5.65H4.37A2.37,2.37,0,0,0,2,8V18a2.37,2.37,0,0,0,2.37,2.37H19.63A2.37,2.37,0,0,0,22,18V8A2.37,2.37,0,0,0,19.63,5.65ZM18,9.5H16c-1.37,0-2,.63-2,1.37V12h3L16,15H14V20H11V15H9V12h2V10c0-1.63.7-3,3-3h3Z"/></svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    {/* Placeholder for Instagram icon */}
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2a10,10,0,1,0,10,10A10,10,0,0,0,12,2Zm0,16a6,6,0,1,1,6-6A6,6,0,0,1,12,18Zm0-10a2,2,0,1,1-2,2A2,2,0,0,1,12,8Z"/></svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    {/* Placeholder for LinkedIn icon */}
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23,0H1.77A1.77,1.77,0,0,0,0,1.77V22.23A1.77,1.77,0,0,0,1.77,24H22.23A1.77,1.77,0,0,0,24,22.23V1.77A1.77,1.77,0,0,0,22.23,0ZM7.5,20.5H3.5V9.5H7.5ZM5.5,7.75a2.25,2.25,0,1,1,2.25-2.25A2.25,2.25,0,0,1,5.5,7.75ZM20.5,20.5H16.5V14.25c0-1.5-.75-2.75-2.5-2.75A2.75,2.75,0,0,0,11.5,14.25V20.5H7.5V9.5h4V11.25c.5-.75,1.75-1.75,3-1.75,3.25,0,4.5,2.5,4.5,5.25Z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Contabilidade Excellence. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Desenvolvido com <span className="text-red-500">♥</span> e tecnologia.</p>
        </div>
      </footer>
    </div>
  );
}