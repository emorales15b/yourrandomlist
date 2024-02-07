'use client'
import dynamic from 'next/dynamic'

const LazyFormContent = dynamic(() => import('../components/FormContent'))

export default function Home() {

  return (
    <main className="md:h-screen bg-[#262054]">
      <LazyFormContent />
    </main>
  )
}
