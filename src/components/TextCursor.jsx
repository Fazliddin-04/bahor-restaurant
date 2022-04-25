import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFixedMousePosition from '../hooks/useFixedMousePosition'

const TextCursor = ({ text}) => {
  const navigate = useNavigate()
  const { x, y } = useFixedMousePosition()
  return (
    <div
      style={{ left: x, top: y }}
      className={`cursorRoll`}
      onClick={() => {
        text === 'close' && navigate('/')
      }}
    >
      {text}
    </div>
  )
}

export default TextCursor
