import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'; // Import CSS for styling
import AnimatedPage from '../Components/transition';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqazzoqo");

  if (state.succeeded) {
    return (
      <AnimatedPage>
        <div className="contact-form-success">
          <p>Thanks for getting in contact!</p>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <div className="contact-form-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            className="form-input"
            required
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          

          <button type="submit" disabled={state.submitting} className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </AnimatedPage>
  );
}
