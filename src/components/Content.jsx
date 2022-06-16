import React, { useState, useEffect } from 'react'
import { useLocation, Route, Routes } from 'react-router-dom'

// pages
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import HoursNLocation from '../pages/HoursNLocation'
import Menu from '../pages/Menu'
import Reservation from '../pages/Reservation'

function Content() {
  const location = useLocation()

  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut')
  }, [location, displayLocation])



  return (
    <div
      className={`content ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn')
          setDisplayLocation(location)
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/lifestyle" element={<HoursNLocation />} />
      </Routes>
    </div>
  )
}

export default Content
