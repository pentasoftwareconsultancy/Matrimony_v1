import React from 'react'
import ContactForm from '../../../Components/UserComponents/ContactUs/ContactForm'
import ContactDetails from '../../../Components/UserComponents/ContactUs/ContactDetails'
import WhatsAppButton from '../../../Components/UserComponents/Buttons/WhatsAppButton'

function Contact() {
  return (
    <div>
        <ContactForm/>
        <ContactDetails/>
        <WhatsAppButton/>
    </div>
  )
}

export default Contact