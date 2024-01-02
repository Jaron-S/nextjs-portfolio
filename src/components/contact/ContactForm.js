import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission triggered");

    try {
      emailjs
        .sendForm(
          "service_b8u30qc",
          "template_3gigu0z",
          e.target,
          "i5tGnsAz_kN35ObwZ"
        )
        .then((result) => {
          console.log("Email successfully sent!", result.text);
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
        });
    } catch (error) {
      console.error("Synchronous error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="p-2 border-2 border-gray-300 rounded-xl bg-white dark:bg-black dark:text-white dark:border-gray-600"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="p-2 border-2 border-gray-300 rounded-xl bg-white dark:bg-black dark:text-white dark:border-gray-600"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
        className="p-2 border-2 border-gray-300 rounded-xl bg-white dark:bg-black dark:text-white dark:border-gray-600"
        rows="4"
      />
      <div className="flex w-full justify-center">
        <button
          type="submit"
          className="p-2 px-4 bg-black text-white rounded-xl hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
