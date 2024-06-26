
import React, { useState } from "react";
import Footer from "@/Components/Footer";
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

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const constructMailtoLink = () => {
    const { name, email, subject, message } = formData;
    const body = `Full Name: ${name}%0AEmail Address: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    return `mailto:mkaminska93@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 sm:p-10 bg-blue-50">
        <h1 className="text-3xl sm:text-5xl mb-4 font-semibold text-center">Contact Us!</h1>
        <p className="bg-blue-50 mb-6 sm:mb-12 p-4 sm:p-8 mx-4 sm:mx-10 text-base sm:text-xl text-center"> 
          Welcome to our Contact Us page! We are thrilled that you are considering reaching out to us. Whether you have a question, comment, or just want to say hello, we are here and eager to hear from you. Your feedback is invaluable to us as we strive to improve and provide you with the best possible experience.
        </p> 
        <div className="mx-auto w-full max-w-lg sm:max-w-xl border shadow-2xl shadow-blue-950 border-solid p-6 sm:p-12 rounded border-black">
          <form action="submit" method="POST" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="mb-1 block text-sm sm:text-base font-medium font-semibold"
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
                className="w-full rounded-md border border-black bg-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="mb-1 block text-sm sm:text-base font-medium font-semibold"
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
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="subject"
                className="mb-1 block text-sm sm:text-base font-medium font-semibold"
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
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="message"
                className="mb-1 block text-sm sm:text-base font-medium font-semibold"
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
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div className="text-center">
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
