import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import fillOut from './PFO_Form.jsx'
import './App.css'

function App() {
  
  return (
    <>
    <h2><strong>2023 Worcester Youth Flag Football Registration</strong></h2>
    <h3>Co-Ed, Ages 5-13</h3>

    <h4><em><u>In-Person Registration</u></em></h4> 
      <p>Saturday, June 10th, 2023, 8 AM to 11AM</p>
      <p>Crompton Park, 47 Quinsigamond Ave, Worcester, MA 01610</p>

    <h4><em><u>Mail-in / Phone-in Registration</u></em></h4>
      <ul>
        <li><strong>Mail Your Check with this form to:</strong></li>
      </ul>
      <p>Worcester Youth Flag Football</p>
        <p>P.O. Box 20319</p>
        <p>West Side Station</p>
        <p>Worcester, MA 01610</p>

    <h4>Commissioner Bob Mohoney: <a>508-762-9019</a></h4>

    <h4><em><u>(insert.year) Registration Fee:</u></em></h4>
      <ul>
        <li>$90.00 per player</li>
        <li>$140.00 per family</li>
      </ul>

    <h4><em><u>FAQ</u> at:</em><u><a href="https://www.facebook.com/WorcesterYouthFlagFootball/" target="_blank"> www.facebook.com/WorcesterYouthFlagFootbal</a></u></h4>
    <div>--------------------------------------------------------------------------------</div>
    <br></br>
    
    <fillOut />
    
    </>
  )
}

export default App
 