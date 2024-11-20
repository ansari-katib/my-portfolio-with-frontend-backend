import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { ContactSchema } from "../Schemas/contactForm";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(""); // For success or failure feedback

  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: ContactSchema,
    onSubmit: async (values, action) => {
      setLoading(true);
      setFeedback(""); // Reset feedback message

      try {
        const response = await fetch("http://localhost:3000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setFeedback("Message sent successfully! 🎉");
          action.resetForm();
        } else {
          setFeedback("Failed to send message. Please try again. 😞");
        }
      } catch (error) {
        console.error("Error submitting the form", error);
        setFeedback("An error occurred. Please try again. 😞");
      } finally {
        setLoading(false); // Reset loading state
      }
    },
  });

  return (
    <section id="contact" className="py-12 bg-gray-400 relative">
      <div className="absolute top-2 left-4">
        {/* Back to Home Button */}
        <Link
          to="/"
          className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 flex items-center space-x-2"
        >
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Contact Me
      </h2>
      <div className="container mx-auto flex flex-col items-center">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
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
              required
              className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.name && touched.name && (
              <p className="text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
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
              required
              className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && touched.email && (
              <p className="text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-medium">
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
              required
              className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.subject && touched.subject && (
              <p className="text-red-500">{errors.subject}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              rows="4"
              className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.message && touched.message && (
              <p className="text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-400 transition duration-300"
            disabled={!(isValid && dirty) || loading} // Disable button if loading
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {feedback && (
            <p
              className={`mt-4 text-center ${
                feedback.includes("successfully")
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
  );
}

export default Contact;
