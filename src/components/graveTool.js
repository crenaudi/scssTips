import React, { useState } from 'react'
import alliance from '../assets/alliance.jpg'
import '../scss/_graveTool.scss'

export const GraveTool = () => {
  const [texte, setTexte] = useState('The lazy dog is waiting for mamy !')
  const [check, setCheck] = useState(false)

  return (
    <div className='container'>
      <div className='grave_1'>
        <div className="img" style={{backgroundImage:  `url(${alliance})`}}>
          <svg class="svg-path" width="400" height="100" xmlns="http://www.w3.org/2000/svg">
            <path id="MyPath" d="M0 80 Q200 20, 400 80" fill='none' stroke='none' />
            <text x='5'>
              <textPath href="#MyPath">
                {texte}
              </textPath>
            </text>
          </svg>
        </div>
        <div className='btnZoom'>
          <p>Zoom</p>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            onClick={() => setCheck(check ? false : true)}
            checked={check}
          />
        </div>
      </div>
      <label>
        Write your message
      </label>
      <textarea
        rows='2'
        value={texte || ''}
        onChange={(event) => setTexte(event.target.value)}
        onBlur={(event) => setTexte(event.target.value)}
      />
      <label>
        Choose a font
      </label>
      <label>
        Choose a material
      </label>
    </div>
  )
}