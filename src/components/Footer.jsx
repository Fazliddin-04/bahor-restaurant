import React from 'react'
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <a href="h" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="h" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="h" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
        </div>
        <a href="https://google.com">Created with ❤️ by JFI Media</a>
      </div>
    </>
  )
}

export default Footer
