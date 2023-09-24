import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [isSucessfull, setIsSuccessfull] = useState(false);
  const [showText, setShowText] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const serviceId= process.env.REACT_APP_YOUR_SERVICE_ID
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID
  const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleResetForm = () => {
    setFormData({
      from_name: '',
      from_email: '',
      message: '',
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text)
        setIsSuccessfull(true)
        setShowText(true)
        handleResetForm()
      }, (error) => {
        console.log(error.text)
        setIsSuccessfull(false)
        setShowText(true)
      });
  };

  return (
    <div>
        <form ref={form} onSubmit={sendEmail} className='form'>
            <div className='form-row'>
                <label htmlFor='full-name'></label>
                <input
                type='name'
                name='from_name'
                id='full-name'
                required
                placeholder='Name'
                value={formData.from_name}
                onChange={handleInputChange}
                />
                <label htmlFor='email'></label>
                <input
                type='email'
                name='from_email'
                id='email'
                required
                placeholder='Email Address'
                value={formData.from_email}
                onChange={handleInputChange}
                />
                <label htmlFor='mensaje'></label>
                <textarea
                name='message'
                id='mensaje'
                cols='30'
                rows='8'
                placeholder='Message'
                value={formData.message}
                onChange={handleInputChange}
                ></textarea>
                <button type='submit' value='Send' id='btnEnviar'>
                Send
                </button>
            </div>
        </form>
        <div>
            {showText? (
                isSucessfull ? (
                    <p>Thanks, your message was send. I'll contact you soon</p>
                    ) : (
                    <p>Unfortunately an error occurred and your message could not be sent. Please try again.</p>
                    )
                ): (null)
            }
        </div>
    </div>
  );
};

export default ContactForm;


// import React, { useState } from "react";

// const ContactForm= ()=> {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3000/send-email', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log(response)
//       if (response.status === 200) {
//         console.log("Email sent successfully!");
//       } else {
//         console.error("Email sending failed.");
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <label htmlFor="message">Message</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;