import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CalendarDays, Clock, GraduationCap, ChevronDown } from "lucide-react";
import Wrapper from "../shared/wrapper";
import HeroSection from "../shared/hero";

const grades = Array.from({ length: 11 }, (_, i) => `${i + 1}`);

const schedules = {
  "1": [
    ["Monday", "Math", "Reading", "Drawing", "Science"],
    ["Wednesday", "Math", "PE", "Writing", "Literature"],
    ["Thursday", "Math", "PE", "Writing", "History"],
    ["Friday", "Math", "PE", "Writing", "Geography"],
    ["Saturday", "Math", "PE", "Writing", "Art"],
    ["Sunday", "Math", "PE", "Writing", "Music"],
  ],
  "2": [
    ["Monday", "Math", "Reading", "Drawing", "Science"],
    ["Wednesday", "Math", "PE", "Writing", "Literature"],
    ["Thursday", "Math", "PE", "Writing", "History"],
    ["Friday", "Math", "PE", "Writing", "Geography"],
    ["Saturday", "Math", "PE", "Writing", "Art"],
    ["Sunday", "Math", "PE", "Writing", "Music"],
  ],
  "11": [
    ["Monday", "Math", "Reading", "Drawing", "Science"],
    ["Wednesday", "Math", "PE", "Writing", "Literature"],
    ["Thursday", "Math", "PE", "Writing", "History"],
    ["Friday", "Math", "PE", "Writing", "Geography"],
    ["Saturday", "Math", "PE", "Writing", "Art"],
    ["Sunday", "Math", "PE", "Writing", "Music"],
  ],
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const LessonSchedule = () => {
  const { t } = useTranslation();
  const [selectedGrade, setSelectedGrade] = useState("1");
  const [expandedDay, setExpandedDay] = useState(null);

  const toggleDay = (dayIndex) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
  };

  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <HeroSection
          backgroundImage="/img/aboutBg.JPG"
          title={t("nav8")}
          description={t("tt1")}
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-5 h-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">
              {t("Select Grade Level")}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {grades.map((grade, idx) => {
              const isSelected = selectedGrade === grade;

              return (
                <motion.button
                  key={grade}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold border shadow-md transition-all
                    ${isSelected
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white border-yellow-500"
                      : "bg-white text-gray-700 border-gray-200 hover:border-yellow-400"}`}
                  onClick={() => setSelectedGrade(grade)}
                >
                  {t("Grade")} {grade}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {schedules[selectedGrade]?.map((daySchedule, dayIndex) => (
            <motion.div
              key={dayIndex}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleDay(dayIndex)}
              >
                <div className="flex items-center">
                  <CalendarDays className="w-5 h-5 text-yellow-500 mr-3" />
                  <h3 className="font-medium text-gray-800">{daySchedule[0]}</h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedDay === dayIndex ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: expandedDay === dayIndex ? "auto" : 0,
                  opacity: expandedDay === dayIndex ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 space-y-3">
                  {daySchedule.slice(1).map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className="flex items-center p-3 rounded-lg bg-gray-50 border-l-4 border-yellow-400"
                    >
                      <Clock className="w-4 h-4 text-gray-500 mr-3" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{t("tt3")} {lessonIndex + 1}</p>
                        <p className="text-sm text-gray-600">{lesson}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}

          {!schedules[selectedGrade] && (
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow p-8 text-center"
            >
              <p className="text-gray-500">{t("No schedule available for this grade.")}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default LessonSchedule;
