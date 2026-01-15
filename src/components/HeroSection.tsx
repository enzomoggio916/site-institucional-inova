'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-dark text-light flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Inova Cenários
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl mb-8 text-gray-300"
        >
          Transformando eventos em experiências memoráveis há 25 anos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-400"
        >
          Há mais de duas décadas desenvolvendo cenários personalizados, estruturas criativas e soluções completas para eventos que marcam pessoas e fortalecem marcas.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          href="https://wa.me/5511915625768"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
        >
          Solicite seu orçamento
          <ArrowRight className="ml-2" size={20} />
        </motion.a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
    </section>
  )
}