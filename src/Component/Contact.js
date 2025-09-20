import React from 'react'
import './Style/Contact.css'

const Contact = () => {
    return (
        <div className='Contact-container'>
            <form action="https://api.web3forms.com/submit" method="POST" className='Contact-form'>
                <div className='contact-title'>
                    <h2>Get In Touch</h2>
                    <hr />
                </div>
                <input type="hidden" name="access_key" value="f71c9121-a023-4bbb-9fc8-e139e9d34bf8"></input>
                <input type="text" name='name' placeholder='Your Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" id="" placeholder='Message' required></textarea>
                <button type='submit'>Submit</button>
            </form>
            <div className="right">
                <img src="./Images/contect.jpeg" alt="" />
            </div>
        </div>
    )
}

export default Contact
