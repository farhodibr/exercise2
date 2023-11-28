import { useState } from 'react'
import Button from './ButtonComponent'
import 'animate.css'




 export default function EmailInput() {

 const [userEmail, setUserEmail] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 function handleEmailInput(event) {
  setUserEmail(event.target.value);
 }

 function handleSubmit() {
    if (userEmail.includes('@')) {
      setErrorMessage('Email submitted');
    }
    else {
      setErrorMessage('Invalid email submitted');
    }
  }

 
  return (
    <div >
      <p className='animate__heartBeat'>Enter your email address:</p>
      <br />
      <input type="text" onChange={handleEmailInput}/>
      <br />
      <Button className={'btn-alert text-important'} onClick={handleSubmit} children={'Enter Your Email'} />
      <p>{errorMessage}</p>
    </div>

      
  )
}


