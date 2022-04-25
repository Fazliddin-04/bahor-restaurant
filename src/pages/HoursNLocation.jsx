import React from 'react'

function HoursNLocation() {
  return (
    <div className='d-flex justify-between wrap align-center'>
      <div className="text-center hours-n-location pageContainer">
        <h2>lifestyle</h2>
        <p>
          <strong>
            Every Day
            <br />
            8:00 - 22:00
          </strong>
        </p>
        <p>
          <u>
            <a href="#!">77 Mustaqillik, Shurchi</a>
            <br />
            <a href="#!">Surkhandaria, Uzbekistan</a>
            <br />
            <br />
            <a href="tel:+998992385000">(99) 238-5000 </a>
            <br />
            <a href="tel:+998972261818"> (97) 226-1818</a>
          </u>
        </p>
      </div>
      <iframe
        title="xarita"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.742504238782!2d67.78676010073438!3d37.993754809148264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b56928c0506047%3A0x903c6b3f4dab62b6!2zQkFIT1Ig0YDQtdGB0YLQvtGA0LDQvdC4!5e0!3m2!1suz!2s!4v1647173485788!5m2!1suz!2s"
        height="650"
        className="map"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default HoursNLocation
