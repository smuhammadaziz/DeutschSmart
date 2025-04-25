import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mt-10 min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg.jpg"
          alt="Education background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-500 rounded-full blur-[120px] opacity-20" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              {t("Welcome to DeutschSmart")}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              {t("hero1")}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
              {t("hero2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#admission"
              className="inline-flex items-center px-6 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-xl transition duration-300 shadow-lg shadow-yellow-500/20 transform hover:translate-y-[-2px]"
            >
              {t("hero3")}
              <ChevronRight size={18} className="ml-1" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center px-6 py-3.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium rounded-xl transition duration-300 border border-white/20"
            >
              {t("Explore Programs")}
            </a>
          </motion.div>

          {/* Stats or Accreditations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-16 flex items-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-yellow-400">✓</span>
              </div>
              <span>Certified Teachers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-yellow-400">✓</span>
              </div>
              <span>German Standards</span>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute mt-10 bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-10">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg className="animate-bounce w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
