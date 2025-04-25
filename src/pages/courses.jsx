import React, { useState } from "react";
import Wrapper from "../shared/wrapper";
import ContactForm from "../shared/contactus";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Book,
  Users,
  Globe,
  ChevronDown,
  ChevronUp,
  Star,
  Sparkles,
  GraduationCap,
  School,
  ArrowRight
} from "lucide-react";

// Enhanced course data with more details
const coursesData = [
  {
    title: "German Language A1-B2",
    emoji: "🇩🇪",
    icon: Globe,
    description:
      "Learn to speak and understand German with certified teachers. Aligned with Goethe Institute standards.",
    color: "from-amber-400 to-yellow-500",
    textColor: "text-amber-900",
    iconBg: "bg-amber-100",
    details: [
      "Progressive learning from beginner to upper intermediate",
      "Focus on conversation, reading, writing, and listening",
      "Regular assessments aligned with European standards",
      "Cultural elements integrated into language learning"
    ],
    duration: "4 semesters",
    level: "Beginner to Upper Intermediate",
    students: "15-20 per class",
    featured: true
  },
  {
    title: "Mathematics (STEM)",
    emoji: "📐",
    icon: Book,
    description:
      "Deepen your problem-solving skills and logical thinking in our advanced math classes.",
    color: "from-rose-500 to-red-600",
    textColor: "text-white",
    iconBg: "bg-rose-100",
    details: [
      "Algebra, geometry, calculus and statistics",
      "Problem-solving approach to mathematical concepts",
      "Integration with other STEM subjects",
      "Preparation for international mathematics competitions"
    ],
    duration: "Year-round",
    level: "All levels",
    students: "12-18 per class",
    featured: false
  },
  {
    title: "Science & Experiments",
    emoji: "🔬",
    icon: Sparkles,
    description:
      "Explore the wonders of science with practical experiments and global curriculum.",
    color: "from-indigo-600 to-blue-700",
    textColor: "text-white",
    iconBg: "bg-indigo-100",
    details: [
      "Physics, chemistry, and biology integrated approach",
      "Hands-on laboratory experiments every week",
      "Field trips to scientific institutions",
      "Science fair projects and competitions"
    ],
    duration: "Year-round",
    level: "All levels",
    students: "15 per class",
    featured: false
  },
  {
    title: "Cultural Exchange Program",
    emoji: "🌍",
    icon: Globe,
    description:
      "Bridge cultures with our German-Uzbek exchange initiatives and virtual learning.",
    color: "from-blue-600 to-sky-500",
    textColor: "text-white",
    iconBg: "bg-blue-100",
    details: [
      "Virtual exchanges with German students",
      "Cultural presentations and projects",
      "Annual exchange opportunities",
      "Learning about German and European culture"
    ],
    duration: "Semester-based",
    level: "Intermediate and above",
    students: "Variable",
    featured: false
  },
  {
    title: "Art & Creativity",
    emoji: "🎨",
    icon: Star,
    description:
      "Foster imagination and self-expression through drawing, design, and German cultural projects.",
    color: "from-green-500 to-emerald-600",
    textColor: "text-white",
    iconBg: "bg-green-100",
    details: [
      "Drawing, painting, and mixed media",
      "Digital art and design basics",
      "German and European art history",
      "Regular art exhibitions and contests"
    ],
    duration: "Semester-based",
    level: "All levels",
    students: "12-15 per class",
    featured: false
  },
  {
    title: "Robotics & Coding",
    emoji: "🤖",
    icon: Sparkles,
    description:
      "Learn future-ready skills in robotics and programming through fun projects.",
    color: "from-purple-600 to-violet-700",
    textColor: "text-white",
    iconBg: "bg-purple-100",
    details: [
      "Block-based and text-based programming",
      "Robot design, construction and programming",
      "Engineering and computational thinking",
      "Team-based robotics competitions"
    ],
    duration: "Year-round",
    level: "Beginner to Advanced",
    students: "10-12 per class",
    featured: true
  },
];

