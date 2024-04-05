import Footer from '@/Components/Footer';
import React from 'react';

export default function Terms() {
  return (
    <div>
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between mx-28 my-12 rounded p-8">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

        <p className="mb-8">
          Welcome to Port Germany! These Terms of Service outline the rules and regulations for the use of our website.
        </p>

        <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>

        <p className="mb-8">
          By accessing or using Port Germany, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of the terms, please refrain from using our platform.
        </p>

        <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>

        <p className="mb-8">
          Port Germany is dedicated to creating a positive and informative space for immigrants. As a user, you agree to:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Provide accurate and complete information during registration.</li>
          <li>Respect the privacy and rights of other users.</li>
          <li>Engage in constructive and respectful interactions within the community forum.</li>
          <li>Adhere to the guidelines outlined in our Privacy Policy.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Platform Usage</h2>

        <p className="mb-8">
          Port Germany is a one-stop solution designed to offer valuable information and a vibrant community forum. You agree not to:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Violate any applicable laws or regulations.</li>
          <li>Engage in activities that could harm the integrity or performance of the platform.</li>
          <li>Attempt to gain unauthorized access to any part of the website or its related systems.</li>
          <li>Use the platform for any unlawful or prohibited purpose.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>

        <p className="mb-8">
          Port Germany encourages a diverse and supportive community. Users are expected to:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>Share information responsibly and respectfully.</li>
          <li>Refrain from posting offensive or inappropriate content.</li>
          <li>Report any violations of these Terms of Service or inappropriate conduct.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>

        <p className="mb-8">
          Port Germany reserves the right to modify or replace these Terms of Service at any time. Changes will be effective immediately upon posting. We recommend reviewing the terms periodically for updates.
        </p>

        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

        <p className="mb-8">
          For any questions or concerns regarding these Terms of Service, please contact us at <span className='text-blue-600'>mkaminska93@gmail.com</span>
        </p>
      </div>

     
    </div>
     <Footer />
    </div>
  );
}
