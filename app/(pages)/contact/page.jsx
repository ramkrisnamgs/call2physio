import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Address from './components/Address'
import ContactForm from './components/ContactForm'

const page = () => {
  return (
    <div>
      <Header />


      {/* Breadcrumb */}
      <div
        className="flex flex-col items-center justify-center text-white h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/service1.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-[#003A70] opacity-80">
          <h1 className="text-2xl font-bold text-center">Contact Us</h1>
          <nav className="flex items-center justify-center text-sm space-x-2">
            <Link
              href="/"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </div>

      <Address />
      <ContactForm />

      <Footer />
    </div>
  )
}

export default page