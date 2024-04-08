import Footer from "@/Components/Footer";
import React from "react";


export default function Policy() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-between mx-28 my-12 rounded p-8">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <p className="mb-8">
            At Port Germany, we are committed to ensuring the privacy and
            security of our users. This privacy policy outlines how we collect,
            use, and protect the information you provide when using our website.
          </p>

          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

          <p className="mb-4">We may collect the following information:</p>

          <ul className="list-disc list-inside mb-8">
            <li>Your name and contact information</li>
            <li>Demographic information</li>
            <li>
              Other information relevant to customer surveys and/or offers
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">
            How We Use the Information
          </h2>

          <p className="mb-4">
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>

          <ul className="list-disc list-inside mb-8">
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
            <li>
              Sending promotional emails about new products, special offers, or
              other information which we think you may find interesting
            </li>
            <li>Conducting market research to enhance your experience</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Security</h2>

          <p className="mb-8">
            We are dedicated to ensuring that your information is secure. To
            prevent unauthorized access or disclosure, we have implemented
            suitable physical, electronic, and managerial procedures to
            safeguard and secure the information we collect online.
          </p>

          <h2 className="text-2xl font-bold mb-4">Cookies</h2>

          <p className="mb-8">
            A cookie is a small file that asks permission to be placed on your
            computer&apos;s hard drive. Cookies help us analyze web traffic and
            customize our site to your needs. You can choose to accept or
            decline cookies, but it may affect certain features of our platform.
          </p>

          <h2 className="text-2xl font-bold mb-4">Links to Other Websites</h2>

          <p className="mb-8">
            Our website may contain links to other websites. Please be aware
            that we do not have control over the privacy practices of these
            external sites. We encourage you to review their privacy policies
            before providing any personal information.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Controlling Your Personal Information
          </h2>

          <p className="mb-4">
            You have the option to control the collection and use of your
            personal information:
          </p>

          <ul className="list-disc list-inside mb-8">
            <li>
              If you&apos;ve opted for direct marketing, you can change your
              preferences at any time by contacting us at mkaminska93@gmail.com
            </li>
            <li>
              We do not sell, distribute, or lease your personal information to
              third parties without your permission, unless required by law. You
              may receive promotional information about third parties if you
              indicate your interest.
            </li>
            <li>
              To obtain details of the personal information we hold about you,
              or if you believe any information is incorrect, please write to us
              at mkaminska93@gmail.com
            </li>
          </ul>

          <p className="mb-8">
            This privacy policy is subject to change without notice. We
            recommend reviewing it periodically for any updates.
          </p>
        </div>
      </div>
<Footer/>
    </div>
  );
}
