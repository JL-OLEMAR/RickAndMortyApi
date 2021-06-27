import React from 'react'

export default function Header ({ title }) {
  return (
    <header>
      <div className="container">
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="text">This project illustrates the characters from the famous Rick and Morty series</p>
        </div>
      </div>
    </header>
  )
}
