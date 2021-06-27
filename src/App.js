import React from 'react'

import Header from './components/Header'
import Character from './components/Character'
import './main.sass'

export default function App () {
  return (
    <>
      <Header className="header" title="Rick and Morty API" />
      <Character />
    </>
  )
}
