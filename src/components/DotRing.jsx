import React, { useEffect, useRef } from 'react'
import useMousePosition from '../hooks/useFixedMousePosition'

const DotRing = ({ playOrPause }) => {
  const refItem = useRef()
  useEffect(() => {
    refItem.current.innerHTML = refItem.current.textContent.replace(
      /\S/g,
      '<span>$&</span>'
    )

    const element = refItem.current.querySelectorAll('span')
    for (let i = 0; i < element.length; i++) {
      element[i].style.transform = `rotate(${i * 12}deg)`
    }
  }, [])

  const { x, y } = useMousePosition()
  return (
    <>
      <div
        ref={refItem}
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
      >
      watch - video ---- watch - video ----
      </div>
      <div
        className={`dot ${playOrPause && 'play'}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  )
}

export default DotRing
