import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [showDrawer, setShowDrawer] = useState('close')
  const [disabledLinks, setDisabledLinks] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(0)
  const [playAnimation, setPlayAnimation] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setPlayAnimation(true)
      }, 3500)
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
  const closeNavList = () => {
    setShowDrawer('closing')

    setTimeout(() => {
      setShowDrawer('close')
    }, 1200)
  }

  if (!playAnimation) {
    return <></>
  }

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div>
            <div
              className={`hamburger ${showDrawer === 'open' && 'active'}`}
              onClick={() =>
                showDrawer === 'open'
                  ? setShowDrawer('closing')
                  : setShowDrawer('open')
              }
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div>
            <span
              className="logo"
              onClick={() => {
                location.pathname !== '/' && navigate('/')
              }}
            >
              Bahor
            </span>
          </div>
          <div>
            <Link to="/reservation">Reservation</Link>
          </div>
        </div>
      </div>
      <div
        className={`drawer-side ${
          showDrawer === 'open'
            ? 'active'
            : showDrawer === 'closing'
            ? 'closing'
            : ''
        }`}
      >
        <ul className="drawer-list">
          <div className="container">
            <li
              className={`nav-link ${
                disabledLinks && hoveredLink !== 1
                  ? 'disabled'
                  : hoveredLink === 1
                  ? 'hover'
                  : ''
              }`}
              onClick={() => {
                location.pathname !== '/' && navigate('/')
                closeNavList()
              }}
              onMouseOver={(e) => {
                setDisabledLinks(true)
                setHoveredLink(1)
                e.target.classList.add('hover')
              }}
              onMouseOut={(e) => {
                setDisabledLinks(false)
                setHoveredLink(0)
                e.target.classList.remove('hover')
              }}
            >
              <span>01</span>
              Home
            </li>
            <li
              className={`nav-link ${
                disabledLinks && hoveredLink !== 2
                  ? 'disabled'
                  : hoveredLink === 2
                  ? 'hover'
                  : ''
              }`}
              onClick={() => {
                location.pathname !== '/menu' && navigate('/menu')
                closeNavList()
              }}
              onMouseOver={(e) => {
                setDisabledLinks(true)
                setHoveredLink(2)
                e.target.classList.add('hover')
              }}
              onMouseOut={(e) => {
                setDisabledLinks(false)
                setHoveredLink(0)
                e.target.classList.remove('hover')
              }}
            >
              <span>02</span>
              Take away
            </li>
            <li
              className={`nav-link ${
                disabledLinks && hoveredLink !== 3
                  ? 'disabled'
                  : hoveredLink === 3
                  ? 'hover'
                  : ''
              }`}
              onClick={() => {
                location.pathname !== '/lifestyle' && navigate('/lifestyle')
                closeNavList()
              }}
              onMouseOver={(e) => {
                e.target.classList.add('hover')
                setHoveredLink(3)
                setDisabledLinks(true)
              }}
              onMouseOut={(e) => {
                setDisabledLinks(false)
                setHoveredLink(0)
                e.target.classList.remove('hover')
              }}
            >
              <span>03</span>
              lifestyle
            </li>
            <li
              className={`nav-link ${
                disabledLinks && hoveredLink !== 4
                  ? 'disabled'
                  : hoveredLink === 4
                  ? 'hover'
                  : ''
              }`}
              onClick={() => {
                location.pathname !== '/contact' && navigate('/contact')
                closeNavList()
              }}
              onMouseOver={(e) => {
                setDisabledLinks(true)
                setHoveredLink(4)
                e.target.classList.add('hover')
              }}
              onMouseOut={(e) => {
                setDisabledLinks(false)
                setHoveredLink(0)
                e.target.classList.remove('hover')
              }}
            >
              <span>04</span>
              Contacts
            </li>
          </div>
        </ul>
        <Link
          to="/reservation"
          className="btn-roll white"
          onClick={() => {
            closeNavList()
          }}
        >
          Reserve your table
        </Link>
      </div>
    </>
  )
}

export default Navbar
