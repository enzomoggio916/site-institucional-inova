'use client'

import { MessageCircle, Instagram, Award, Users, Star, Clock } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import QuemSomos from '@/components/QuemSomos'
import PorQueEscolher from '@/components/PorQueEscolher'
import ModulosEventos from '@/components/ModulosEventos'
import InstagramSection from '@/components/InstagramSection'
import Depoimentos from '@/components/Depoimentos'
import AgradecimentoCTA from '@/components/AgradecimentoCTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <QuemSomos />
      <PorQueEscolher />
      <ModulosEventos />
      <InstagramSection />
      <Depoimentos />
      <AgradecimentoCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}