import React from 'react'
import Futa from './futa'

const Contacts = () => {
  return (
    <div>
      <section className="contact-us">
    <div className="contact-us1">
        <div className="head">
            <h5><span>+</span> CONTACT US</h5>
            <h1>Get In Touch</h1>
            <h4>Please complete the form if you have a project in mind, questions to our team of contruction experts, or any other inquiries.</h4>
        </div>

        <div className="form">
            <input className="name" type="Name" placeholder="Name*" required />
            <input className="phone" type="Phone number" placeholder="Phone number*" required />
            <input className="Email" type="Email" placeholder="Email" required />
            <textarea className="textarea" name="Message" placeholder="Message"></textarea>

            <button type="submit" className="button">Send A Request</button>
        </div>
    </div>
</section>

<Futa/>

    </div>
  )
}

export default Contacts
