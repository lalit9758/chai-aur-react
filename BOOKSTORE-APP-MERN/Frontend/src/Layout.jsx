import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import {SnackbarProvider} from 'notistack';

function Layout() {
  return (
    <>
    <SnackbarProvider>
    <Header/>
    <Outlet/>
    <Footer/>
    </SnackbarProvider>
    
    </>
  )
}

export default Layout