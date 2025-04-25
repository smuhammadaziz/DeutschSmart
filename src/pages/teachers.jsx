import React, { useState } from "react";
import Wrapper from "../shared/wrapper";
import { Linkedin, Facebook, Twitter, Award, GraduationCap, Languages, Globe, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ContactForm from "../shared/contactus";

// Extended teacher data with more details
const teachersData = [
  {
    name: "Anna Müller",
    subject: "Mathematics",
    image: "/img/teacher.jpg",
    nationality: "Germany",
    flag: "🇩🇪",
    bio: "Dr. Anna Müller holds a Ph.D. in Mathematics from Berlin University and has over 10 years of teaching experience. She specializes in making complex mathematical concepts accessible to students of all abilities.",
    experience: "10+ years",
    education: "Ph.D. in Mathematics",
    certifications: ["German Teaching License", "STEM Education Certification"],
    languages: ["German", "English", "Russian"],
    socials: {
      linkedin: "https://linkedin.com/in/anna-muller",
      facebook: "https://facebook.com/anna.muller",
      twitter: "https://twitter.com/annamaths",
    },
  },
  {
    name: "John Smith",
    subject: "Science",
    image: "/img/teacher.jpg",
    nationality: "United Kingdom",
    flag: "🇬🇧",
    bio: "John Smith is a passionate science educator with a background in Physics and Chemistry. He brings hands-on experimental learning to the classroom and encourages students to think like scientists.",
    experience: "8 years",
    education: "M.Sc. in Physics",
    certifications: ["UK Teaching Certification", "International Science Education Award"],
    languages: ["English", "German"],
    socials: {
      linkedin: "https://linkedin.com/in/johnsmith",
      facebook: "https://facebook.com/johnsmith",
      twitter: "https://twitter.com/sciencesmith",
    },
  },
  {
    name: "Laylo Karimova",
    subject: "German Language",
    image: "/img/teacher.jpg",
    nationality: "Uzbekistan",
    flag: "🇺🇿",
    bio: "Laylo Karimova has a Master's in German Linguistics and has studied in both Uzbekistan and Germany. Her innovative teaching methods combine cultural immersion with language instruction.",
    experience: "7 years",
    education: "M.A. in German Linguistics",
    certifications: ["Goethe Institute Certification", "German Language Teaching Excellence Award"],
    languages: ["Uzbek", "German", "English", "Russian"],
    socials: {
      linkedin: "https://linkedin.com/in/laylo-karimova",
      facebook: "https://facebook.com/laylo.karimova",
      twitter: "https://twitter.com/laylosprache",
    },
  },
  {
    name: "Klaus Becker",
    subject: "History",
    image: "/img/teacher.jpg",
    nationality: "Germany",
    flag: "🇩🇪",
    bio: "Klaus Becker is a historian specializing in European history with a focus on German-Central Asian relations. He brings history to life through interactive storytelling and primary source analysis.",
    experience: "12 years",
    education: "Ph.D. in History",
    certifications: ["German Historical Society Member", "International Teaching License"],
    languages: ["German", "English", "French"],
    socials: {
      linkedin: "https://linkedin.com/in/klausbecker",
      facebook: "https://facebook.com/klaus.becker",
      twitter: "https://twitter.com/klaushistory",
    },
  },
  {
    name: "Sophie Weber",
    subject: "Arts & Music",
    image: "/img/teacher.jpg",
    nationality: "Austria",
    flag: "🇦🇹",
    bio: "Sophie Weber is a multi-disciplinary artist and educator who believes in nurturing creativity across different art forms. Her classes combine traditional techniques with contemporary approaches.",
    experience: "6 years",
    education: "M.A. in Fine Arts",
    certifications: ["European Arts Education Certificate", "Music Education Diploma"],
    languages: ["German", "English", "Italian"],
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Markus Hoffmann",
    subject: "Physical Education",
    image: "/img/teacher.jpg",
    nationality: "Switzerland",
    flag: "🇨🇭",
    bio: "Markus Hoffmann is a former professional athlete who brings his expertise in sports science to physical education. He focuses on holistic physical development and teamwork skills.",
    experience: "9 years",
    education: "B.Sc. in Sports Science",
    certifications: ["International Sports Coaching License", "First Aid & Safety"],
    languages: ["German", "English", "French"],
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
];

const Teachers = () => {
  const { t } = useTranslation();
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Handle teacher selection for detailed view
  const handleTeacherClick = (index) => {
    setSelectedTeacher(selectedTeacher === index ? null : index);
  };

  // Filter teachers based on search and subject filter
  const filteredTeachers = teachersData.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.nationality.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === "all" || teacher.subject.includes(filter);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden">
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
              <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                {t("Our Educators")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t("nav7")}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {t("teach1")}
              </p>
            </motion.div>
          </div>
        </Wrapper>
      </div>

      {/* Main Content */}
      <Wrapper>
        <div className="py-16">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search teachers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-2 w-full md:w-auto overflow-x-auto">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-xl whitespace-nowrap ${filter === "all"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                All Subjects
              </button>
              <button
                onClick={() => setFilter("Math")}
                className={`px-4 py-2 rounded-xl whitespace-nowrap ${filter === "Math"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                Mathematics
              </button>
              <button
                onClick={() => setFilter("Science")}
                className={`px-4 py-2 rounded-xl whitespace-nowrap ${filter === "Science"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                Science
              </button>
              <button
                onClick={() => setFilter("German")}
                className={`px-4 py-2 rounded-xl whitespace-nowrap ${filter === "German"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                Languages
              </button>
              <button
                onClick={() => setFilter("History")}
                className={`px-4 py-2 rounded-xl whitespace-nowrap ${filter === "History"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                History
              </button>
            </div>
          </div>

          {/* Teachers Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${selectedTeacher === index ? "ring-2 ring-indigo-500" : ""
                  }`}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center">
                      {teacher.name}
                      <span className="ml-2">{teacher.flag}</span>
                    </h3>
                    <div className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full mb-2">
                      {teacher.subject}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-700 mb-4">
                    <GraduationCap size={18} className="mr-2 flex-shrink-0" />
                    <span>{teacher.education}</span>
                  </div>

                  <div className="flex items-center text-gray-700 mb-4">
                    <Award size={18} className="mr-2 flex-shrink-0" />
                    <span>{teacher.experience} experience</span>
                  </div>

                  <div className="flex items-center text-gray-700 mb-6">
                    <Languages size={18} className="mr-2 flex-shrink-0" />
                    <span>{teacher.languages.join(", ")}</span>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={teacher.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href={teacher.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Facebook size={16} />
                      </a>
                      <a
                        href={teacher.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    </div>

                    <button
                      onClick={() => handleTeacherClick(index)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${selectedTeacher === index
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                      {selectedTeacher === index ? "Close" : "View Bio"}
                    </button>
                  </div>

                  {selectedTeacher === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-100"
                    >
                      <p className="text-gray-700 mb-4">{teacher.bio}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        {teacher.certifications.map((cert, i) => (
                          <li key={i} className="text-gray-700">{cert}</li>
                        ))}
                      </ul>
                      <div className="flex items-center text-blue-600">
                        <Globe size={18} className="mr-2" />
                        <span>{teacher.nationality}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTeachers.length === 0 && (
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-600 text-lg"
              >
                No teachers found matching your search. Try different criteria.
              </motion.div>
            </div>
          )}
        </div>
      </Wrapper>

      {/* Teaching Methodology Section */}
      <section className="bg-gray-50 py-24">
        <Wrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Teaching Methodology
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              At DeutschSmart, our teachers apply proven methodologies combined with innovative approaches
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84 50.357 50.357 0 00-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">German Educational Standards</h3>
                <p className="text-gray-600">
                  We apply the systematic approach of German education with structured learning paths and clear academic goals, ensuring thorough understanding of each subject.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Student-Centered Learning</h3>
                <p className="text-gray-600">
                  Our teachers tailor their approach to each student's needs, abilities, and learning style, creating personalized learning experiences for optimal development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Application</h3>
                <p className="text-gray-600">
                  We believe in learning by doing. Our teachers integrate practical exercises, experiments, and real-world applications into every lesson to reinforce theoretical concepts.
                </p>
              </motion.div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Teachers;
