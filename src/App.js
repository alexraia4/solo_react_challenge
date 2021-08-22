import React, { useState } from 'react';
import axios from 'axios'
import NameList from './NameList'
import './css/App.css'

function App() {

      const [repType, setrepType] = useState("Representatives");
      const [USState, setUSState] = useState("AL");
      const [APIData, setAPIData] = useState([1,2,3,4,5]);


      const changeState = () => {
            setrepType(document.getElementById("repTypeDropDown").value)
            setUSState(document.getElementById("USStateDropDown").value)
      }

      const submit = () => {
            axios.get(`http://134.209.72.40:3100/${repType}/${USState}`)
            .then(data => {
                  setAPIData(data.data.results);
            })

      }


      return (
            <div className="App">
                  <h1>Who's My Representative?</h1>
                  
                  <div className="configureSet">
                        <select id="repTypeDropDown" onChange={changeState}>
                              <option value="Representatives">Representatives</option>
                              <option value="Senators">Senators</option>
                        </select>

                        <select id="USStateDropDown" onChange={changeState}>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District Of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                        </select>
                        <button type="button" onClick={submit}>Submit</button>
                  </div>

                  <NameList repType = {repType} APIData = {APIData}/>
            </div>
      );
}

export default App;