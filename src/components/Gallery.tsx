import { useState } from "react";
import kayaksBeach from "../assets/video1converted.mp4";
import lakeView from "../assets/promo1.mp4";
import kayakAction from "../assets/promo2.mp4";
import sunsetKayak from "../assets/promo3.mp4";
import churuli from "../assets/churuli.mp4";
import azadandfrinds from "../assets/azadandfriends.mp4";
import doorofheaven from "../assets/doorofheaven.mp4";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const videos = [
    {
      src: kayaksBeach,
      alt: "Colorful kayaks ready for rental on pristine beach",
      title: "Premium Kayak Fleet",
    },
    {
      src: churuli,
      alt: "Serene lake surrounded by forests and mountains",
      title: "Crystal Lake Views",
    },
    {
      src: kayakAction,
      alt: "Adventurer paddling through scenic river canyon",
      title: "Canyon Adventures",
    },
    {
      src: azadandfrinds,
      alt: "Peaceful sunset kayaking experience",
      title: "Sunset Paddles",
    },
    {
      src: sunsetKayak,
      alt: "Colorful kayaks ready for rental on pristine beach",
      title: "Premium Kayak Fleet",
    },
    {
      src: lakeView,
      alt: "Serene lake surrounded by forests and mountains",
      title: "Crystal Lake Views",
    },
    {
      src: doorofheaven,
      alt: "Adventurer paddling through scenic river canyon",
      title: "Canyon Adventures",
    },
    // add more videos here
  ];

  const displayedVideos = showAll ? videos : videos.slice(0, 4);

  // handle next/prev
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % videos.length); // wrap-around
    }
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + videos.length) % videos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience the Beauty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover stunning waterways, pristine nature, and unforgettable
            moments. See where your next adventure could take you.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedVideos.map((video, index) => (
            <video
              key={video.src}
              src={video.src}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer rounded-lg"
              onClick={() => setSelectedIndex(index)}
              muted
              loop
              autoPlay
              playsInline
            />
          ))}
        </div>

        {/* Show More Button */}
        {videos.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <div className="relative w-full max-w-md max-h-screen">
              <video
                src={videos[selectedIndex].src}
                className="w-full h-auto object-contain rounded-lg"
                controls
                autoPlay
                loop
              />
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(null);
                }}
              >
                ✕
              </button>

              {/* Prev / Next Buttons */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                onClick={goPrev}
              >
                ‹
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                onClick={goNext}
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
