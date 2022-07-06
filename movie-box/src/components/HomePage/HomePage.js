import React from 'react'
import Navbar from '../Navbar/Navbar'
import './HomePage.css'
import Banner from '../Banner/Banner'

function HomePage() {
  return (
    <div>
        <Navbar showSignInButton={false} logout={true} />
        <Banner />
    </div>
  )
}

export default HomePage