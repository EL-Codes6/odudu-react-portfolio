import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { github, linkedin, pnglogo } from "../assets";

/* Font family used for logo is the megrim font */

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const linkElements = navLinks.map((link) => (
    <li key={link.id}>
      <a
        className={`${
          active === link.title ? "text-white" : "text-secondary"
        } sm:hover:text-white sm:text-[18px] font-medium sm:cursor-pointer font-poppins cursor-pointer`}
        href={`#${link.id}`}
        onClick={(e) => {
          e.stopPropagation();
          setActive(link.title);
          setToggle(false);
        }}
      >
        {link.title}
      </a>
    </li>
  ));

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center sm:gap-2 gap-5 sm:grow"
          to="/"
          onClick={() => {
            setActive("");
            scrollTo(0, 0);
          }}
        >
          <img
            src={pnglogo}
            alt="logo"
            loaing="lazy"
            className="h-6 object-contain"
          />
          <p className="text-white text-left text-[16px] font-light cursor-pointer">
            Odudu <span className="sm:inline block">Essien</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          <li>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                justifyContent: "between",
                alignItems: "center",
                padding: "7px",
                textAlign: "center",
                outline: "none",
                textDecoration: "none",
                color: "#ffffff !important",
                width: "fit-content",
                height: "fit-content",
                borderRadius: "16px",
                backgroundColor: "#0A66C2",
                fontFamily: "SF Pro Text, Helvetica, sans-serif",
              }}
              href="https://www.linkedin.com/in/odudu-essien-codes/"
              target="_blank"
            >
              <p className="hidden lg:block">Follow on LinkedIn</p>
              <img
                className="bg-transparent p-[2px] w-4 h-4 rounded-sm"
                src={linkedin}
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/EL-Codes6">
              <img src={github} alt="github" className="w-7 h-7" />
            </a>
          </li>
          {linkElements}
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <div
            className="flex flex-col gap-1 items-end"
            onClick={() => setToggle((prev) => !prev)}
          >
            <div
              className={`${
                toggle ? "w-6" : "w-5"
              } h-[3px] origin-center bg-white ${
                toggle && "rotate-45 translate-y-[7px]"
              } transition-all duration-300`}
            />
            <div
              className={`w-4 h-[3px] bg-white ${
                toggle && "opacity-0 rotate-45"
              } transition-all duration-300`}
            />
            <div
              className={`${
                toggle ? "w-6" : "w-3"
              } h-[3px] origin-center bg-white ${
                toggle && "-rotate-45 -translate-y-[7px]"
              } transition-all duration-300`}
            />
          </div>
          <div
            className={`${
              toggle ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
            } transition-all flex p-6 black-gradient absolute top-20 right-0 my-2 mx-4 min-w-[140px] z-10 rounded-sm`}
          >
            <ul className="list-none flex flex-col items-start gap-4">
              {linkElements}
              <li>
                <a
                  className="flex items-center flex-row-reverse gap-1"
                  href="https://github.com/EL-Codes6"
                >
                  <img src={github} alt="github" className="w-7 h-7" />
                  <p className=" text-secondary font-poppins sm:hover:text-white sm:text-[18px] font-medium">
                    Github
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center flex-row-reverse gap-1"
                  href="https://www.linkedin.com/in/odudu-essien-codes/"
                >
                  <a
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "2px",
                      textAlign: "center",
                      outline: "none",
                      textDecoration: "none",
                      color: "#ffffff !important",
                      width: "120px",
                      height: "32px",
                      borderRadius: "6px",
                      backgroundColor: "#0A66C2",
                      fontFamily: "SF Pro Text, Helvetica, sans-serif",
                    }}
                    href="https://www.linkedin.com/in/odudu-essien-codes/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
