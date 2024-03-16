import Footer from "@/components/Footer";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct your email body here using formData
    const emailBody = `
      Full Name: ${formData.name}
      Email Address: ${formData.email}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `;
    // Log the email body
    console.log("Email body:", emailBody);

    // Now you can use a library or send a request to your server to handle the email sending

    // Clear form data after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const constructMailtoLink = () => {
    const { name, email, subject, message } = formData;
    const body = `\nFull Name: ${name}\nEmail Address: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    return `mailto:mkaminska93@gmail.com?subject=${encodeURIComponent(
      subject
    )} ${encodeURIComponent(body)}`;
  };

  return (
    <>

    <div className="flex flex-col items-center justify-center p-28  bg-blue-50">
      <h1 className="text-5xl mb-4 font-semibold">Contact Us!</h1>
        <p className="bg-blue-50 mb-12 p-8 mx-72 text-xl"> 
         Welcome to our Contact Us page! We're thrilled that you're
        considering reaching out to us. Whether you have a question, comment, or
        just want to say hello, we're here and eager to hear from you. Your
        feedback is invaluable to us as we strive to improve and provide you
        with the best possible experience.
    </p> 
      <div className="mx-auto w-full max-w-[600px] border shadow-2xl shadow-blue-950 border-solid p-12 rounded border-black">
        <form action="submit" method="POST" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium font-semibold"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium font-semibold"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium font-semibold"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium font-semibold"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <a
              href={constructMailtoLink()}
              aria-label="Send mail"
              className="font-semibold bg-amber-400 py-2 px-4 rounded text-white hover:text-black"
            >
              Send mail
            </a>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}
