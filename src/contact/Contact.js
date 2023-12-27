//Contact.js
import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./Contact.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

const meta = {
  title: "Sebastian Gomez",
  description:
    "Welcome! I'm Sebastian B. Gomez, a dedicated Data Integrity Specialist based in Las Vegas, NV. With a rich background in software and data management, I've accumulated valuable experience over the past 2 years.",
};

const contactConfig = {
  YOUR_EMAIL: "",
  YOUR_FONE: "",
  description:
    "Thank you for reaching out! Please use this form to send me a message or ask any questions you may have. I'll do my best to respond promptly!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_0snp3fy",
  YOUR_TEMPLATE_ID: "template_9h0fmd8",
  YOUR_USER_ID: "ysdWF9xfGmU2ROUXT",
};

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thank you for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="container-grid">
      <title>{meta.title} | Contact</title>

      <h1 className="title">Contact Me</h1>
      <div className="left-grid">
        <p>{formData.alertmessage}</p>
        <h3>Get in touch</h3>
        <p>{contactConfig.description}</p>
      </div>
      <div className="inputs">
        <form onSubmit={handleSubmit}>
          <div className="form-layout">
            <input
              className="name"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name || ""}
              type="text"
              required
              onChange={handleChange}
            />

            <input
              className="email"
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email || ""}
              required
              onChange={handleChange}
            />
            <textarea
              className="message"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />

            <button className="button" type="submit">
              {formData.loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </section>
  );
};
