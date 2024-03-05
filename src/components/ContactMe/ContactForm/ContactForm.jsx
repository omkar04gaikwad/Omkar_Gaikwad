import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form
        action='https://getform.io/f/rb234jdW'
        method='POST'>
            <div className='name-container'>
            <input type='text' class='firstname' name='firstname' placeholder='First Name'/>
            <input type='text' class='lastname' name='lastname' placeholder='Last Name'/>
            </div>
            <input type='text' class='email' name='email' placeholder='Email'/>
            <textarea type='text' name='message' placeholder='Message'/>

            <button >SEND</button>
        </form>
    </div>
    

  )
}

export default ContactForm