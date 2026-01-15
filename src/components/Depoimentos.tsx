'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Depoimentos() {
  const testimonials = [
    "Profissionalismo, organização e atenção aos detalhes em todo o processo.",
    "Equipe experiente e comprometida. O resultado final superou nossas expectativas."
  ]

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">O que nossos clientes dizem</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic">"{testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}