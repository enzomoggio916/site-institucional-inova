'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Award, Users, Clock, CheckCircle, Target, Instagram, MessageCircle } from 'lucide-react'

export default function Home() {
  const [activeModule, setActiveModule] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const modules = [
    {
      title: 'STANDS',
      description: 'Desenvolvimento de stands personalizados para feiras, exposições e eventos corporativos, unindo design estratégico, funcionalidade e identidade visual para destacar marcas e atrair o público.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop'
    },
    {
      title: 'CENOGRAFIAS',
      description: 'Criação de cenografias impactantes que transformam espaços e reforçam o conceito do evento, proporcionando experiências visuais marcantes e memoráveis.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
    },
    {
      title: 'PALCOS',
      description: 'Projetos de palcos desenvolvidos para diferentes formatos de eventos, com foco em segurança, estética e perfeita integração com o cenário e a proposta do projeto.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop'
    },
    {
      title: 'PROJETOS PERSONALIZADOS',
      description: 'Cada evento é único. Desenvolvemos projetos sob medida, alinhando criatividade, técnica e estratégia para entregar soluções exclusivas, funcionais e totalmente personalizadas.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop'
    },
    {
      title: 'PLANEJAMENTO E EXECUÇÃO',
      description: 'Acompanhamento completo do projeto, desde o briefing inicial até a montagem final, garantindo organização, eficiência, controle de prazos e excelência na execução do evento.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop'
    },
    {
      title: 'SOLUÇÕES COMPLETAS PARA EVENTOS',
      description: 'Atendimento completo para eventos corporativos, feiras, congressos, ativações e produções especiais, integrando cenografia, estrutura e execução em uma única solução.',
      image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop'
    }
  ]

  const benefits = [
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: '25 anos de experiência',
      description: 'Atuação consolidada no mercado de eventos, com conhecimento técnico e criativo adquirido ao longo de duas décadas.'
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Projetos personalizados',
      description: 'Soluções desenvolvidas sob medida, alinhadas ao conceito e às necessidades de cada evento.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: 'Qualidade e profissionalismo',
      description: 'Equipe qualificada e materiais de qualidade para garantir excelência em cada entrega.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Atendimento próximo e consultivo',
      description: 'Acompanhamento dedicado em todas as etapas do projeto, sempre focado na melhor solução.'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Pontualidade e organização',
      description: 'Compromisso com prazos, logística e execução eficiente do início ao fim.'
    }
  ]

  const testimonials = [
    {
      text: 'Profissionalismo, organização e atenção aos detalhes em todo o processo.',
      author: 'Cliente Satisfeito'
    },
    {
      text: 'Equipe experiente e comprometida. O resultado final superou nossas expectativas.',
      author: 'Cliente Satisfeito'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % modules.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + modules.length) % modules.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Botão Flutuante WhatsApp */}
      <a
        href="https://wa.me/5511915625768"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* 1. HERO SECTION */}
      <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-950 opacity-90"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
            Inova Cenários
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 font-light">
            Transformando eventos em experiências memoráveis há 25 anos
          </p>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Há mais de duas décadas desenvolvendo cenários personalizados, estruturas criativas e soluções completas para eventos que marcam pessoas e fortalecem marcas.
          </p>
          <a
            href="https://wa.me/5511915625768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Solicite seu orçamento
          </a>
        </div>
      </section>

      {/* 2. QUEM SOMOS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900">
            Quem Somos
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A Inova Cenários é uma empresa especializada na criação e execução de cenários para eventos, com 25 anos de atuação no mercado. Nossa trajetória é construída sobre pilares sólidos de qualidade, inovação e comprometimento com cada projeto realizado.
            </p>
            <p>
              Ao longo desses anos, atendemos diferentes formatos de eventos, sempre com foco em desenvolver ambientes que unem estética, funcionalidade e identidade visual. Nossa equipe acompanha todas as etapas do processo — do planejamento à montagem final — garantindo organização, eficiência e excelência na entrega.
            </p>
            <p>
              Cada evento é tratado como único, com soluções personalizadas que respeitam o conceito, o público e os objetivos de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* 3. POR QUE ESCOLHER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
            Por que escolher a Inova Cenários
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CARROSSEL DE PROJETOS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            Nossos Projetos e Soluções
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Conheça algumas das áreas em que a Inova Cenários atua, desenvolvendo cenários e estruturas que transformam ideias em experiências reais.
          </p>

          {/* Carrossel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {modules.map((module, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div
                      className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group"
                      onClick={() => setActiveModule(index)}
                    >
                      <img
                        src={module.image}
                        alt={module.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-8">
              {modules.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Modal de Detalhes */}
          {activeModule !== null && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setActiveModule(null)}
            >
              <div
                className="bg-white text-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={modules[activeModule].image}
                  alt={modules[activeModule].title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-3xl font-bold mb-4 text-blue-600">
                  {modules[activeModule].title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {modules[activeModule].description}
                </p>
                <button
                  onClick={() => setActiveModule(null)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. INSTAGRAM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Veja mais projetos no nosso Instagram
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Acompanhe nossos eventos, bastidores e projetos realizados ao longo da nossa trajetória.
          </p>
          <a
            href="https://www.instagram.com/inovacenarioseventos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Instagram className="w-6 h-6" />
            Acessar Instagram
          </a>
        </div>
      </section>

      {/* 6. DEPOIMENTOS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600"
              >
                <p className="text-xl text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="text-gray-500 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Agradecemos seu interesse
          </h2>
          <p className="text-xl text-gray-300">
            Será um prazer transformar seu evento em uma experiência única e memorável. Entre em contato e solicite seu orçamento.
          </p>
          <a
            href="https://wa.me/5511915625768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Faça agora seu orçamento
          </a>
        </div>
      </section>

      {/* 8. RODAPÉ */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-300">
            Inova Cenários — há 25 anos criando cenários que valorizam eventos e conectam pessoas.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://www.instagram.com/inovacenarioseventos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <span className="text-gray-400">@inovacenarioseventos</span>
          </div>
          <p className="text-sm text-gray-500">
            © Inova Cenários – Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
