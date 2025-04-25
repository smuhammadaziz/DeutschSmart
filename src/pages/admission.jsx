import React, { useState } from "react";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Calendar, Clipboard, CheckCircle, FileText, Map, Phone, Mail, User, School, MessageSquare } from "lucide-react";
import HeroSection from "../shared/hero";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Admissions = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    grade: "",
    note: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Submitted: ", form);
      setSubmitted(true);
      setLoading(false);
      setForm({ fullName: "", phone: "", grade: "", note: "" });
    }, 1500);
  };

  const admissionSteps = [
    {
      title: t("adm4") + " - " + t("Step 1"),
      icon: <FileText className="w-6 h-6" />,
      description: t("Fill out the online application form with your personal information and contact details"),
      active: currentStep >= 1
    },
    {
      title: t("Document Verification"),
      icon: <Clipboard className="w-6 h-6" />,
      description: t("Submit all required documents for verification by the admissions team"),
      active: currentStep >= 2
    },
    {
      title: t("Entrance Examination"),
      icon: <School className="w-6 h-6" />,
      description: t("Take the entrance examination to assess your academic readiness"),
      active: currentStep >= 3
    },
    {
      title: t("Final Decision"),
      icon: <CheckCircle className="w-6 h-6" />,
      description: t("Receive the final decision on your application and complete enrollment if accepted"),
      active: currentStep >= 4
    }
  ];

  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <HeroSection
          backgroundImage="/img/header2.JPG"
          title={t("nav2")}
          description={t("adm1")}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto my-12"
        >
          {/* Admission Timeline */}
          <motion.div variants={fadeIn} className="relative mb-16">
            <div className="flex items-center justify-center mb-8">
              <Calendar className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">{t("adm2")}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-400"
              >
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-2 mr-4">
                    <Calendar className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">1-may – 30-iyun 2025</h3>
                    <p className="text-gray-600">Hujjatlar topshirish muddati</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-400"
              >
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-2 mr-4">
                    <Calendar className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Iyul oyi</h3>
                    <p className="text-gray-600">Kirish imtihonlari o'tkaziladi</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Required Documents */}
          <motion.div variants={fadeIn} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Clipboard className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">{t("adm3")}</h2>
            </div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <ul className="space-y-4">
                {[
                  "O'quvchining tug'ilganlik guvohnomasi nusxasi",
                  "So'nggi yillik baholar (agar mavjud bo'lsa)",
                  "Ota-onaning pasport nusxasi",
                  "Onlayn ariza shaklini to'ldirish"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="bg-yellow-100 rounded-full p-1.5 mr-3">
                      <CheckCircle className="w-4 h-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Admission Process */}
          <motion.div variants={fadeIn} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <FileText className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">{t("adm4")}</h2>
            </div>

            <div className="relative">
              <div className="absolute left-[35px] top-0 bottom-0 w-1 bg-gray-200 rounded-full"></div>

              <div className="space-y-8">
                {admissionSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="flex"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        backgroundColor: step.active ? "#facc15" : "#e5e7eb"
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: step.active ? 0 : 0
                      }}
                      className={`z-10 flex items-center justify-center w-[70px] h-[70px] rounded-full ${step.active ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                    >
                      {step.icon}
                    </motion.div>
                    <div className="ml-6 pt-3">
                      <h3 className={`font-semibold text-lg ${step.active ? "text-gray-800" : "text-gray-500"
                        }`}>
                        {step.title}
                      </h3>
                      <p className={`mt-1 ${step.active ? "text-gray-600" : "text-gray-400"
                        }`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            variants={fadeIn}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8">
              <h2 className="text-2xl font-bold text-white text-center">
                {t("adm5")}
              </h2>
              <p className="text-yellow-100 text-center mt-2">
                {t("Fill out the form below to start your application process")}
              </p>
            </div>

            <div className="p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <motion.div
                    animate={{
                      scale: [0.8, 1.2, 1],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {t("Application Submitted!")}
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    {t("Your application has been successfully submitted. Our admissions team will contact you soon.")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="flex items-center text-gray-700 mb-2 font-medium">
                      <User className="w-4 h-4 mr-2 text-yellow-500" />
                      {t("adm6")}
                    </label>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) =>
                        setForm({ ...form, fullName: e.target.value })
                      }
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder={t("Enter your full name")}
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-gray-700 mb-2 font-medium">
                      <Phone className="w-4 h-4 mr-2 text-yellow-500" />
                      {t("adm7")}
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      placeholder="+998 90 123 45 67"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-gray-700 mb-2 font-medium">
                      <School className="w-4 h-4 mr-2 text-yellow-500" />
                      {t("Grade Level")}
                    </label>
                    <select
                      value={form.grade}
                      onChange={(e) => setForm({ ...form, grade: e.target.value })}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="">{t("adm8")}</option>
                      {[...Array(11)].map((_, i) => (
                        <option key={i + 1} value={`${i + 1}-sinf`}>
                          {i + 1}-{t("adm9")}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center text-gray-700 mb-2 font-medium">
                      <MessageSquare className="w-4 h-4 mr-2 text-yellow-500" />
                      {t("adm10")}
                    </label>
                    <textarea
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      rows={4}
                      placeholder={t("Any additional information you'd like to share")}
                    ></textarea>
                  </div>

                  <div className="text-center pt-4">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md
                        ${loading ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg"}`}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t("Processing...")}
                        </span>
                      ) : (
                        t("adm11")
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-8 mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t("adm12")}</h3>
              </div>
              <div className="space-y-3 ml-16">
                <p className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-2 text-gray-500" />
                  <a href="tel:+99877 454 00 50" className="hover:text-yellow-600 transition-colors">
                    +998 77 454 00 50
                  </a>
                </p>
                <p className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-2 text-gray-500" />
                  <a
                    href="mailto:deutschsmartschool@gmail.com"
                    className="hover:text-yellow-600 transition-colors"
                  >
                    deutschsmartschool@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Map className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t("adm13")}</h3>
              </div>
              <div className="space-y-3 ml-16">
                <p className="text-gray-700">
                  Mustaqillik ko'chasi 45, Tashkent, Uzbekistan
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeIn}
            className="mt-8 bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <div className="w-full h-[400px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2997.6565364313738!2d69.326168!3d41.294579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzQwLjUiTiA2OcKwMTknMzQuMiJF!5e0!3m2!1sen!2s!4v1745252920306!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy=""
                className="border-0"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default Admissions;
