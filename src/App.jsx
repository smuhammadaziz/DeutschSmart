import React from "react";
import Wrapper from "./shared/wrapper";
import Sliders from "./shared/sliders";
import WhatWeOffer from "./shared/offer";
import SchoolStats from "./shared/statistics";
import ContactForm from "./shared/contactus";
import PricingSection from "./shared/pricing";
import FaqSection from "./shared/faq";
import CertifiedTeachers from "./shared/teachers";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <Sliders />

      {/* Main Content */}
      <main>
        {/* What We Offer Section */}
        <section className="py-20">
          <WhatWeOffer />
        </section>

        {/* Statistics Section */}
        <section className="py-16">
          <SchoolStats />
        </section>

        {/* Teachers Section */}
        <section className="py-16 bg-white">
          <Wrapper>
            <CertifiedTeachers />
          </Wrapper>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <PricingSection />
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <FaqSection />
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
