import AllServices from '@/components/all-services'
import NavbarHeader from '@/components/navabar-header'
import React from 'react'

const ServicesPage = () => {
  return (
    <div>
      <NavbarHeader/>

      {/* Hero Section */}
      <main>
        <AllServices />
      </main>
      
    </div>
  )
}

export default ServicesPage
