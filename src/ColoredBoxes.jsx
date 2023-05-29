import ColoredBox from './ColoredBox'
import './ColoredBoxes.css'

export default function ColoredBoxes() {
  const boxArray = []
  for (let i = 0; i < 25; i++) {
    boxArray.push(<ColoredBox key={i} />)
  }

  return <div className='ColoredBoxes'>{boxArray}</div>
}
