import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook
import { Link } from "react-router-dom";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can implement the actual form submission logic, e.g., send the data to an API or email
        console.log("Form submitted", formData);
        setFormSubmitted(true); // Show the success message
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear the form
    };

    // Function to navigate to the home page
    const goBack = () => {
        navigate("/"); // This will navigate to the home page
    };

    return (
        <section id="contact" className="py-12 bg-gray-400">
            <div className="absolute top-2 left-4 ">
                {/* Back to Home Button */}
                <Link
                    to="/"
                    className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 flex items-center space-x-2"
                >

                    {/* Font Awesome Icon */}
                    <i className="fas fa-arrow-left "></i> 
                </Link>
            </div>

            <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Contact Me</h2>
            <div className="container mx-auto flex flex-col items-center">


                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-700 font-medium">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full p-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Success Message */}
                {formSubmitted && (
                    <div className="mt-6 text-green-600 font-semibold text-center">
                        Your message has been sent successfully! I'll get back to you soon.
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact;
