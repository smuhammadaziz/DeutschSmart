import React, { useState } from "react";
import Wrapper from "../shared/wrapper";
import ContactForm from "../shared/contactus";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Shield,
  Award,
  Users,
  Clock,
  ArrowRight,
  Sparkles
} from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "€49",
    period: "/mo",
    description: "Perfect for starting your learning journey",
    features: [
      { text: "Access to 2 core courses", included: true },
      { text: "Monthly progress report", included: true },
      { text: "Support during school hours", included: true },
      { text: "German language training (A1-A2)", included: false },
      { text: "Weekly live sessions", included: false },
      { text: "1-on-1 mentorship", included: false },
    ],
    color: "bg-gradient-to-br from-slate-700 to-gray-900",
    hoverColor: "hover:from-slate-800 hover:to-gray-950",
    borderColor: "border-gray-700",
    accentColor: "bg-gray-700",
    textColor: "text-white",
    buttonStyle: "bg-white text-gray-900 hover:bg-gray-100",
    iconColor: "text-gray-300",
    popular: false
  },
  {
    name: "Standard",
    price: "€89",
    period: "/mo",
    description: "Includes German training & live support",
    features: [
      { text: "Access to 4 courses", included: true },
      { text: "Monthly progress report", included: true },
      { text: "Support during school hours", included: true },
      { text: "German language training (A1-A2)", included: true },
      { text: "Weekly live sessions", included: true },
      { text: "1-on-1 mentorship", included: false },
    ],
    color: "bg-gradient-to-br from-indigo-600 to-blue-700",
    hoverColor: "hover:from-indigo-700 hover:to-blue-800",
    borderColor: "border-indigo-600",
    accentColor: "bg-indigo-600",
    textColor: "text-white",
    buttonStyle: "bg-white text-indigo-700 hover:bg-gray-100",
    iconColor: "text-blue-300",
    popular: true
  },
  {
    name: "Premium",
    price: "€129",
    period: "/mo",
    description: "Full access with mentorship & certificate",
    features: [
      { text: "Full course access (STEM + German B1-B2)", included: true },
      { text: "Monthly progress report", included: true },
      { text: "Priority support (24/7)", included: true },
      { text: "German language training (A1-B2)", included: true },
      { text: "Weekly live sessions", included: true },
      { text: "1-on-1 mentorship", included: true },
    ],
    color: "bg-gradient-to-br from-amber-400 to-yellow-500",
    hoverColor: "hover:from-amber-500 hover:to-yellow-600",
    borderColor: "border-amber-500",
    accentColor: "bg-amber-500",
    textColor: "text-gray-900",
    buttonStyle: "bg-gray-900 text-white hover:bg-gray-800",
    iconColor: "text-amber-700",
    popular: false
  },
];

const testimonials = [
  {
    name: "Aziza Karimova",
    role: "Parent of two students",
    quote: "My children have shown remarkable progress in both German language and STEM subjects. The teachers are highly professional and supportive.",
    avatar: "/img/teacher.jpg"
  },
  {
    name: "David Schmidt",
    role: "International School Counselor",
    quote: "DeutschSmart offers one of the best value educational programs I've seen, combining German educational standards with modern teaching methods.",
    avatar: "/img/teacher.jpg"
  },
  {
    name: "Munira Tashpulatova",
    role: "Parent",
    quote: "The premium plan was worth every penny. My daughter received personalized attention and excelled in her studies. Highly recommended!",
    avatar: "/img/teacher.jpg"
  }
];

