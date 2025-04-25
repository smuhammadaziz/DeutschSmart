import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Twitter } from "lucide-react";

const teachers = [
  {
    name: "Anna Müller",
    subject: "Mathematics",
    image: "/img/teacher.jpg",
    description:
      "Passionate about numbers and logic with 10+ years of experience.",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    }
  },
  {
    name: "Lukas Schmidt",
    subject: "Science",
    image: "/img/teacher.jpg",
    description:
      "Dedicated to making science fun and practical for all students.",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    }
  },
  {
    name: "Sophie Becker",
    subject: "Languages",
    image: "/img/teacher.jpg",
    description:
      "Linguistics expert fluent in 4 languages, loves cultural exchange.",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    }
  },
  {
    name: "Klaus Weber",
    subject: "Arts & Music",
    image: "/img/teacher.jpg",
    description: "Creative mind with a passion for inspiring young artists.",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    }
  },
];

const CertifiedTeachers = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
          Our Team
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Certified Teachers
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Learn from the best — qualified professionals with years of experience in education.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teachers.map((teacher, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Image with overlay */}
            <div className="relative overflow-hidden">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Social media links */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <a
                    href={teacher.socials.linkedin}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={teacher.socials.facebook}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={teacher.socials.twitter}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {teacher.name}
              </h3>
              <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full mb-3">
                {teacher.subject}
              </div>
              <p className="text-gray-600 text-sm">
                {teacher.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/teachers"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          View all teachers
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CertifiedTeachers;
