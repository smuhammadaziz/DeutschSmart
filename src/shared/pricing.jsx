import React, { useEffect } from "react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "€49",
    period: "/mo",
    description: "Perfect for starting your learning journey",
    features: [
      "Access to 2 core courses",
      "Monthly progress report",
      "Support during school hours",
    ],
    color: "from-gray-800 to-black",
    accent: "gray",
    highlight: false,
  },
  {
    name: "Standard",
    price: "€89",
    period: "/mo",
    description: "Includes German training & live support",
    features: [
      "Access to 4 courses",
      "German language training (A1-A2)",
      "Weekly live sessions",
      "Email & phone support",
    ],
    color: "from-red-500 to-red-600",
    accent: "red",
    highlight: true,
  },
  {
    name: "Premium",
    price: "€129",
    period: "/mo",
    description: "Full access with mentorship & certificate",
    features: [
      "Full course access (STEM + German B1-B2)",
      "1-on-1 mentorship",
      "Priority support",
      "Certificate on completion",
    ],
    color: "from-amber-400 to-yellow-500",
    accent: "yellow",
    highlight: false,
  },
];

const PricingSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Wrapper>
      <div id="pricing" className="py-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
            {t("pricing3")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("pricing3")}
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            {t("pricing4")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ${plan.highlight
                  ? "md:-translate-y-4 md:scale-105 z-10"
                  : "hover:-translate-y-2"
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                {plan.highlight && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t("Best Value")}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white/80 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-lg ml-1 opacity-80">{plan.period}</span>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 rounded-full p-1 text-${plan.accent}-500 bg-${plan.accent}-50`}>
                        <Check size={16} className="text-current" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-xl font-medium text-base transition transform 
                    ${plan.highlight
                      ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:shadow-${plan.accent}-500/30`
                      : `border-2 border-${plan.accent}-500 text-${plan.accent}-700 hover:bg-${plan.accent}-50`
                    }`}
                >
                  {t("pricing1")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm" data-aos="fade-up" data-aos-delay="300">
          All plans include access to our online learning platform and student community
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingSection;
