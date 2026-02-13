import { useState, useEffect } from "react";
import DesignCard from "./DesignCard";

function Design() {
  const images = [
    { id: 1, src: "./img1.png", title: "Illustration 1", description: "Digital painting inspired by cinematic lighting." },
    { id: 2, src: "./img2.png", title: "Illustration 2", description: "Soft pastel environment exploration." },
    { id: 3, src: "./img3.png", title: "Illustration 3", description: "Character concept design." },
    { id: 4, src: "/img4.png", title: "Illustration 4", description: "Experimental lighting study." },
    { id: 5, src: "/img5.png", title: "Illustration 5", description: "Moody environment study." },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Determine how many to show initially
  const initialCount = isMobile ? 2 : 4;
  const visibleImages = showAll ? images : images.slice(0, initialCount);

  const toggleShow = () => {
    setShowAll(!showAll);

    if (showAll) {
      document.getElementById("design")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="design" className="py-24 px-6 md:px-16">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Design
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {visibleImages.map((img) => (
          <DesignCard
            key={img.id}
            image={img}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* SHOW MORE / LESS */}
      {images.length > initialCount && (
        <div className="text-center mt-8">
          <button
            onClick={toggleShow}
            className="px-6 py-3 bg-blue-900 text-white rounded-full hover:opacity-90 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

          <div className="
              bg-white rounded-2xl overflow-hidden 
              w-full max-w-5xl 
              flex flex-col md:flex-row
              relative
            ">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-gray-700 text-2xl z-10"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="flex-1 bg-black flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[70vh] object-contain"
              />
            </div>

            {/* DESCRIPTION */}
            <div className="w-full md:w-80 p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-4">
                {selectedImage.title}
              </h3>

              <p className="text-gray-600">
                {selectedImage.description}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Design;