const faqs = [
  {
    question: "What's included in the core courses?",
    answer: "Core courses include German language fundamentals, basic mathematics, and introductory science. These courses form the foundation of our curriculum and follow German educational standards."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the beginning of the next billing cycle. If you upgrade mid-cycle, you'll only be charged the difference."
  },
  {
    question: "Are there any additional costs?",
    answer: "The monthly fees cover all regular educational activities. There may be additional costs for special events, field trips, or specialized materials, but these are always optional and communicated well in advance."
  },
  {
    question: "Do you offer family discounts?",
    answer: "Yes, we offer a 10% discount for siblings enrolled in our programs. Please contact our administrative office for more details and to apply for the family discount."
  },
  {
    question: "What is the cancellation policy?",
    answer: "You can cancel your subscription at any time. If you cancel mid-month, your access will continue until the end of the current billing period. We don't offer refunds for partial months."
  }
];

const Pricing = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-indigo-900 to-blue-950">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-repeat opacity-5"></div>

        <Wrapper>
          <div className="relative z-10 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-5 py-2 mb-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                {t("Simple & Transparent Pricing")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t("Invest in Your Child's Future")}
              </h1>
              <p className="text-xl text-blue-100/90 max-w-3xl mx-auto">
                Choose the plan that works best for your child's educational journey
              </p>
            </motion.div>

            {/* Pricing Toggle */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex p-1 bg-white/10 backdrop-blur-sm rounded-full">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${billingPeriod === "monthly"
                      ? "bg-white text-indigo-900"
                      : "text-white hover:bg-white/10"
                    }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod("annually")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${billingPeriod === "annually"
                      ? "bg-white text-indigo-900"
                      : "text-white hover:bg-white/10"
                    }`}
                >
                  Annually
                  <span className="ml-1 text-xs font-normal bg-green-500 text-white px-2 py-0.5 rounded-full">
                    Save 15%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Pricing Cards */}
      <section className="py-24 -mt-16 relative z-10">
        <Wrapper>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 ${plan.popular ? "ring-2 ring-indigo-500 md:-translate-y-4" : ""
                  } hover:-translate-y-2`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-xs text-white font-semibold px-3 py-1 rounded-full flex items-center z-10">
                    <Sparkles size={12} className="mr-1" />
                    Most Popular
                  </div>
                )}
                <div className={`${plan.color} ${plan.textColor} p-8 transition ${plan.hoverColor}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.textColor === 'text-white' ? 'text-white/70' : 'text-gray-800'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline mb-1">
                    <span className="text-4xl font-extrabold">
                      {billingPeriod === "annually"
                        ? `€${Math.round(parseInt(plan.price.replace('€', '')) * 0.85 * 12)}`
                        : plan.price}
                    </span>
                    <span className="text-lg ml-1 opacity-80">
                      {billingPeriod === "annually" ? "/year" : plan.period}
                    </span>
                  </div>
                  {billingPeriod === "annually" && (
                    <div className="text-xs mb-4 font-medium bg-green-500/20 text-green-100 inline-block px-2 py-1 rounded-full">
                      Save 15% with annual billing
                    </div>
                  )}
                </div>

                <div className="bg-white p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <Check size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X size={18} className="text-gray-300 mr-2.5 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3.5 rounded-xl font-medium text-base transition hover:shadow-lg ${plan.buttonStyle} flex items-center justify-center`}>
                    {t("Get Started")}
                    <ArrowRight size={16} className="ml-1.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Wrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
              {t("All Plans Include")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Benefits
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              No matter which plan you choose, you'll get these essential features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Education</h3>
              <p className="text-gray-600">
                German standards applied to all courses with certified teachers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Regular assessments and progress reports to monitor development
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Access</h3>
              <p className="text-gray-600">
                Join our diverse community of learners and educators
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Access to our digital platform for convenient learning anytime
              </p>
            </motion.div>
          </div>
        </Wrapper>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <Wrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-4">
              {t("Testimonials")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from parents whose children are thriving with our programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-indigo-500"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <Wrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-4">
              {t("FAQ")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Find answers to common questions about our programs and pricing
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white mb-4 rounded-xl overflow-hidden shadow-sm border border-gray-100 ${openFaq === index ? "shadow-md" : ""
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-medium text-lg text-gray-900">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg"
            >
              Contact Us
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </Wrapper>
      </section>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default Pricing;
