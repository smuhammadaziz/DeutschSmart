import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";

import Navbar from "./shared/navbar.jsx";
import Footer from "./shared/footer.jsx";
import About from "./pages/about.jsx";
import Teachers from "./pages/teachers.jsx";
import Courses from "./pages/courses.jsx";
import Pricing from "./pages/pricing.jsx";
import Gallary from "./pages/gallery.jsx";
import LessonSchedule from "./pages/schedule.jsx";
import NewsPage from "./pages/news.jsx";
import Admissions from "./pages/admission.jsx";
import ScrollToTop from "./shared/scrollToTop.jsx";

import "./index.css";
import "./config/i18n.js";

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/schedule" element={<LessonSchedule />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/admission" element={<Admissions />} />
      </Routes>
      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(<AppWrapper />);
