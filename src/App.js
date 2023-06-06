import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import classes from './App.module.css';

function App() {
  const form = useRef()
  const [isSend, setIsSend] = useState(false)

  const handleSendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wqdr677", "template_wja7vnt", form.current, "9EpTUCppV0f1KBhnQ")
      .then((result) => {
        console.log(result.text);
        setIsSend(true)
        setTimeout(() => {
              setIsSend(false)
        },2500)
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleClick = (e) => {
  window.location.href="https://vishnusidea.github.io/VISHNU-website/";
    }

  return (
   
    <div className={classes.container}>
      <form ref={form} onSubmit={handleSendEmail}>
        <div className={classes.inputBox}>
          <label>Name</label>
          <input type="text" name="from_name" placeholder='Username' />
        </div>
        <div className={classes.inputBox}>
          <label>Genter</label>
          <input type="text" name="gender"  placeholder='Male/Female'/>
        </div>

        <div className={classes.inputBox}>
          <label>Email</label>
          <input type="email" name="email" placeholder=' Enter your email' />
        </div>

        <div className={classes.inputBox}>
          <label>Message</label>
          <textarea name="message" cols="30" rows="10" placeholder='Review for this webpage.....' />
        </div>
        <button type='submit' onClick={handleClick}>Login </button>
        {isSend && (
          <div className={classes.isSendmessage}>
            Email has been sent successfully
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
