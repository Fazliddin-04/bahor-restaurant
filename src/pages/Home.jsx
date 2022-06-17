import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

// import required modules
import { EffectFade, Navigation } from 'swiper'

import MouseContextProvider from '../context/mouseContext'
import DotRing from '../components/DotRing'
import LazyShow from '../components/LazyShow'
import TextCursor from '../components/TextCursor'

function Home() {
  const [play, setPlay] = useState(true)
  const ref = useRef(null)

  const playVideo = () => {
    if (!play) {
      ref.current.play()
      setPlay(true)
    }
    if (play) {
      ref.current.pause()
      setPlay(false)
    }
  }

  return (
    <MouseContextProvider>
      <div className="container">
        <section className="intro">
          <h1 className="animated">
            <span style={{ animationDelay: '1.1s' }}>B</span>
            <span style={{ animationDelay: '1.2s' }}>
              <em>a</em>
            </span>
            <span style={{ animationDelay: '1.3s' }}>h</span>
            <span style={{ animationDelay: '1.4s' }}>
              <em>o</em>
            </span>
            <span style={{ animationDelay: '1.5s' }}>r</span>

            <br />
            <span className="word-2">
              <Link to="/reservation" className="btn-roll">
                <p>
                  reserve <br /> your table
                </p>
              </Link>
              <div className="break"></div>
              <div>
                <span style={{ animationDelay: '1.1s' }}>r</span>
                <span style={{ animationDelay: '1.2s' }}>e</span>
                <span style={{ animationDelay: '1.3s' }}>s</span>
                <span style={{ animationDelay: '1.5s' }}>t</span>
                <span style={{ animationDelay: '1.6s' }}>
                  <em>a</em>
                </span>
                <span style={{ animationDelay: '1.7s' }}>u</span>
                <span style={{ animationDelay: '1.8s' }}>r</span>
                <span style={{ animationDelay: '1.9s' }}>
                  <em>a</em>
                </span>
                <span style={{ animationDelay: '2s' }}>n</span>
                <span style={{ animationDelay: '2.1s' }}>t</span>
              </div>
            </span>
          </h1>
        </section>
        <LazyShow>
          <section className="about">
            <div className="img"></div>
            <div className="about-main">
              <h2>About us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                blanditiis, veritatis aliquam, fuga, inventore sunt labore amet
                dolorem voluptatem illum minima aspernatur corrupti quibusdam!
                Deleniti ipsum nisi asperiores. Dolor, tempora!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam id fugit vero incidunt dolor quaerat commodi harum ex
                rem voluptatem, amet nemo molestias repellat iure eligendi
                obcaecati ipsa, quod nesciunt!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium officiis tempore voluptate porro! Suscipit neque
                quod.
              </p>
            </div>
            <div className="about-descr">
              <div className="esthetic"></div>
              <p className="img-subtitle">
                Estetika bilan
                <br />
                taom ham lazzatli
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                facere blanditiis ea cupiditate distinctio dicta corrupti. Alias
                nesciunt consequatur cumque eos, dicta corporis nulla quo
                praesentium voluptates libero ab non?
              </p>
            </div>
          </section>
        </LazyShow>
      </div>
      <section className="slider">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          loop={true}
          modules={[EffectFade, Navigation]}
          className="mySwiper"
          effect={'fade'}
        >
          <TextCursor />
          <SwiperSlide
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
            }}
          >
            <svg
              id="eHirVmb4dRY1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 600"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              className="svg"
            >
              <path
                d="M157.69721,302.96008c-5.495,27.47499-8.28341,55.08599-13.66896,82.01379"
                fill="none"
                stroke="#9c643d"
                strokeWidth="4"
                strokeDasharray="83.153725"
                className="path"
              />
              <path
                d="M119.42411,323.46352c-21.09561,52.73903,73.45137,24.57184,94.31585-32.80552c1.59826-4.39522,5.12038-11.531143,1.3669-16.40276-14.008678-18.181769-106.310561,1.754959-129.855165,15.16572C45.09474,312.293943,25.35654,368.5711,77.05032,368.5711"
                fill="none"
                stroke="#9c643d"
                strokeWidth="4"
                className="path"
                strokeDasharray="412.03"
              />
              <path
                d="M216.47375,356.26904c-6.48402,1.08067-13.179656,3.117159-7.056386,12.302059c6.55754,9.8363,15.528926,8.223621,16.624666-2.733779.56807-5.68072-14.362352-12.668303-9.56828-9.56828c2.951171,1.908336,10.607859,5.194732,9.56828,8.20138-4.042294,11.691038,12.676758,10.702132,25.520219,8.20138c8.197749-1.596185,14.125893-30.297526,18.663645-20.50345c1.85653,4.007048,17.409281,4.772292,18.735602,0c1.049201-3.775173-10.816631,28.378411,23.666022,20.50345c33.78461-7.715546,14.016119-38.090595,20.032442-58.77655.648819-2.230839-.23118,8.623419,0,10.935169c1.391,13.91004,0,5.528495,0,19.136555c0,17.56471-1.263229,35.398023,13.66896,33.593576c9.089259-1.098371,30.386157-8.861732,28.093212-18.55771-.53467-2.260913-.012827,4.51123,0,6.83448.019825,3.590622-6.870242,20.663485,14.280578,11.72323c16.080967-6.797275,32.460248-7.560165,30.311967-4.88875"
                transform="translate(0 0.000001)"
                fill="none"
                stroke="#9c643d"
                strokeWidth="4"
                strokeDasharray="447.473697"
                className="path"
              />
              <path
                d="M435.1772,377.56055c5.563214,2.891282,9.85281,24.017114,0,44.62134-5.720773,11.963297-25.847411,25.223892-34.780151,9.910612-1.74843-2.99731-1.97515-13.502811,0-16.355811c5.80633-8.38692,69.300468-24.761072,87.305708-30.762822"
                transform="translate(-16.048319-5.376813)"
                fill="none"
                stroke="#9c643d"
                strokeWidth="4"
                strokeDasharray="200.859221"
                className="path"
              />
              <path
                d="M303.95513,335.76559c32.88054,0,54.30378-15.78158,84.74758-21.87034"
                fill="none"
                stroke="#9c643d"
                strokeWidth="4"
                strokeDasharray="87.942795"
                className="path"
              />
            </svg>
            Bonqueting Hall
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1596463989140-3b600dab72e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
            }}
          >
            <svg
              id="ed8Xqyv4gFn1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 600"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              className="svg"
            >
              <path
                d="M345.19792,302.04339c-58.71548-19.57182-153.87839-17.61549-206.06456,15.00087-27.91571,17.44732-60.67138,54.0215-30.79125,87.63665c23.76006,26.73007,76.657616,17.743335,106.803597,11.05327c18.319421-4.065488,30.131322-10.032876,32.151813-11.05327c30.285058-15.294646,54.179014-40.00045,37.89693-33.452212-1.423715.572582-8.448155,11.050102-9.533245,12.135192-1.60082,1.60082-8.322516,12.294999-9.527856,14.21135-4.686802,7.451471-5.359755,11.490457-14.888229,21.31702-1.068256,1.101676-2.86251,1.08509-3.9476,0-1.05269-1.05269,2.314765-4.04874,3.42961-5.035385c5.452139-4.825176,36.424819-25.379506,34.46732-5.228365-.311019,3.201736-2.68776,8.61747,0,11.84279c6.32539,7.59047,57.55075-25.18046,63.95107-31.58077.18861-.18861,4.045294-6.57147,5.090124-5.52664.22128.22128-18.844444,20.4255-9.037724,21.31702c26.40115,2.4001,66.484991-46.633599,85.794321-62.081059c5.48367-4.38693,29.789569-30.689907,24.804508-40.556461-4.46629-8.83979-30.916654,8.879682-35.828734,15.00087-13.529402,16.859662-40.551274,42.52035-30.775964,71.84627c3.43646,10.30936,13.799489,12.82316,20.746459,10.26375c43.30398-15.9541,82.015252-30.528049,112.90127-65.53011c10.048821-11.387983,9.243442-8.782288,19.313406-21.800283.805115-1.040817,7.019268-15.359389,6.430798-16.536339-5.32313-10.64626-25.526758,3.780559-29.691804,6.755842-15.576976,11.127347-15.63816,12.699487-26.348011,23.68559-35.351174,36.263029-37.393959,89.50589,26.348011,57.63491c13.32357-6.66179,22.54481-13.99821,37.1074-18.15895"
                transform="translate(-26.702354 11.042267)"
                fill="none"
                stroke="#9c643d"
                strokeWidth="4"
                className="path chill"
              />
            </svg>
            Lounge Bar
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1621275471769-e6aa344546d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80)`,
            }}
          >
            <svg
              id="eeQlDxYT8bF1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 600"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              width="600"
              height="600"
              className="svg"
            >
              <path
                d="M105.95602,298.81579c-6.27813,27.20521-11.5326,71.29873-46.72471,72.97455-4.981.23719-10.90394-.99771-14.17491-5.24997-34.31781-44.61315,51.35083-85.0989,77.69952-71.92455c26.83672,13.41836,13.656862,36.41085-6.835768,41.99974-2.62099.71481-12.687426,2.462105-11.539122,0c1.97551-4.235734,11.556429-3.952985,12.59992,2.62498c2.352574,14.83017.60836,28.90261,17.84989,34.64979c19.05843,6.35281,39.05387-.84284,50.92468-16.2749c1.47027-1.91135,6.96424-10.36065,4.19997-13.12492-6.83736-6.83736-22.71115,21.45672-12.07493,26.77483c24.98684,12.49342,94.89491-28.47235,90.29944-51.44968-.88793-4.43965-8.77844-2.83818-11.54993-2.62498-17.11169,1.31628-53.761906,40.823393-34.64979,52.49968c8.866306,5.416749,32.861501-2.346786,41.465774-5.24998c5.413795-1.826685,11.878886-4.39195,16.808866-7.34995.87499-.525,3.23723-2.39132,2.62498-1.57499-31.48428,41.97902,39.8912,19.66395,43.04973,8.92494c3.57785-12.16469-9.138166-20.68495-19.429306-19.94987-4.978491-.304449-17.019497,3.500888-19.189691,6.82495-.918913,1.407489,6.539254.740227,7.934103.662388c32.612836-.468746,24.795843-4.46364,29.634914-.662388c13.770798,10.817422-8.82633,29.67722,23.09986,26.77483c21.23241-1.93022,43.61683-38.82871,53.02467-34.12479c9.59661,4.79831,5.66858,23.92397.525,29.92482-2.62013,3.05682-10.250482,5.918013-13.835994,6.29996-11.023951,1.174329-18.002766-1.613544-4.013883,0c.731577.084384,9.355597-1.454083,10.511636-2.09999c11.971094-6.68854,9.529413-8.990768,15.198539-20.47486.605012-1.225588,3.7727-3.344871,4.69627-4.352401c2.48758-2.71372,10.062894-5.601824,13.619184-6.668704c1.68455-.50536,7.031605-1.474952,5.324058-1.053825-43.200167,10.654327-34.33967,50.076937,10.499943,32.54979"
                transform="translate(59.689548-37.178238)"
                fill="none"
                stroke="#9c643d"
                strokeWidth="4"
                className="path relax"
              />
            </svg>
            Roof Teracce
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="container">
        <div className="unique-card">
          <div className="unique-bordercard">
            <LazyShow>
              <h2>
                Unique <br /> <span className="text-border">experience</span>
              </h2>
            </LazyShow>
            <p>
              Stolingizni bron qiling, relax va qolganini bizga qo'yib bering
            </p>
            <Link to="/reservation" className="btn-roll">
              reserve your table
            </Link>
          </div>
        </div>
      </div>
      <div className="gallery">
        <LazyShow>
          <img
            src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="meal"
          />
        </LazyShow>
        {/*https://zira.uz/wp-content/uploads/2019/01/baranya-koreyka-3.jpg*/}

        <LazyShow>
          <img
            src={
              'https://images.unsplash.com/photo-1562050147-fda1cc9a6378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            }
            alt="table"
          />
        </LazyShow>
        <LazyShow>
          <img
            src={
              'https://images.unsplash.com/photo-1626202155907-faf8fa3dbc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
            }
            alt="meal"
          />
        </LazyShow>

        <p>"Working with experts to explore opportunities"</p>
      </div>
      <div className="video-play" onClick={() => playVideo()}>
        <DotRing playOrPause={play} />
        <video muted loop autoPlay ref={ref}>
          <source
            src={
              'https://firebasestorage.googleapis.com/v0/b/bahor-restoran.appspot.com/o/cookin.mp4?alt=media&token=f0580e02-322f-40c6-ab91-a1d8e68e9ed4'
            }
            type="video/mp4"
          />
          Your browser doesn't support HTML video
        </video>
      </div>
      <div>
        <div className="reservation">
          <LazyShow>
            <p className="motto">
              Our goal is provide an atmosphere where laughing out loud with
              friends and sampling chef-driven fare go hand-in-hand
            </p>
          </LazyShow>

          <div className="signature">
            <svg
              id="e7YQXbSMNwa1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 600"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              width="400"
              height="400"
            >
              <path
                d="M118.18182,290.10695c-19.90727,33.17878-27.9159,70.93033-42.78075,105.61497"
                fill="none"
                stroke="#9c643d"
                strokeWidth="3"
                strokeDasharray="114.129729"
                style={{ animationDelay: 0 }}
              />
              <path
                d="M83.42246,334.2246c-15.39375-6.1575-76.27289-14.65201-82.8877-25.40107-14.98632-24.35278,49.5237-21.2558,50.80214-21.39037c38.85192-4.08968,211.03948-22.88038,235.29412-37.43315"
                fill="none"
                stroke="#9c643d"
                strokeWidth="3"
                strokeDasharray="392.090733"
                style={{ animationDelay: '0.5s' }}
              />
              <path
                d="M325.404664,325.590627c-28.0879,0-10.894212-9.633737,24.060576-16.767097c36.573286-7.463653,49.613614-12.068136,90.913712-16.711225"
                fill="none"
                stroke="#9c643d"
                strokeWidth="3"
                strokeDasharray="189.760872"
                style={{ animationDelay: '2s' }}
              />
              <path
                d="M374.754359,292.112305c-31.487503,50.192211-6.389208,79.709655,60.374626,117.477802"
                fill="none"
                stroke="#9c643d"
                strokeWidth="3"
                strokeDasharray="170.220942"
                style={{ animationDelay: '2.5s' }}
              />
              <path
                d="M132.8877,360.96257c-3.71969,4.46363-13.46682,10.59735-9.35829,14.70588c9.46188,9.46188,27.65619-18.99569,32.08556-16.04278c4.14555,2.7637-5.8634,10.87835-2.6738,14.70588c7.20639,8.64766,27.88586-8.56933,32.08556-13.36898c1.46726-1.67686,5.586235-6.923135,4.01069-5.34759-4.01069,4.01069-8.91594,15.49666,1.3369,20.05348c13.32123,5.92054,37.78842-18.05655,49.46524-22.72727"
                transform="matrix(1.364928 0 0 1-27.36374 6.01603)"
                fill="none"
                stroke="#9c643d"
                strokeWidth="3"
                strokeDasharray="199.158381"
                style={{ animationDelay: '1.3s' }}
              />
            </svg>
          </div>

          <LazyShow>
            <div className="curtain">
              <div className="invert">
                <h2>Reservation</h2>
              </div>
            </div>
          </LazyShow>
        </div>
      </div>
    </MouseContextProvider>
  )
}

export default Home
