import ContactUsMainComponent from '@/components/contact-us-page'
import Footer from '@/components/footer'
import NavbarHeader from '@/components/navabar-header'
import React from 'react'

const Contactpage = () => {
  return (
    <div  className='flex flex-col min-h-screen w-full bg-white'>
      <NavbarHeader />
      {/* main*/}
      <main>
        <ContactUsMainComponent/>

      </main>

      <Footer />

      
    </div>
  )
}

export default Contactpage
