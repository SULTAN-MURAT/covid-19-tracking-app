import React from 'react'
import banner from "../assets/banner.jpeg";

function Header() {
  return (
    <header className='header'>
        <img src={banner} alt="banner covid-19" className='header-banner' />
        <h3>Global and Country Based Cases of Covid-19</h3>
        <h4>(For a Particular country, select a Country from below)</h4>
    </header>
  )
}

export default Header ;