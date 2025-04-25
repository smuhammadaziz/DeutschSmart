import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Wrapper from "./wrapper";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white py-14">
      <Wrapper>
        <div className=" ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-3xl font-extrabold text-yellow-400 mb-4">
                DeutschSmart
              </h3>
              <p className="text-sm text-gray-300">{t("footer1")}</p>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-yellow-400 mb-4">
                {t("footer2")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-red-600 transition-all"
                  >
                    {t("nav1")}
                  </a>
                </li>
                <li>
                  <a
                    href="/courses"
                    className="text-gray-300 hover:text-red-600 transition-all"
                  >
                    {t("nav2")}
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-red-600 transition-all"
                  >
                    {t("nav3")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-yellow-400 mb-4">
                {t("footer3")}
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>+998 77 454 00 50</li>
                <li>deutschsmartschool@gmail.com</li>
                <li>Tashkent, Uzbekistan</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-yellow-400 mb-4">
                {t("footer4")}
              </h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-all transform hover:scale-110"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-all transform hover:scale-110"
                >
                  <Twitter size={28} />
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-all transform hover:scale-110"
                >
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-10 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} DeutschSmart | All Rights Reserved
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
