import React from 'react'
import {Footer, Blog, Possobility, Features, WhatGPT3, Header} from './containers'
import {Cta, Brand, NavBar} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>

      <div className='gradient__bg'>
          <NavBar />
          <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possobility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
