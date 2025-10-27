"use client";

import type { ICustomer } from "@/types/customer";
import styles from "./form.module.css";
import { useState } from "react";
import { montserrat, roboto } from "@/app/font/fonts";
import { createCustomer, getCustomers } from "@/services/customerServices";
import { customNotification } from "@/utils/notifications";

const Form = () => {
  const [formData, setFormData] = useState<ICustomer>({
    messageId: 0,
    fullName: "",
    email: "",
    message: "",
    createdAt: String(new Date()),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
      customNotification("Filled required inputs!", "You must fill out the required fields before submitting the form.", "error")
      return;
    }

    try {
      const existingCustomers = await getCustomers();

      const newCustomerId = existingCustomers.length + 1;

      const newCustomer: ICustomer = {
        messageId: newCustomerId,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        createdAt: new Date().toISOString(),
      };

      const response = await createCustomer(newCustomer);

      setFormData({
        messageId: 0,
        fullName: "",
        email: "",
        message: "",
        createdAt: "",
      });

      customNotification(
        "Message sent successfully 🎉",
        `Thank you, ${response.fullName}! I'll contact you soon.`,
        "success"
      );
    } catch (error) {
      console.error("Error sending message:", error);
      customNotification(
        "Error sending message 😞",
        "Please try again later or contact me directly.",
        "error"
      );
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={`${styles.form__title} ${montserrat.className}`}>
        Send me a message
      </h3>

      <p className={`${styles.form__paragraph} ${roboto.className}`}>
        Complete the form and I will respond as soon as possible.
      </p>

      <div className={styles.form__groups}>
        <div className={styles.form__group}>
          <label
            className={`${montserrat.className} ${styles.form__label}`}
            htmlFor=""
          >
            Name *
          </label>
          <input
            value={formData.fullName}
            onChange={handleChange}
            className={styles.form__input}
            type="text"
            placeholder="Your name..."
            name="fullName"
          />
        </div>
        <div className={styles.form__group}>
          <label
            className={`${montserrat.className} ${styles.form__label}`}
            htmlFor=""
          >
            Email *
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            className={styles.form__input}
            type="text"
            placeholder="your@email.com"
            name="email"
          />
        </div>
        <div className={styles.form__group}>
          <label
            className={`${montserrat.className} ${styles.form__label}`}
            htmlFor=""
          >
            Message (Optional)
          </label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            className={styles.form__textarea}
            name="message"
            placeholder="Your message..."
          ></textarea>
        </div>
      </div>

      <button className={` ${styles.form__button}`}>Send Message</button>
    </form>
  );
};

export default Form;
