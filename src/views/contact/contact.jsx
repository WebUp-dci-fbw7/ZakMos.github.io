import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';


const contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>z.zza@hotmail.com</h5>
            <a href="mailto:z.zza@hotmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Facebook Messenger</h5>
            <a href="https://m.me/Zak.Musm" target="_blank" rel="noreferrer"> Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+49 151 660 43433</h5>
            <a href="https://wa.me/4915166043433" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
      {/* END OF CONTACT OPTIONS */}
      <form action="https://formspree.io/f/xzbkndeb"
              method="POST" >
        <input type="text" name='name' placeholder="Your Full Name" required />
        <input type="email" name='email' placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn-primary"  >Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default contact