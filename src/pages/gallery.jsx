import React, { useState } from "react";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image, GraduationCap, Palette, Users, Music, Camera } from "lucide-react";
import HeroSection from "../shared/hero";

const galleryImages = [
  {
    id: 1,
    src: "/img/life2.jpg",
    category: "school-life",
    title: "Science Fair Projects",
    alt: "Students presenting their science fair projects"
  },
  {
    id: 2,
    src: "/img/life.webp",
    category: "events",
    title: "Annual Sports Day",
    alt: "Students participating in sports day activities"
  },
  {
    id: 3,
    src: "/img/life.webp",
    category: "art",
    title: "Art Exhibition",
    alt: "Student artwork on display"
  },
  {
    id: 4,
    src: "/img/life2.jpg",
    category: "academic",
    title: "Graduation Ceremony",
    alt: "Students at graduation ceremony"
  },
  {
    id: 5,
    src: "/img/life2.jpg",
    category: "events",
    title: "Cultural Festival",
    alt: "Students performing at cultural festival"
  },
  {
    id: 6,
    src: "/img/life.webp",
    category: "school-life",
    title: "Classroom Activities",
    alt: "Students engaged in classroom activities"
  },
  {
    id: 7,
    src: "/img/life.webp",
    category: "academic",
    title: "Library Study Session",
    alt: "Students studying in the library"
  },
  {
    id: 8,
    src: "/img/life2.jpg",
    category: "art",
    title: "Music Performance",
    alt: "Student music performance"
  },
  {
    id: 9,
    src: "/img/life.webp",
    category: "school-life",
    title: "Lunch Break",
    alt: "Students during lunch break"
  },
  {
    id: 10,
    src: "/img/life2.jpg",
    category: "events",
    title: "Welcome Day",
    alt: "New student welcome day"
  },
];

const categories = [
  { id: "all", name: "All Photos", icon: <Camera /> },
  { id: "school-life", name: "School Life", icon: <Users /> },
  { id: "academic", name: "Academic", icon: <GraduationCap /> },
  { id: "art", name: "Art & Music", icon: <Palette /> },
  { id: "events", name: "Events", icon: <Music /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <HeroSection
          backgroundImage="/img/aboutBg.JPG"
          title={t("nav4")}
          description={t("gallery1")}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="my-10"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all
                  ${selectedCategory === category.id
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md border-yellow-500"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-yellow-400"}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="w-4 h-4">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filteredImages.map((img, i) => (
                <motion.div
                  layout
                  key={img.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="overflow-hidden rounded-xl shadow-md group cursor-pointer break-inside-avoid relative"
                  onClick={() => setSelectedImage(img)}
                >
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover rounded-xl"
                    style={{
                      height: `${280 + (i % 3) * 60}px`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium text-lg">{img.title}</h3>
                    <p className="text-yellow-300 text-sm">{categories.find(c => c.id === img.category)?.name}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Image className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-1">No images found</h3>
              <p className="text-gray-500">No photos in this category yet.</p>
            </motion.div>
          )}

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10"
                onClick={() => setSelectedImage(null)}
              >
                <motion.button
                  className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/40 hover:bg-black/60 z-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="max-w-4xl max-h-[80vh] relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 rounded-b-lg">
                    <h2 className="text-white text-xl font-semibold mb-1">{selectedImage.title}</h2>
                    <p className="text-yellow-300">{categories.find(c => c.id === selectedImage.category)?.name}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default Gallery;
