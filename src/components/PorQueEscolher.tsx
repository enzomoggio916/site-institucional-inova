'use client'

import { motion } from 'framer-motion'
import { Award, Users, Star, Clock, CheckCircle } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: '25 anos de experiência',
    description: 'Atuação consolidada no mercado de eventos, com conhecimento técnico e criativo adquirido ao longo de duas décadas.'
  },
  {
    icon: Users,
    title: 'Projetos personalizados',
    description: 'Soluções desenvolvidas sob medida, alinhadas ao conceito e às necessidades de cada evento.'
  },
  {
    icon: Star,
    title: 'Qualidade e profissionalismo',
    description: 'Equipe qualificada e materiais de qualidade para garantir excelência em cada entrega.'
  },
  {
    icon: CheckCircle,
    title: 'Atendimento próximo e consultivo',
    description: 'Acompanhamento dedicado em todas as etapas do projeto, sempre focado na melhor solução.'
  },
  {
    icon: Clock,
    title: 'Pontualidade e organização',
    description: 'Compromisso com prazos, logística e execução eficiente do início ao fim.'
  }
]

export default function PorQueEscolher() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-dark"
        >
          Por que escolher a Inova Cenários
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <reason.icon className="text-primary mr-4" size={40} />
                <h3 className="text-xl font-semibold text-dark">{reason.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}