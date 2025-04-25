import React, { useState } from "react";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Tag } from "lucide-react";
import HeroSection from "../shared/hero";

const newsArticles = [
  {
    id: 1,
    title: "School Science Fair Winners Announced",
    date: "April 12, 2025",
    category: "Events",
    description:
      "Congratulations to all the students who participated in the annual science fair! Here are the winners and highlights from this year's incredible projects.",
    image: "/img/news.jpg",
  },
  {
    id: 2,
    title: "New Library Opening Next Week",
    date: "April 10, 2025",
    category: "Announcements",
    description:
      "We are excited to announce the opening of our newly renovated library with modern facilities and more books! Join us for the ribbon cutting ceremony.",
    image: "/img/news.jpg",
  },
  {
    id: 3,
    title: "German Language Club Starts New Semester",
    date: "April 8, 2025",
    category: "Activities",
    description:
      "The new semester of the German Language Club is starting with exciting programs and a guest speaker from Germany. All students are welcome to join.",
    image: "/img/news.jpg",
  },
  {
    id: 4,
    title: "Mathematics Competition Results",
    date: "April 5, 2025",
    category: "Achievements",
    description:
      "Our students achieved outstanding results in the regional mathematics competition. Special congratulations to our top performers in various categories.",
    image: "/img/news.jpg",
  },
  {
    id: 5,
    title: "Summer Camp Registration Now Open",
    date: "April 1, 2025",
    category: "Announcements",
    description:
      "Registration for our annual summer camp is now open! This year's program includes outdoor activities, arts and crafts, and educational workshops.",
    image: "/img/news.jpg",
  },
];

const categories = ["All", ...new Set(newsArticles.map(news => news.category))];

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const NewsPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredNews = selectedCategory === "All"
    ? newsArticles
    : newsArticles.filter(news => news.category === selectedCategory);

  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <HeroSection
          backgroundImage="/img/aboutBg.JPG"
          title={t("nav3")}
          description={t("news1")}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 mt-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                  ${selectedCategory === category
                    ? "bg-yellow-400 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-yellow-400"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredNews.map((news) => (
              <motion.div
                key={news.id}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(news.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 relative"
              >
                {news.image && (
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <motion.img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredCard === news.id ? 1.05 : 1
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {news.category}
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-gray-500 mb-3 text-sm">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    <span>{news.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {news.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-yellow-500 font-medium text-sm mt-auto"
                  >
                    {t("Read More")}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No news found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default NewsPage;
