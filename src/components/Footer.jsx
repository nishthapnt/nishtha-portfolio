import React from "react";
import Wave from "react-wavify";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative h-[80vh] overflow-hidden md:h-[60vh]">
      
      {/* Wave Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex">
        
        <Wave
          className="absolute bottom-0 left-0 w-full h-full"
          fill="rgb(118, 156, 227)"
          paused={false}
          options={{ height: 60, amplitude: 20, speed: 0.2, points: 4 }}
        />

        <Wave
          className="absolute bottom-0 left-0 w-full h-full"
          fill="#b0c4eb"
          paused={false}
          options={{ height: 90, amplitude: 25, speed: 0.3, points: 5 }}
        />

        <Wave
          className="absolute bottom-0 left-0 w-full h-full"
          fill="#172554"
          paused={false}
          options={{ height: 120, amplitude: 30, speed: 0.13, points: 6 }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 w-full self-end flex justify-center mb-4">
          <div className="w-[90%] max-w-[1200px]">

            <div className="flex flex-col gap-6">

              {/* Top Section */}
              <div className="flex justify-between items-start gap-12 flex-wrap 
                              max-[900px]:justify-center max-[900px]:text-center">

                {/* Brand */}
                <div>
                  <h3 className="text-[1.8rem] font-bold text-white">
                    Nishtha Pant
                  </h3>
                  <p className="text-white mt-1">
                    Creating beautiful digital experiences
                  </p>
                </div>

                {/* Links */}
                <div className="flex gap-12 flex-wrap 
                                max-[900px]:justify-center">

                  {/* Navigation */}
                  <div>
                    <h4 className="text-[1.1rem] font-semibold text-white mb-3">
                      Navigation
                    </h4>
                    <ul className="space-y-2">
                      <li><a href="#hero" className="text-white text-sm hover:text-blue-800 transition">Home</a></li>
                      <li><a href="#about" className="text-white text-sm hover:text-blue-800 transition">About</a></li>
                      <li><a href="#code" className="text-white text-sm hover:text-blue-800 transition">Projects</a></li>
                      <li><a href="#design" className="text-white text-sm hover:text-blue-800 transition">Designs</a></li>
                    </ul>
                  </div>

                  {/* Connect */}
                  <div>
                    <h4 className="text-[1.1rem] font-semibold text-white mb-3">
                      Connect
                    </h4>
                    <ul className="space-y-2">
                      <li><a href="https://github.com" target="_blank" rel="noreferrer" className="text-white text-sm hover:text-blue-800 transition">GitHub</a></li>
                      <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white text-sm hover:text-blue-800 transition">LinkedIn</a></li>
                      <li><a href="mailto:nishtha@example.com" className="text-white text-sm hover:text-blue-800 transition">Email</a></li>
                      <li><a href="#contact" className="text-white text-sm hover:text-blue-800 transition">Contact</a></li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-slate-300"></div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center flex-wrap gap-4 
                              max-[600px]:flex-col max-[600px]:text-center">

                <p className="text-white text-sm">
                  © {currentYear} Nishtha Pant. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 justify-center">
                  
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-slate-200 rounded-[10px] flex items-center justify-center 
                               text-blue-800 transition hover:bg-indigo-200 hover:-translate-y-1"
                  >
                    {/* SVG stays same */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-slate-200 rounded-[10px] flex items-center justify-center 
                               text-blue-800 transition hover:bg-indigo-200 hover:-translate-y-1"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    
                  </a>

                  <a
                    href="mailto:nishtha@example.com"
                    className="w-10 h-10 bg-slate-200 rounded-[10px] flex items-center justify-center 
                               text-blue-800 transition hover:bg-indigo-200 hover:-translate-y-1"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    
                  </a>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
