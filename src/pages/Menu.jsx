import React, { useState } from 'react'

function Menu() {
  const [tabIs, setTabIs] = useState('taomlar')
  const [transitionStage, setTransistionStage] = useState('fadeIn')
  return (
    <div className="container text-center pageContainer">
      <h2>List of</h2>
      <div className="tab-menu">
        <div
          className={`link-b ${tabIs === 'taomlar' && 'active'}`}
          onClick={() => setTabIs('taomlar')}
        >
          dishes
        </div>
        <div
          className={`link-b ${tabIs === 'salatlar' && 'active'}`}
          onClick={() => setTabIs('salatlar')}
        >
          salads
        </div>
        <div
          className={`link-b ${tabIs === 'ichimliklar' && 'active'}`}
          onClick={() => setTabIs('ichimliklar')}
        >
          chai & coffee
        </div>
      </div>
      <div className="menuContainer">
        {tabIs === 'taomlar' && (
          <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
              if (transitionStage === 'fadeOut') {
                setTransistionStage('fadeIn')
              }
            }}
          >
            <div className="menu-section">
              <h3>SMALL PLATES</h3>
              <ul>
                <li className="menu-item">
                  <h4>GUNPOWDER GOBHI</h4>
                  <p className="menu-item--price">22 000 | 18 000</p>
                  <p className="menu-item--info">
                    <small>gluten free, vegetarian</small>
                  </p>
                </li>
                <li className="menu-item">
                  <h4>CRISPY RAWA PRAWN</h4>
                  <p className="menu-item--price">25 000</p>
                </li>
                <li className="menu-item">
                  <h4>GHEE ROAST CHICKEN WINGS</h4>
                  <p className="menu-item--price">22 000 | 18 000</p>
                  <p className="menu-item--info">
                    <small>gluten free</small>
                  </p>
                </li>
                <li className="menu-item">
                  <h4>BOMBAY CHICKEN BAIDA ROTI</h4>
                  <p className="menu-item--price">22 000 | 18 000</p>
                </li>
                <li className="menu-item">
                  <h4>GALOUTI KEBAB</h4>
                  <p className="menu-item--price">5 000</p>
                </li>
                <li className="menu-item">
                  <h4>SHAKARKANDI CHAAT</h4>
                  <p className="menu-item--price">100 000</p>
                  <p className="menu-item--info">
                    <small>gluten free, vegetarian</small>
                  </p>
                </li>
                <li className="menu-item">
                  <h4>BUCKWHEAT BHEL</h4>
                  <p className="menu-item--price">22 000 | 18 000</p>
                  <p className="menu-item--info">
                    <small>gluten free, vegetarian</small>
                  </p>
                </li>
                <li className="menu-item">
                  <h4>SINDHI ALOO TIKKI</h4>
                  <p className="menu-item--price">100 000 | 90 000</p>
                  <p className="menu-item--info">
                    <small>vegetarian</small>
                  </p>
                </li>
                <li className="menu-item">
                  <h4>CRAB PURI {'&'} CAVIAR</h4>
                  <p className="menu-item--price">150 000</p>
                  <p className="menu-item--info">
                    <small>Go'shtli</small>
                  </p>
                </li>
              </ul>
            </div>
            <div className="menu-section">
              <h3>BREADS</h3>
              <ul>
                <li className="menu-item">
                  <h4>Tandir bread</h4>
                  <p className="menu-item--price">4 000</p>
                </li>
                <li className="menu-item">
                  <h4>CHILI CHEESE STUFFED NAAN</h4>
                  <p className="menu-item--price">3 000</p>
                </li>
                <li className="menu-item">
                  <h4>Patir</h4>
                  <p className="menu-item--price">4 000</p>
                </li>
              </ul>
            </div>
          </div>
        )}
        {tabIs === 'salatlar' && (
          <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
              if (transitionStage === 'fadeOut') {
                setTransistionStage('fadeIn')
              }
            }}
          >
            <div className="menu-section">
              <h3>Salads</h3>
              <ul>
                <li className="menu-item">
                  <h4>Fruit assorti</h4>
                  <p className="menu-item--price">50 000</p>
                </li>
                <li className="menu-item">
                  <h4>Italiano</h4>
                  <p className="menu-item--price">18 000</p>
                </li>
                <li className="menu-item">
                  <h4>barf</h4>
                  <p className="menu-item--price">18 000</p>
                </li>
                <li className="menu-item">
                  <h4>aristokrat</h4>
                  <p className="menu-item--price">18 000</p>
                </li>
                <li className="menu-item">
                  <h4>olive</h4>
                  <p className="menu-item--price">18 000</p>
                </li>
                <li className="menu-item">
                  <h4>France</h4>
                  <p className="menu-item--price">18 000</p>
                </li>
                <li className="menu-item">
                  <h4>Rakford</h4>
                  <p className="menu-item--price">18 000</p>
                </li>
                <li className="menu-item">
                  <h4>ishtaha</h4>
                  <p className="menu-item--price">18 000</p>
                </li>
                <li className="menu-item">
                  <h4>Ragu</h4>
                  <p className="menu-item--price">18 000</p>
                </li>
                <li className="menu-item">
                  <h4>Japanese</h4>
                  <p className="menu-item--price">9 000</p>
                </li>
                <li className="menu-item">
                  <h4>shakarob</h4>
                  <p className="menu-item--price">9 000</p>
                </li>
                <li className="menu-item">
                  <h4>Healthy</h4>
                  <p className="menu-item--price">8 000</p>
                </li>
                <li className="menu-item">
                  <h4>korean</h4>
                  <p className="menu-item--price">8 000</p>
                </li>
                <li className="menu-item">
                  <h4>Spring</h4>
                  <p className="menu-item--price">5 000</p>
                </li>
              </ul>
            </div>
          </div>
        )}
        {tabIs === 'ichimliklar' && (
          <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
              if (transitionStage === 'fadeOut') {
                setTransistionStage('fadeIn')
              }
            }}
          >
            <div className="menu-section">
              <h3>CHAI</h3>
              <ul>
                <li className="menu-item">
                  <h4>MASALA OR GINGER</h4>
                  <p className="menu-item--price">6 000</p>
                </li>
              </ul>
            </div>
            <div className="menu-section">
              <h3>Tea {'&'} Coffee</h3>
              <ul>
                <li className="menu-item">
                  <h4>all teas</h4>
                  <p className="menu-item--info">
                    <small>Black, limon, Green</small>
                  </p>
                  <p className="menu-item--price">1 000</p>
                </li>
                <li className="menu-item">
                  <h4>COFFEE</h4>
                  <p className="menu-item--price">3 000</p>
                </li>
                <li className="menu-item">
                  <h4>ESPRESSO</h4>
                  <p className="menu-item--price">3 000</p>
                </li>
                <li className="menu-item">
                  <h4>CAPPUCCINO</h4>
                  <p className="menu-item--price">3 000</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
