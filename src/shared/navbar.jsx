import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Wrapper from "./wrapper";
import { ChevronDown, Languages, X } from "lucide-react";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { name: t("nav1"), path: "/about" },
    { name: t("nav2"), path: "/admission" },
    { name: t("nav4"), path: "/gallery" },
    { name: t("nav3"), path: "/news" },
    { name: t("nav6"), path: "/courses" },
    { name: t("nav7"), path: "/teachers" },
    { name: t("nav8"), path: "/schedule" },
  ];

  const languageOptions = [
    { key: "uz", label: "O'zbek" },
    { key: "ru", label: "Русский" },
    { key: "en", label: "English" },
    { key: "de", label: "Deutsch" },
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    window.location.reload();
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-all duration-300">
        <Wrapper>
          <div className="flex items-center justify-between h-[80px]">
            <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
              <div className="w-[25px] h-[2px] bg-black mb-[4px]" />
              <div className="w-[25px] h-[2px] bg-black mb-[4px]" />
              <div className="w-[25px] h-[2px] bg-black" />
            </div>

            <div className="flex-1 flex justify-center lg:justify-start lg:static absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0">
              <a href="/">
                <img
                  src="/img/logo.png"
                  alt="DeutschSmart Logo"
                  className="h-[55px] w-auto object-contain rounded-lg"
                  loading="lazy"
                />
              </a>
            </div>

            <nav className="hidden lg:flex flex-1 justify-center space-x-6 text-black font-medium">
              {navLinks
                .filter(
                  (link) =>
                    !["/courses", "/teachers", "/schedule"].includes(link.path)
                )
                .map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`transition hover:text-yellow-400 ${
                      location.pathname === link.path ? "text-yellow-400 font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "courses",
                      label: (
                        <Link to="/courses" className="block px-2 py-1">
                          {t("nav6")}
                        </Link>
                      ),
                    },
                    {
                      key: "teachers",
                      label: (
                        <Link to="/teachers" className="block px-2 py-1">
                          {t("nav7")}
                        </Link>
                      ),
                    },
                    {
                      key: "schedule",
                      label: (
                        <Link to="/schedule" className="block px-2 py-1">
                          {t("nav8")}
                        </Link>
                      ),
                    },
                  ],
                }}
                trigger={["click"]}
              >
                <div className="cursor-pointer flex items-center gap-1 hover:text-yellow-400 transition">
                  <p>{t("nav5")}</p>
                  <ChevronDown size={20} />
                </div>
              </Dropdown>
            </nav>

            <div className="hidden lg:flex items-center gap-2 px-4 border-l border-gray-200">
              <Dropdown
                menu={{
                  items: languageOptions.map((lang) => ({
                    key: lang.key,
                    label: (
                      <div
                        onClick={() => changeLanguage(lang.key)}
                        className={`px-2 py-1 ${
                          i18n.language === lang.key ? "font-bold text-yellow-500" : ""
                        }`}
                      >
                        {lang.label}
                      </div>
                    ),
                  })),
                }}
                trigger={["click"]}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
                  <Languages size={18} />
                  <span className="uppercase">{i18n.language}</span>
                </div>
              </Dropdown>
            </div>
          </div>
        </Wrapper>
      </div>

      <div
        className={`fixed inset-0 bg-white/80 backdrop-blur-lg text-black z-[60] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain rounded-lg"
            loading="lazy"
          />
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className={`transition hover:text-yellow-400 ${
                location.pathname === link.path ? "text-yellow-400 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
