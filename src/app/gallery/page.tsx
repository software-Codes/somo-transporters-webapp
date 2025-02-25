import Footer from '@/components/footer'
import GalleryMainComponent from '@/components/gallery-main-components'
import NavbarHeader from '@/components/navabar-header'
import React from 'react'

const GalleryPage = () => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-white'>
      <NavbarHeader />
      {/* main*/}
      <main>
        <GalleryMainComponent/>

      </main>

      <Footer />
    </div>
  )
}

export default GalleryPage
