import React from 'react';
import styles from '../styles/ContactMe.module.css';

const ContactMe = () => {
  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form action="https://formsubmit.co/tsmane8787@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
