import React from "react";

const HeroSection = ({ backgroundImage, title, description }) => {
  return (
    <section
      className="relative bg-cover bg-center py-20 sm:py-28 md:py-36 rounded-lg shadow-md mb-16 overflow-hidden px-4"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      loading="lazy"
    >
      <img
        src="/img/line1.svg"
        alt="Decor"
        className="absolute top-[-10px] left-[-10px] w-20 sm:w-28 md:w-32 opacity-70 rotate-[-15deg]"
        loading="lazy"
      />
      <img
        src="/img/line2.svg"
        alt="Decor"
        className="absolute bottom-[-10px] right-[-10px] w-20 sm:w-28 md:w-32 opacity-80 rotate-[10deg]"
        loading="lazy"
      />
      <div className="relative z-10 flex justify-center">
        <div className="backdrop-blur-md bg-white/30 px-6 sm:px-10 py-6 sm:py-8 rounded-xl max-w-2xl text-center shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
