import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">Chatterly</span>, your privacy is important to us. 
          This Privacy Policy explains how we collect, use, and protect your information when you use our app.
        </p>

        <h2 className="text-xl font-semibold text-indigo-500 mt-6 mb-2">Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect personal information such as your name, email address, profile information, and messages that you share within the app.
        </p>

        <h2 className="text-xl font-semibold text-indigo-500 mt-6 mb-2">How We Use Information</h2>
        <p className="text-gray-700 mb-4">
          We use your information to provide and improve our services, communicate with you, and ensure the safety and security of our community.
        </p>

        <h2 className="text-xl font-semibold text-indigo-500 mt-6 mb-2">Sharing of Information</h2>
        <p className="text-gray-700 mb-4">
          We do not sell or share your personal information with third parties except to comply with legal obligations or protect our rights.
        </p>

        <h2 className="text-xl font-semibold text-indigo-500 mt-6 mb-2">Cookies and Tracking</h2>
        <p className="text-gray-700 mb-4">
          Our app may use cookies and similar tracking technologies to enhance your experience and analyze app usage.
        </p>

        <h2 className="text-xl font-semibold text-indigo-500 mt-6 mb-2">Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You can access, update, or delete your personal information at any time by contacting us. We respect your privacy choices.
        </p>

        <h2 className="text-xl font-semibold text-indigo-500 mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns regarding this Privacy Policy, please contact us at{" "}
          <a href="mailto:arafat.rahman.6003@gmail.com" className="text-indigo-600 hover:underline">
            arafat.rahman.6003@gmail.com
          </a>.
        </p>

        <p className="text-gray-500 text-sm mt-6 text-center">
          © {new Date().getFullYear()} Chatterly. All rights reserved.
        </p>
      </div>
    </div>
  );
}
