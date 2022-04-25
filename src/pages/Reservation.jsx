import React, { useState } from 'react'

import MouseContextProvider from '../context/mouseContext'
import TextCursor from '../components/TextCursor'
import { useNavigate } from 'react-router-dom'

function Reservation() {
  const [mous, setMous] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    people: 2,
    date: '',
    time: '',
    room: '',
  })

  // eslint-disable-next-line no-unused-vars
  const { name, people } = formData

  const navigate = useNavigate()

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <MouseContextProvider>
      <div className="absolutePage">
        <form
          onSubmit={onSubmit}
          className="floatingForm"
          onMouseOver={() => setMous(true)}
          onMouseOut={() => setMous(false)}
        >
          <h2 className="h2">Reservation</h2>
          <label htmlFor="date" className="label">
            Name
            <input
              type="text"
              value={name}
              id="name"
              name="name"
              placeholder="Please enter your name"
              onChange={onMutate}
              required
            />
          </label>
          <div className="d-flex wrap">
            <label htmlFor="date" className="label">
              Date
              <input
                type="date"
                name="date"
                id="date"
                onChange={onMutate}
                min={new Date().toLocaleDateString('sv-SE')}
                defaultValue={new Date().toLocaleDateString('sv-SE')}
                required
              />
            </label>
            <label htmlFor="time" className="label">
              Time
              <input
                type="time"
                name="time"
                id="time"
                onChange={onMutate}
                min="08:00"
                max="21:00"
                required
              />
            </label>
            <label htmlFor="people" className="label">
              People
              <input
                type="number"
                name="people"
                id="people"
                onChange={onMutate}
                value={people}
                required
              />
            </label>
          </div>
          <label htmlFor="hall" className="label">
            hall
            <select name="hall" id="hall">
              <option value="banqueting hall">Banqueting hall</option>
              <option value="banqueting hall">Lounge bar</option>
              <option value="banqueting hall">Roof teracce</option>
            </select>
          </label>

          <button type="submit" className="btn-roll">
            Reserve your table
          </button>
        </form>
        {!mous && <TextCursor text="close" />}
      </div>
    </MouseContextProvider>
  )
}

export default Reservation
