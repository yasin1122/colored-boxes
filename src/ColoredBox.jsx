import './ColoredBox.css'
import { useState } from 'react'

const randomRGB = () => {
  const r = Math.floor(Math.random() * 256) + 1
  const g = Math.floor(Math.random() * 256) + 1
  const b = Math.floor(Math.random() * 256) + 1
  return `rgb(${r}, ${g}, ${b})`
}

export default function ColoredBox() {
  const [color, setColor] = useState(randomRGB)
  return (
    <div
      className='ColoredBox'
      onClick={() => setColor(randomRGB())}
      style={{ backgroundColor: color }}></div>
  )
}
