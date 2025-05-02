import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { ContactSchema } from "../Schemas/contactForm";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setFeedback("");

      try {
        const response = await axios.post(
          "https://pbackend.up.railway.app/api/contact",
          values
        );

        if (response.status === 200) {
          setFeedback("✅ Message sent successfully!");
          resetForm();
        } else {
          setFeedback("❌ Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setFeedback("❌ Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Navbar />
      <section
        id="contact"
        className="py-12 bg-gray-800 dark:bg-gray-900 relative min-h-screen"
      >
        <div className="absolute top-2 left-2">
          <Link
            to="/"
            className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 flex items-center space-x-2"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Home</span>
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-center text-indigo-500 dark:text-indigo-400 mb-8">
          Contact Me
        </h2>

        <div className="container mx-auto flex flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
          >
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.name && touched.name && (
                <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Subject Field */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 dark:text-gray-300 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                autoComplete="off"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white ${
                  errors.subject && touched.subject
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.subject && touched.subject && (
                <p className="text-red-500 mt-1 text-sm">{errors.subject}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                autoComplete="off"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white ${
                  errors.message && touched.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.message && touched.message && (
                <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition duration-300 flex justify-center items-center"
              disabled={!(isValid && dirty) || loading}
            >
              {loading ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Feedback Message */}
            {feedback && (
              <p
                className={`mt-4 text-center text-sm font-medium ${
                  feedback.startsWith("✅")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
