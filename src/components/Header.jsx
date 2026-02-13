import { useEffect, useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "#hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = `#${section.id}`;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActiveLink(id);
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className="
        fixed top-0 z-[100]
        flex justify-between items-center
        bg-transparent backdrop-blur-[80px]
        px-12 py-4
        mt-2 mx-8
        w-[95%]
        rounded-[50px]

        max-md:px-6
        max-md:mt-0 max-md:mx-0
        max-md:w-full
        max-md:rounded-none
      "
    >
      {/* LOGO */}
      <div className="text-2xl font-bold tracking-[2px] text-[#111] cursor-pointer max-md:text-xl">
        <a
          href="#hero"
          onClick={() => handleClick("#hero")}
          className={`
            px-4 py-2 rounded-[10px] transition duration-300
            ${activeLink === "#hero"
              ? "bg-[#172554] text-white scale-110"
              : ""}
          `}
        >
          PORTFOLIO
        </a>
      </div>

      {/* HAMBURGER */}
      <div
        className="hidden max-md:flex flex-col gap-[5px] cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`
            w-7 h-[3px] bg-[#172554] rounded transition-all duration-300
            ${menuOpen ? "rotate-45 translate-y-2" : ""}
          `}
        />
        <span
          className={`
            w-7 h-[3px] bg-[#172554] rounded transition-all duration-300
            ${menuOpen ? "opacity-0" : ""}
          `}
        />
        <span
          className={`
            w-7 h-[3px] bg-[#172554] rounded transition-all duration-300
            ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
          `}
        />
      </div>

      {/* NAVBAR */}
      <nav
        className={`
          flex items-center

          max-md:absolute
          max-md:top-[80px]
          max-md:right-0
          max-md:w-[40%]
          max-md:bg-white/90
          max-md:backdrop-blur-[20px]
          max-md:rounded-[20px]
          max-md:px-8 max-md:py-6
          max-md:flex-col
          max-md:transition-transform max-md:duration-300
          ${menuOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"}
        `}
      >
        <ul className="flex gap-8 list-none m-0 p-0 max-md:flex-col max-md:gap-6">
          {[
            { id: "#about", label: "About" },
            { id: "#code", label: "Projects" },
            { id: "#design", label: "Design" },
            { id: "#contact", label: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={item.id}
                onClick={() => handleClick(item.id)}
                className={`
                  text-[#333] font-medium
                  px-4 py-2 rounded-[20px]
                  transition duration-300
                  hover:text-[rgb(118,156,227)]
                  hover:scale-110
                  ${activeLink === item.id
                    ? "bg-[#172554] text-white scale-110"
                    : ""}
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
