import React, { useState } from "react";
import Wrapper from "./wrapper";
import { useTranslation } from "react-i18next";
import { Send, Check, AlertCircle, Mail, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'
  const [error, setError] = useState("");

  const BOT_TOKEN = "";
  const CHAT_ID = "";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const text = `📬 New Message from School Website\n\n👤 Name: ${form.name}\n📧 Email: ${form.email}\n📝 Message: ${form.message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setError("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <Wrapper>
      <div id="contact" className="py-20">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
            {t("Contact Us")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("getin1")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("getin2")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Left: Illustration */}
            <div className="lg:w-5/12 bg-gradient-to-br from-indigo-500 to-blue-600 p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10 text-white">
                <img
                  src="/img/getintouch.png"
                  alt="Contact Us"
                  className="mx-auto mb-10 max-w-full h-auto drop-shadow-xl w-64"
                />

                <h3 className="text-2xl font-bold mb-6">We'd love to hear from you</h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <Mail size={18} />
                    </div>
                    <a href="mailto:deutschsmartschool@gmail.com" className="hover:underline">
                      deutschsmartschool@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <a href="tel:+99877 454 00 50" className="hover:underline">
                      +998 77 454 00 50
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-7/12 p-8 md:p-12">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <Check size={36} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center mb-8">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus(null)}
                    className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 flex items-start mb-6">
                      <AlertCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                      <p>{error}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                      {t("getin3")}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                      {t("getin4")}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                      {t("getin5")}
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-4 pointer-events-none">
                        <MessageSquare size={18} className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`w-full bg-gray-900 hover:bg-black text-white py-3.5 rounded-xl font-medium flex items-center justify-center transition-all duration-300 ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t("Sending...")}
                      </>
                    ) : (
                      <>
                        {t("getin6")}
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
