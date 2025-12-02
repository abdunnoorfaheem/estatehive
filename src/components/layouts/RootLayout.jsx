import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import TopHeader from './TopHeader'

const RootLayout = () => {
  return (
    <>
    <TopHeader/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout
