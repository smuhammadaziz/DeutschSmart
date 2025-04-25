import React, { useState, useEffect } from "react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const FaqSection = () => {
  const { t, i18n } = useTranslation();
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get("http://178.128.105.37:8000/api/faqs/");
        const lang = i18n.language;

        const localizedFaqs = res.data.map((item) => ({
          question: item[`question_${lang}`],
          answer: item[`answer_${lang}`],
        }));

        setFaqs(localizedFaqs);
      } catch (error) {
        console.error("Failed to fetch FAQs", error);
      }
    };

    fetchFaqs();
  }, [i18n.language]);

  return (
    <Wrapper>
      <div className="py-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("faq1")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our educational programs and enrollment process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left p-6 flex justify-between items-center rounded-xl transition-all duration-300
                  ${activeIndex === index
                    ? 'bg-gradient-to-r from-indigo-50 to-blue-50 shadow-md'
                    : 'bg-white hover:bg-gray-50 border border-gray-100'
                  }`}
                aria-expanded={activeIndex === index}
              >
                <span className="font-semibold text-lg mr-4 text-gray-900">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                  {activeIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 py-5 bg-white border-l border-r border-b border-gray-100 text-gray-700 rounded-b-xl leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 pt-6 border-t border-gray-100" data-aos="fade-up">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium rounded-lg transition-colors duration-200"
          >
            Contact us
            <ChevronDown size={16} className="ml-2 rotate-270" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default FaqSection;
