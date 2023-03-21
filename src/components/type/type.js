import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export default function Type() {
    const [text] = useTypewriter({
        words: ['RASOLONIRINA', 'Toky Niaina'],
        loop: 0
      })
  return (
    <div className='sol'>soratra
    <h1>
    <span>{text}</span>
        
        
      </h1>
    </div>
  )
}

