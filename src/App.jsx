import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [eContact, setEContact] = useState("");
  const [eContact_1,setEContact_1] = useState("");
  const [eContact_2, setEContact_2] = useState("");
  const [returnPlayer, setReturnPlayer] = useState("");

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
            <input type="text" name="first_Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </label>


          <label>
            Last Name:
            <input type="text" name="last_Name" value={lastName} onChange={e => setLastName(e.target.value)} />
          </label>

          <label>
            Age:
            <input type="text" name="Age" value={age} onChange={e => setAge(e.target.value)} />
          </label>

          <label>
            D.O.B. :
            <input type="text" name="d_o_b" value={DOB} onChange={e => setDOB(e.target.value)} />
          </label>

          <label>
            Email:
            <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>

          <label>
            Phone Number:
            <input text="text" name="phone_number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          </label>

          <label>
            Address:
            <input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} />
          </label>

          <label>
            City:
            <input type="text" name="city" value={city} onChange={e => setCity(e.target.value)} />
          </label>

          <label>
            State:
            <input type="text" name="state" value={state} onChange={e => setState(e.target.value)} />
          </label>

          <label>
            Zip:
            <input type="text" name="zip" value={zip} onChange={e => setZip(e.target.value)} />
          </label>

          <div>--------------------------------------------------------------------------------</div>

          <label>
            Emergency Contact:
            <input type="text" name="e_contact" value={eContact} onChange={e => setEContact(e.target.value)} />
          </label>

          <label>
            Name:
            <input type="text" name="e_contact_1" value={eContact_1} onChange={e => setEContact_1(e.target.value)} />
          </label>

          <label>
            Name:
            <input type="text" name="e_contact_2" value={eContact_2} onChange={e => setEContact_2(e.target.value)} />
          </label>

          <div>--------------------------------------------------------------------------------</div>

          <label>
            Returning player? - Previous Team & Division:
            <input type="text" name="return_player" value={returnPlayer} onChange={e => setReturnPlayer(e.target.value)} />
          </label>

        </form>
      </div>
      <div>--------------------------------------------------------------------------------</div>

    </>
  )
}

export default App
