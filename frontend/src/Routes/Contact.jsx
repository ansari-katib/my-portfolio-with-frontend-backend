import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { ContactSchema } from "../Schemas/contactForm";
import { TextField, Button, Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// Custom theme for the form colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#6200ea", // Your desired primary color
    },
    secondary: {
      main: "#03dac6", // Your secondary color
    },
    error: {
      main: "#d32f2f", // Error color
    },
    background: {
      default: "#121212", // Dark background
    },
  },
});

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

      console.log(values);

      const URL = "https://pbackend.up.railway.app/api/contact"
      try {
        const response = await axios.post(URL,
          // "http://localhost:5000/api/contact",
          values,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
          },
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
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <section
        id="contact"
        className="py-12 min-h-screen"
        style={{ backgroundColor: theme.palette.background.default }}
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

        <Typography
          variant="h4"
          align="center"
          color="primary"
          gutterBottom
        >
          Contact Me
        </Typography>

        <Container maxWidth="sm">
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Name Field */}
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Your Name"
              variant="outlined"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.name && touched.name)}
              helperText={errors.name && touched.name ? errors.name : ""}
              margin="normal"
            />

            {/* Email Field */}
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Your Email"
              variant="outlined"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.email && touched.email)}
              helperText={errors.email && touched.email ? errors.email : ""}
              margin="normal"
            />

            {/* Subject Field */}
            <TextField
              fullWidth
              id="subject"
              name="subject"
              label="Subject"
              variant="outlined"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.subject && touched.subject)}
              helperText={errors.subject && touched.subject ? errors.subject : ""}
              margin="normal"
            />

            {/* Message Field */}
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.message && touched.message)}
              helperText={errors.message && touched.message ? errors.message : ""}
              margin="normal"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!(isValid && dirty) || loading}
              style={{ marginTop: "20px" }}
            >
              {loading ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                "Send Message"
              )}
            </Button>

            {/* Feedback Message */}
            {feedback && (
              <Typography
                variant="body2"
                align="center"
                style={{
                  marginTop: "20px",
                  color: feedback.startsWith("✅") ? "green" : "red",
                }}
              >
                {feedback}
              </Typography>
            )}
          </form>
        </Container>
      </section>
      <Footer />
    </ThemeProvider>
  );
}

export default Contact;