const Courses = () => {
  const { t } = useTranslation();
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("elementary");

  // Toggle course details expansion
  const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  // Sample curriculum data for tabs
  const curriculumData = {
    elementary: [
      "German Language Basics (A1)",
      "Introductory Mathematics",
      "Beginning Science",
      "Art & Creative Expression",
      "Physical Education",
      "Cultural Studies"
    ],
    middle: [
      "German Language (A2-B1)",
      "Intermediate Mathematics",
      "Advanced Science & Experiments",
      "Digital Skills & Coding Basics",
      "Cultural Exchange Projects",
      "Physical Education & Teamwork"
    ],
    high: [
      "German Language (B1-B2)",
      "Advanced Mathematics",
      "Specialized Science Courses",
      "Robotics & Programming",
      "German Cultural Studies",
      "Career Preparation"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-950">
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
                {t("Discover Our Programs")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t("nav6")}
              </h1>
              <p className="text-xl text-blue-100/90 max-w-3xl mx-auto">
                {t("course1")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
              <a
                href="#featured-courses"
                className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-medium rounded-xl hover:shadow-lg transition duration-300 shadow-md flex items-center"
              >
                Explore Courses
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </Wrapper>
      </div>

      {/* Featured Courses */}
      <section id="featured-courses" className="py-24">
        <Wrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              {t("Our Curriculum")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("course2")}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t("course3")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group ${course.featured ? "ring-2 ring-yellow-400" : ""
                  }`}
              >
                {/* Course Header */}
                <div className={`bg-gradient-to-r ${course.color} p-6`}>
                  {course.featured && (
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-xs text-white font-semibold px-3 py-1 rounded-full flex items-center">
                      <Sparkles size={12} className="mr-1" />
                      Featured
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${course.iconBg} flex items-center justify-center shadow-sm`}>
                      <course.icon size={28} className="text-gray-700" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${course.textColor}`}>
                        {course.title}
                      </h3>
                      <span className="text-2xl">{course.emoji}</span>
                    </div>
                  </div>
                  <p className={`${course.textColor} opacity-90 line-clamp-2`}>
                    {course.description}
                  </p>
                </div>

                {/* Course Details */}
                <div className="bg-white p-6">
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1.5 text-gray-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Book size={16} className="mr-1.5 text-gray-500" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1.5 text-gray-500" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleCourse(index)}
                    className="w-full py-3 mt-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700 font-medium flex items-center justify-center transition-colors"
                  >
                    <span>
                      {expandedCourse === index ? "Show Less" : "Learn More"}
                    </span>
                    {expandedCourse === index ? (
                      <ChevronUp size={16} className="ml-1.5" />
                    ) : (
                      <ChevronDown size={16} className="ml-1.5" />
                    )}
                  </button>
                </div>

                {/* Expandable Section */}
                {expandedCourse === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 p-6 border-t border-gray-100"
                  >
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Course Highlights:
                    </h4>
                    <ul className="space-y-3">
                      {course.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 pt-4 border-t border-gray-200 flex justify-end">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors flex items-center">
                        Enroll Now
                        <ArrowRight size={14} className="ml-1.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 bg-gray-50">
        <Wrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-medium text-sm mb-4">
              {t("Learning Path")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Curriculum
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our curriculum is designed to provide a comprehensive education from elementary to high school
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("elementary")}
              className={`px-5 py-3 font-medium text-sm transition-colors relative ${activeTab === "elementary"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <div className="flex items-center">
                <School size={18} className="mr-2" />
                Elementary School
              </div>
              {activeTab === "elementary" && (
                <motion.div
                  layoutId="activeTabLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("middle")}
              className={`px-5 py-3 font-medium text-sm transition-colors relative ${activeTab === "middle"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <div className="flex items-center">
                <Book size={18} className="mr-2" />
                Middle School
              </div>
              {activeTab === "middle" && (
                <motion.div
                  layoutId="activeTabLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("high")}
              className={`px-5 py-3 font-medium text-sm transition-colors relative ${activeTab === "high"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <div className="flex items-center">
                <GraduationCap size={18} className="mr-2" />
                High School
              </div>
              {activeTab === "high" && (
                <motion.div
                  layoutId="activeTabLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Core Subjects
                </h3>
                <ul className="space-y-4">
                  {curriculumData[activeTab].map((subject, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{subject}</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {activeTab === "elementary"
                            ? "Foundational skills and concepts"
                            : activeTab === "middle"
                              ? "Building on fundamentals with practical applications"
                              : "Advanced concepts with college preparation focus"}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {activeTab === "elementary"
                      ? "Elementary Program (Ages 6-10)"
                      : activeTab === "middle"
                        ? "Middle School Program (Ages 11-14)"
                        : "High School Program (Ages 15-18)"}
                  </h3>
                  <p className="text-gray-600 mb-5">
                    {activeTab === "elementary"
                      ? "Our elementary program focuses on building a strong foundation in core subjects while nurturing creativity and curiosity."
                      : activeTab === "middle"
                        ? "The middle school curriculum bridges elementary and high school, introducing more specialized subjects and deeper learning."
                        : "Our high school program prepares students for higher education with advanced coursework and specialized electives."}
                  </p>
                  <div className="flex flex-col space-y-2.5">
                    <div className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2.5" />
                      <span className="text-gray-700">Small class sizes (15-20 students)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2.5" />
                      <span className="text-gray-700">Bilingual instruction (German & English)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2.5" />
                      <span className="text-gray-700">Project-based learning approach</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Wrapper>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <Wrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-4">
              {t("Why Choose Us")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Our Education
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover why DeutschSmart provides an exceptional educational experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <Globe size={30} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                German Educational Standards
              </h3>
              <p className="text-gray-600 mb-6">
                Our curriculum is based on the renowned German educational system, known for its thoroughness, high standards, and systematic approach to learning.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Structured learning progression</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Balance of theory and practical application</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Regular assessments and feedback</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                <Users size={30} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Certified Teachers & Small Classes
              </h3>
              <p className="text-gray-600 mb-6">
                Our international team of educators combines German teaching methodologies with individualized attention in small class environments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">German and international teaching certifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Small class sizes for personalized attention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Continuous professional development</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Book size={30} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Language Immersion
              </h3>
              <p className="text-gray-600 mb-6">
                Students develop strong German language skills through our immersive approach, creating a foundation for global opportunities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bilingual instruction across subjects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">German culture integration in daily activities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Preparation for international Goethe examinations</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6">
                <Star size={30} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Modern Facilities & Technology
              </h3>
              <p className="text-gray-600 mb-6">
                Our campus features state-of-the-art facilities that enhance the learning experience across all subjects.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Digital classrooms with interactive technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Science and computer laboratories</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Modern library and resource center</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg"
            >
              Enroll Your Child
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

export default Courses;
