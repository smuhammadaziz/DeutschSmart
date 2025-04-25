import React from "react";
import ContactForm from "../shared/contactus";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Target, BookOpen, Sparkles } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: t("about3"),
      description: t("about4"),
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("about5"),
      description: t("about6"),
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t("about7"),
      description: t("about8"),
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "School Foundation",
      description: "DeutschSmart was established with a vision to bring German educational standards to Uzbekistan",
    },
    {
      year: "2018",
      title: "German Certification",
      description: "Received official certification from the German Education Ministry",
    },
    {
      year: "2020",
      title: "STEM Program Launch",
      description: "Expanded our curriculum to include comprehensive STEM programs",
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Introduced advanced digital learning tools and expanded our online presence",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 bg-gradient-to-r from-indigo-900 to-blue-800 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-repeat opacity-5"></div>

        <Wrapper>
          <div className="relative z-10 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t("nav1")}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {t("about1")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex justify-center space-x-6 mt-16"
            >
              <div className="flex items-center text-white">
                <CheckCircle className="mr-2 text-yellow-400" />
                <span>German Standards</span>
              </div>
              <div className="flex items-center text-white">
                <Award className="mr-2 text-yellow-400" />
                <span>Certified Teachers</span>
              </div>
              <div className="flex items-center text-white">
                <Target className="mr-2 text-yellow-400" />
                <span>Modern Curriculum</span>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </div>

      {/* About Us Section */}
      <section className="py-24">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("about2")}
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At DeutschSmart, we bring the excellence of German education to Uzbekistan. Our school combines traditional German educational methods with modern teaching approaches, creating a unique learning environment where students can thrive academically and personally.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We believe that education is more than just academics – it's about developing well-rounded individuals who are prepared for the challenges of the future. That's why our curriculum emphasizes both strong academic foundations and essential life skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium">German Language</div>
                <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium">STEM Education</div>
                <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium">Arts & Music</div>
                <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium">Sports Programs</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-lg opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-lg opacity-20"></div>
                <img
                  src="/img/aboutBg.JPG"
                  alt="About DeutschSmart"
                  className="rounded-2xl w-full relative z-10 shadow-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <Wrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our educational philosophy is built on these pillars that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-lg ${value.color} flex items-center justify-center mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <Wrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A look at how DeutschSmart has evolved over the years
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-blue-600"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-indigo-500 z-10"></div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default About;
