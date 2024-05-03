import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Upcomshows from './components/upcomming/Upcomshows'

const Welcome = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Upcomshows />
    </>
  )
}

export default Welcome