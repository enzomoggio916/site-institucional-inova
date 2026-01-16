'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
href="https://wa.me/5511915625768?text=Olá%20!%20Vim%20pelo%20site%20da%20Inova%20Cenários%20e%20gostaria%20de%20solicitar%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
