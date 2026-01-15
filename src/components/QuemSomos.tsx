'use client'

import { motion } from 'framer-motion'

export default function QuemSomos() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-dark">Quem Somos</h2>
          <div className="text-lg leading-relaxed text-gray-700 space-y-6">
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
        </motion.div>
      </div>
    </section>
  )
}