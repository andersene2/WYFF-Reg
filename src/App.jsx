import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <div>
    <form>
      <label>
        First Name:
        <input type="text" name="firstName" />
      </label>
      
      <label>
        Last Name:
        <input type="text" name="lastName" />
      </label>

      <label>
        Age:
        <input type="text" name="age"/>
      </label>

      <label>
        D.O.B.:
        <input type="text" name="d_o_b"/>
      </label>

      <label>
        Email:
        <input type="text" name="email" />
      </label>

      <label>
        Phone Number:
        <input text="text" name="phone_number" />
      </label>

      <label>
        Address:
        <input type="text" name="address"/>
      </label>

      <label>
        City:
        <input type="text" name="city" />
      </label>

      <label>
        State:
        <input type="text" name="state" />
      </label>

      <label>
        Zip:
        <input type="text" name="zip" />
      </label>

      <div>--------------------------------------------------------------------------------</div>

      <label>
        Emergency Contact:
        <input type="text" name="e_contact" />
      </label>

      <label>
        Name:
        <input type="text" name="e_contact_1" />
      </label>

      <label>
        Name:
        <input type="text" name="e_contact_2" />
      </label>

      <div>--------------------------------------------------------------------------------</div>

      <label>
        Returning player? - Previous Team & Division:
        <input type="text" name="return_player" />
      </label>

    </form>
    </div>
        <div>--------------------------------------------------------------------------------</div>

    </>
  )
}

export default App
 