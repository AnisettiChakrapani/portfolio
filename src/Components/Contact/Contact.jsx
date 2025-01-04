import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e9ee6a93-b422-49a9-b1c0-738e1e3f3bd1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={message_icon} alt="" /></h3>
            <p>Feel free to Reach out to us.
                As your feedback, suggesstions will make
                us strive even forward and deliver excpetional results.</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@Edusity.edu</li>
                <li><img src={phone_icon} alt="" />+98 123-456-7890</li>
                <li><img src={location_icon} alt="" />77 Massachusets Ave, Cambridge<br/> MA 02139, United Sates</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name = 'name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your Mobile number' required/>
                <label>Write your messages here</label>
                <textarea name='message'rows='6' placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact