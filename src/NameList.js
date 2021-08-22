import React, { useState } from 'react';
import './css/NameList.css'

export default function NameList(props) {

      const [personDetails, setPersonDetails] = useState({name: "", district: "", phone: "", office: ""});


      const changeState = (person) => {
            setPersonDetails({name: person.name, district: person.district, phone: person.phone, office: person.office})
      }
      
      let listItems = "";
      if (props.APIData[0].party){
            listItems = props.APIData.map((person, index) => (
                  <li key={index} onClick={() => {changeState(person)}} style={{cursor: "pointer"}}><p>{person.name}</p><p>{person.party.charAt(0)}</p></li>
            ))
      }
      


      return (
            <div className="NameList">
                  <h2>List / {props.repType}</h2>
                  <div className="lists">
                        <ul>
                              <li style={{backgroundColor: "rgb(233, 233, 233)"}}><p>Name</p><p>Party</p></li>
                              {listItems}  
                        </ul>
                        <ul>
                              <li style={{backgroundColor: "rgb(233, 233, 233)"}}>Info</li>
                              <li><p>Name</p>{personDetails.name}</li>
                              <li><p>District</p>{personDetails.district}</li>
                              <li><p>Phone:</p>{personDetails.phone}</li>
                              <li><p style={{marginRight: "50%"}}>Office:</p><p style={{fontSize: "80%"}}>{personDetails.office}</p></li>
                        </ul>
                  </div>
                  
            </div>
      );
}
