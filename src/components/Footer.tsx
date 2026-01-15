'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Inova Cenários</h3>
          <p className="text-gray-300 mb-6">
            há 25 anos criando cenários que valorizam eventos e conectam pessoas.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.instagram.com/inovacenarioseventos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © Inova Cenários – Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}