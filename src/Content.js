import React from 'react'
import { useState } from 'react'

const Content = () => {
  const [name, setName] = useState('Developer')

  function changeNames() {
    const names = ['Developer', 'Designer', 'Programer', 'Coder']
    const int = Math.floor(Math.random() * 4)

    setName(names[int])
  }

  return (
    <main>
      <p>Hi {name}!</p>
      <button onClick={changeNames}> Subscribe </button>
    </main>
  )
}

export default Content
