'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AgradecimentoCTA() {
  return (
    <section className="py-20 bg-dark text-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Agradecemos seu interesse</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Será um prazer transformar seu evento em uma experiência única e memorável. Entre em contato e solicite seu orçamento.
          </p>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            href="https://wa.me/5511915625768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Faça agora seu orçamento
            <ArrowRight className="ml-2" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}