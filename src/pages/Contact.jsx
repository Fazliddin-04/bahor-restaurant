import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MouseContextProvider from '../context/mouseContext'
import TextCursor from '../components/TextCursor'

function Contact() {
  const [mous, setMous] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: '',
    subject: '',
  })
  const { name, email, msg, subject } = formData
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
      <div
        className="absolutePage"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560053608-13721e0d69e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
        }}
      >
        <form
          onSubmit={onSubmit}
          className="floatingForm"
          onMouseOver={() => setMous(true)}
          onMouseOut={() => setMous(false)}
        >
          <h2 className="h2">Contact Us</h2>
          <label htmlFor="date" className="label" style={{ marginTop: 50 }}>
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
          <label htmlFor="email" className="label" style={{ marginTop: 0 }}>
            email
            <input
              type="email"
              placeholder="Please enter your email"
              id="email"
              name="email"
              value={email}
              onChange={onMutate}
            />
          </label>
          <label htmlFor="subject" className="label" style={{ marginTop: 0 }}>
            subject
            <select
              name="subject"
              id="subject"
              value={subject}
              onChange={onMutate}
            >
              <option value="General inquiry">General inquiry</option>
              <option value="Press inquiry">Press inquiry</option>
            </select>
          </label>
          <label
            htmlFor="subject"
            className="label"
            style={{ height: 100, marginTop: 0 }}
          >
            Your message
            <textarea
              id="msg"
              value={msg}
              onChange={onMutate}
              style={{ paddingTop: 10 }}
              placeholder="Type something. . . "
            ></textarea>
          </label>
          <button type="submit" className="btn-roll">
            Reserve your table
          </button>
        </form>
        {!mous && <TextCursor text="close" />}
      </div>
    </MouseContextProvider>
    // <div className="container text-center pageContainer">
    //   <h2>Biz Bilan Bog'laning</h2>
    //   <div className="d-flex contacts">
    //     <div className="d-flex">
    //       <a href="tel:+998992385000" className="btn">
    //         (99) 238-5000
    //       </a>
    //       <a href="tel:+998972261818" className="btn">
    //         (97) 226-1818
    //       </a>
    //     </div>
    //     <a href="#!" className="btn">
    //       <FaTelegram size="22px" />
    //       Telegram orqali bog'laning
    //     </a>
    //   </div>
    //   <br />
    //   <p>
    //     Marhamat, bizga xabar yuboring. Sizdan xabar kutib qolamiz <br /> va
    //     imkon qadar tezroq bog'lanamiz
    //   </p>
    //   <form className="form-control">
    //     <input
    //       type="text"
    //       className="nameInput"
    //       placeholder="Ism-sharif"
    //       id="name"
    //       value={name}
    //       onChange={onChange}
    //     />
    //
    //     <input
    //       type="text"
    //       className="telInput"
    //       placeholder="Telefon raqam"
    //       id="phoneNumber"
    //       value={phoneNumber}
    //       ref={phoneNumberRef}
    //       onChange={onChange}
    //     />
    //     <select name="subject" id="subject">
    //       <option value="Mavzuni tanlang">
    //         Mavzuni tanlang
    //       </option>
    //       <option value="Umumiy" defaultChecked>
    //         Umumiy so'rov
    //       </option>
    //       <option value="matbuot" defaultChecked>
    //         Matbuot so'rovi
    //       </option>
    //     </select>
    //

    //     <button className="btn btn-block">Yuborish</button>
    //   </form>
    // </div>
  )
}

export default Contact
