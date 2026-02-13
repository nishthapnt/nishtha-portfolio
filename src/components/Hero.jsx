function Hero() {
  const socials = [
    {
      name: "github",
      link: "https://github.com/nishthapnt",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="w-6 h-6"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/nishtha-pant-4a8748268/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="w-6 h-6"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "email",
      link: "mailto:nishthapnt@gmail.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="w-6 h-6"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="hero"
      className="flex flex-col justify-around items-center h-screen overflow-hidden p-12"
    >
      {/* Container */}
      <div className="mt-40 relative h-[65%] flex flex-row items-center rounded-[70px] z-0 px-16 bg-blue-200 shadow-xl max-[1185px]:flex-col max-[1185px]:h-auto max-[1185px]:mt-8">
        
        {/* Text */}
        <div className="flex-[2] relative z-10 max-[1185px]:text-center">
          <h2 className="text-2xl md:text-3xl font-winky text-gray-700">
            Hi, I'm
          </h2>

          <h1 className="font-lilita text-blue-950 text-8xl md:text-9xl">
            Nishtha
          </h1>

          <h2 className="text-2xl md:text-3xl font-winky text-gray-700">
            Designer & Developer
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            I create visually appealing and functional web experiences.
          </p>
        </div>

        {/* Avatar */}
        <img
          src="./avatar.svg"
          alt="Profile"
          className="flex-1 relative z-10 max-h-[130%] self-end 
                     max-[1185px]:h-auto 
                     max-[1185px]:w-[60%] 
                     max-[1185px]:self-center"
        />
      </div>

      {/* Social Icons */}
      <ul className="m-4 flex flex-row w-[20%] justify-between self-center gap-4 
                     max-[1185px]:w-[60%] max-[1185px]:justify-around max-[1185px]:gap-8 max-[1185px]:m-[2px]
                     max-[768px]:w-[70%] max-[768px]:gap-6
                     max-[480px]:w-[90%] max-[480px]:gap-4">
        {socials.map((item, index) => (
          <li key={index} className="list-none">
            <a
              href={item.link}
              target={item.name !== "email" ? "_blank" : undefined}
              rel="noreferrer"
              className="w-12 h-12 bg-[rgb(118,156,227)] rounded-[30%] 
                         flex items-center justify-center 
                         transition transform hover:scale-110 hover:-translate-y-1
                         max-[1185px]:w-20 max-[1185px]:h-20
                         max-[768px]:w-16 max-[768px]:h-16
                         max-[480px]:w-12 max-[480px]:h-12"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Hero;
