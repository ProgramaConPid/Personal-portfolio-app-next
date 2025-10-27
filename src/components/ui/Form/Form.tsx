// Enable React Server Components (Next.js directive)
"use client";

// Import ICustomer type for type safety
import type { ICustomer } from "@/types/customer";
// Import CSS module for scoped styles
import styles from "./form.module.css";
// Import useState hook for form state management
import { useState } from "react";
// Import custom fonts for styling
import { montserrat, roboto } from "@/app/font/fonts";
// Import customer service functions for API calls
import { createCustomer, getCustomers } from "@/services/customerServices";
// Import custom notification utility for feedback
import { customNotification } from "@/utils/notifications";

/**
 * Form component for sending a message/contact request.
 * Handles form state, validation, submission, and notifications.
 */
const Form = () => {
  // State for form data, initialized with default values
  const [formData, setFormData] = useState<ICustomer>({
    messageId: 0,
    fullName: "",
    email: "",
    message: "",
    createdAt: String(new Date()),
  });

  /**
   * Handles input changes for all form fields
   * Updates formData state with new values
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  /**
   * Handles form submission
   * Validates required fields, creates new customer, and shows notifications
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.fullName.trim() || !formData.email.trim()) {
      customNotification(
        "Filled required inputs!",
        "You must fill out the required fields before submitting the form.",
        "error"
      );
      return;
    }

    try {
      // Fetch existing customers to generate a new ID
      const existingCustomers = await getCustomers();
      const newCustomerId = existingCustomers.length + 1;

      // Prepare new customer data
      const newCustomer: ICustomer = {
        messageId: newCustomerId,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        createdAt: new Date().toISOString(),
      };

      // Send new customer data to the backend
      const response = await createCustomer(newCustomer);

      // Reset form after successful submission
      setFormData({
        messageId: 0,
        fullName: "",
        email: "",
        message: "",
        createdAt: "",
      });

      // Show success notification
      customNotification(
        "Message sent successfully 🎉",
        `Thank you, ${response.fullName}! I'll contact you soon.`,
        "success"
      );
    } catch (error) {
      // Log error and show error notification
      console.error("Error sending message:", error);
      customNotification(
        "Error sending message 😞",
        "Please try again later or contact me directly.",
        "error"
      );
    }
  };

  // Render the contact form UI
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Form title */}
      <h3 className={`${styles.form__title} ${montserrat.className}`}>
        Send me a message
      </h3>

      {/* Form description */}
      <p className={`${styles.form__paragraph} ${roboto.className}`}>
        Complete the form and I will respond as soon as possible.
      </p>

      {/* Form fields grouped together */}
      <div className={styles.form__groups}>
        {/* Name input field */}
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
        {/* Email input field */}
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
        {/* Message textarea field (optional) */}
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

      {/* Submit button */}
      <button className={` ${styles.form__button}`}>Send Message</button>
    </form>
  );
};

// Export the Form component for use in contact pages
export default Form;
