import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  BookOpenCheck,
  Users,
  School,
  Paintbrush,
  Dumbbell,
} from "lucide-react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeOffer = () => {
  const { t } = useTranslation();

  const offerings = [
    {
      icon: BookOpenCheck,
      title: t("offer5"),
      description: t("offer6"),
      color: "from-rose-500 to-orange-500",
      delay: 100,
    },
    {
      icon: ShieldCheck,
      title: t("offer3"),
      description: t("offer4"),
      color: "from-amber-500 to-yellow-400",
      delay: 200,
    },
    {
      icon: Users,
      title: t("offer7"),
      description: t("offer8"),
      color: "from-teal-500 to-emerald-500",
      delay: 300,
    },
    {
      icon: School,
      title: t("offer9"),
      description: t("offer10"),
      color: "from-sky-500 to-blue-500",
      delay: 400,
    },
    {
      icon: Paintbrush,
      title: t("offer11"),
      description: t("offer12"),
      color: "from-violet-500 to-purple-500",
      delay: 500,
    },
    {
      icon: Dumbbell,
      title: t("offer13"),
      description: t("offer14"),
      color: "from-rose-500 to-pink-500",
      delay: 600,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <Wrapper>
      <section id="offerings" className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 font-medium text-sm mb-4" data-aos="fade-up">
            {t("What Sets Us Apart")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">
            {t("offer1")}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {t("offer2")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              {/* Background gradient decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-xl transform translate-x-1/3 -translate-y-1/3 group-hover:opacity-20 transition-all duration-500`}></div>

              <div className="relative">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <item.icon size={28} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="flex items-center text-sm font-medium text-gray-900 group-hover:text-amber-500 transition-colors">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default WhatWeOffer;
