import React, { useState } from 'react';

export const EmployeeForm = () => {
  // Define state variables to store the values of the form fields
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [email, setEmail] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [alsoKnownAs, setAlsoKnownAs] = useState('');
  const [ssn, setSsn] = useState('');
  const [dob, setDob] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [drivingLicenseState, setDrivingLicenseState] = useState('');

  // Define a function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Use the form field values for whatever purposes you need
    console.log({
      lastName,
      firstName,
      middleName,
      email,
      presentAddress,
      city,
      state,
      zipCode,
      alsoKnownAs,
      ssn,
      dob,
      placeOfBirth,
      drivingLicense,
      drivingLicenseState
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className=''>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Middle Name:
        <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
      </label>
      </div>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Present Address:
        <input type="text" value={presentAddress} onChange={(e) => setPresentAddress(e.target.value)} />
      </label>
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <label>
        State:
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </label>
      <label>
        Zip Code:
        <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
      </label>
      <label>
        Also Known As (include maiden name):
        <input type="text" value={alsoKnownAs} onChange={(e) => setAlsoKnownAs(e.target.value)} />
      </label>
      <label>
        SSN:
        <input type="text" value={ssn} onChange={(e) => setSsn(e.target.value)} />
      </label>
      <label>
        DOB:
        <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
      </label>
      <label>
        Place of Birth:
        <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
      </label>
      
</form>
  )}

 

 
  