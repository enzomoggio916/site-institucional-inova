'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const modules = [
  {
    title: 'STANDS',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
    content: 'Desenvolvimento de stands personalizados para feiras, exposições e eventos corporativos, unindo design estratégico, funcionalidade e identidade visual para destacar marcas e atrair o público.'
  },
  {
    title: 'CENOGRAFIAS',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
    content: 'Criação de cenografias impactantes que transformam espaços e reforçam o conceito do evento, proporcionando experiências visuais marcantes e memoráveis.'
  },
  {
    title: 'PALCOS',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    content: 'Projetos de palcos desenvolvidos para diferentes formatos de eventos, com foco em segurança, estética e perfeita integração com o cenário e a proposta do projeto.'
  },
  {
    title: 'PROJETOS PERSONALIZADOS',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    content: 'Cada evento é único. Desenvolvemos projetos sob medida, alinhando criatividade, técnica e estratégia para entregar soluções exclusivas, funcionais e totalmente personalizadas.'
  },
  {
    title: 'PLANEJAMENTO E EXECUÇÃO',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
    content: 'Acompanhamento completo do projeto, desde o briefing inicial até a montagem final, garantindo organização, eficiência, controle de prazos e excelência na execução do evento.'
  },
  {
    title: 'SOLUÇÕES COMPLETAS PARA EVENTOS',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
    content: 'Atendimento completo para eventos corporativos, feiras, congressos, ativações e produções especiais, integrando cenografia, estrutura e execução em uma única solução.'
  }
]

export default function ModulosEventos() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null)

  return (
    <section className="py-20 bg-dark text-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos Projetos e Soluções</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça algumas das áreas em que a Inova Cenários atua, desenvolvendo cenários e estruturas que transformam ideias em experiências reais.
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative w-80 h-60 cursor-pointer group"
                onClick={() => setSelectedModule(index)}
              >
                <Image
                  src={module.image}
                  alt={module.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {module.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {selectedModule !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedModule(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white text-dark p-8 rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4 text-primary">{modules[selectedModule].title}</h3>
              <p className="text-lg leading-relaxed">{modules[selectedModule].content}</p>
              <button
                className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => setSelectedModule(null)}
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}