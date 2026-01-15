'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function InstagramSection() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">Veja mais projetos no nosso Instagram</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Acompanhe nossos eventos, bastidores e projetos realizados ao longo da nossa trajetória.
          </p>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/inovacenarioseventos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            <Instagram className="mr-2" size={24} />
            Acessar Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}