import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { ContactSchema } from "../Schemas/contactForm";
import { FaUser, FaEnvelope, FaPen, FaComment } from "react-icons/fa";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { BackgroundBeamsDemo } from "../background-animation/Bg";

const initialValues = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const { values, errors, touched, isValid, dirty, handleBlur, handleChange, handleSubmit, resetForm, setTouched } =
    useFormik({
      initialValues,
      validationSchema: ContactSchema,
      onSubmit: async (values) => {
        // Check if any field is empty
        if (!values.name || !values.email || !values.subject || !values.message) {
          setFeedback("❌ All fields are required");
          return; // stop execution
        }

        setLoading(true);
        setFeedback(""); // Clear previous feedback

        try {
          const response = await axios.post(
            "https://portfolio-backend-0hs7.onrender.com/api/contact",
            values,
            { headers: { "Content-Type": "application/json" }, withCredentials: true }
          );

          if (response.status === 200) {
            setFeedback("✅ Message sent successfully!");
            resetForm();
          } else {
            setFeedback("❌ Failed to send message. Please try again.");
          }
        } catch (error) {
          setFeedback(`❌ Something went wrong. Please try again. Error: ${error.message}`);
        } finally {
          setLoading(false);
        }
      }


    });


  return (
    <>
      <Navbar />
      <BackgroundBeamsDemo />
      <section className="py-12 px-4 min-h-screen flex flex-col items-center ">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-500 mb-8 text-center">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-4 sm:p-8 rounded-xl bg-indigo-500/20 shadow-2xl space-y-4"
        >
          {/* Name */}
          <div className="flex flex-col relative">
            <label className="text-gray-400 font-medium mb-1">Your Name</label>
            <FaUser className="absolute left-3 top-14 transform -translate-y-1/2 text-gray-600" size={16} />
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your name"
              className={`p-3 pl-10 rounded-lg outline-none ${errors.name && touched.name ? "border-2 border-red-500" : "border-2 border-transparent"
                }`}
            />
            {errors.name && touched.name && <span className="text-red-400 text-sm">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col relative">
            <label className="text-gray-400 font-medium mb-1">Your Email</label>
            <FaEnvelope className="absolute left-3 top-14 transform -translate-y-1/2 text-gray-600" size={16} />
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className={`p-3 pl-10 rounded-lg outline-none bg-gray-200 ${errors.email && touched.email ? "border-2 border-red-500" : "border-2 border-transparent"
                }`}
            />
            {errors.email && touched.email && <span className="text-red-400 text-sm">{errors.email}</span>}
          </div>

          {/* Subject */}
          <div className="flex flex-col relative">
            <label className="text-gray-400 font-medium mb-1">Subject</label>
            <FaPen className="absolute left-3 top-14 transform -translate-y-1/2 text-gray-600" size={16} />
            <input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter subject"
              className={`p-3 pl-10 rounded-lg outline-none ${errors.subject && touched.subject ? "border-2 border-red-500" : "border-2 border-transparent"
                }`}
            />
            {errors.subject && touched.subject && <span className="text-red-400 text-sm">{errors.subject}</span>}
          </div>

          {/* Message */}
          <div className="flex flex-col relative">
            <label className="text-gray-400 font-medium mb-1">Message</label>
            <FaComment className="absolute left-3 top-14 transform -translate-y-1/2 text-gray-600" size={16} />
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Write your message..."
              rows={5}
              className={`p-3 pl-10 rounded-lg outline-none resize-none ${errors.message && touched.message ? "border-2 border-red-500" : "border-2 border-transparent"
                }`}
            />
            {errors.message && touched.message && <span className="text-red-400 text-sm">{errors.message}</span>}
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-black text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Feedback */}
          {feedback && (
            <p className={`text-center mt-2 ${feedback.startsWith("✅") ? "text-green-300" : "text-red-300"}`}>
              {feedback}
            </p>
          )}
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
