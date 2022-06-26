import React, { useState, useEffect } from 'react'
import { useLocation, Route, Routes } from 'react-router-dom'

// pages
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import HoursNLocation from '../pages/HoursNLocation'
import Menu from '../pages/Menu'
import Reservation from '../pages/Reservation'
import Loading from './Loading'

function Content() {
  const location = useLocation()

  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')
  const [playAnimation, setPlayAnimation] = useState(false)

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setPlayAnimation(true)
      }, 5000)
    }

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut')
  }, [location, displayLocation])

  if (!playAnimation) {
    return <Loading />
  }

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
