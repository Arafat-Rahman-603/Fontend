import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" ,app:"chatterly"});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const baseUrl = "https://get-mail-backend.onrender.com";
      const res = await fetch(`${baseUrl}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" ,app:"chatterly"});
      } else {
        alert("Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending email.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-600 text-center">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Have questions or feedback? Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 md:p-8 rounded-xl shadow-md space-y-6"
      >
        {submitted && (
          <div className="bg-green-100 text-green-800 p-3 rounded-md text-center">
            Thank you! Your message has been sent.
          </div>
        )}

        <div>
          <label className="block mb-2 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Write your message here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      <p className="mt-2 text-2xl">Or</p>
      <a href="mailto:arafat.rahman.6003@gmail.com"
       className="border-2 rounded-2xl font-bold p-2 mt-2 text-[1.2rem] border-indigo-600 text-indigo-600 hover:scale-95 transition-all hover:bg-indigo-600 hover:text-white">contact@chatterly.com</a>
    </div>
  );
}
