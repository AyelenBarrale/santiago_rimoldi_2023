import React from "react";
import ContactForm from "./ContactForm";

const Form = () => {
  return (
    <section>
      <div className='contact-container'>
        <div className='contact-item item-1'>
          <h3 className='h3-text'>Don't be shy, say hi!</h3>
          <h2 className='h1-text'>Contact me</h2>
          <div className='line'></div>
        </div>
        <div className='contact-item item-form'>
          <p className='p-text'>
            To contact me for project enquiries, please fill this contact form
            or send me an email to info@santiagorimoldi.com
          </p>
        </div>
        <div>
          <p id='thanxContact'></p>
        </div>
        <ContactForm />
        {/* <form action='/' method='POST' className='form'>
          <div className='form-row'>
            <label for='full-name'></label>
            <input
              type='name'
              name='name'
              id='full-name'
              required
              placeholder='Name'
            />
            <label for='email'></label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Email Address'
            />
            <label for='subject'></label>
            <input
              type='subject'
              name='subject'
              id='subject'
              required
              placeholder='Subject'
            />
            <label for='mensaje'></label>
            <textarea
              name='mensaje'
              id='mensaje'
              cols='30'
              rows='8'
              placeholder='Message'
            ></textarea>
            <button type='submit' id='btnEnviar'>
              Send
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
};

export default Form;
