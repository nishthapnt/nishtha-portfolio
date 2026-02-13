function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-stretch">

        {/* LEFT SIDE — BLUE CARD */}
        <div className="bg-[#162456] text-white rounded-2xl shadow-xl px-10 py-10
                flex flex-col h-full">

          {/* TOP CONTENT */}
          <div className="text-center flex flex-col items-center">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-lg leading-relaxed text-blue-100 max-w-md">
              I'm always open to new opportunities, collaborations,
              or just a friendly conversation about tech and design.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center justify-center gap-5">

              {/* Email */}
              <a
                href="mailto:nishtha@example.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
                           hover:bg-white/20 transition hover:-translate-y-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
                           hover:bg-white/20 transition hover:-translate-y-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
                           hover:bg-white/20 transition hover:-translate-y-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

            </div>
          </div>

          {/* DOODLE — NATURALLY AT BOTTOM */}
          <div className="w-56 md:w-72 mx-auto mt-auto pt-6 border-b-amber-50">
  <img
    src="./doodle.png"
    alt="Doodle"
    className="w-full object-contain"
  />
</div>

        </div>

        {/* RIGHT SIDE — FORM */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="bg-white border border-[#0f2d5c]/10 shadow-xl rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f2d5c]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f2d5c]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0f2d5c] mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f2d5c]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f2d5c] text-white py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Send Message →
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
