import React, { useEffect, useState } from 'react'
import UpperCase from './CaseConverter'
import Navbar from './Navbar'
import Quotes from './Quotes'

export default function App() {
  return (<>
    <div style={{ backgroundColor: "bisque", height:"100vh"}}>
      <Navbar />
      <div className='container' style={{marginTop:"4.5rem"}}>
        <UpperCase heading={'Enter your Text: '} />
      </div>
      <Quotes/>
    </div>
  </>
  )
}