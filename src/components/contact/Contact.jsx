import React from "react";
import "./contact.scss";
function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
      <i class="fa-solid fa-phone-volume"></i>
      </div>
      <div className="right">
        <form onSubmit={(e)=>e.preventDefault()} action="">
        <input type="text" placeholder="E-Mail" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
