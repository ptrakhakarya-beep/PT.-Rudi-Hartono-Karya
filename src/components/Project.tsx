import React, { useState } from "react";
import pics1 from "../assets/project1.jpg";
import bridge1 from "../assets/bridge1.jpg";
import bridge2 from "../assets/bridge2.jpg";
import boardingSchool1 from "../assets/boardingschl1.jpg"
import boardingSchool2 from "../assets/boardingschl2.jpg"
import vessel1 from "../assets/vessel1.jpg";
import vessel2 from "../assets/vessel2.jpg"
import pics2 from "../assets/project2.jpg";
import pics3 from "../assets/project3.jpg";

const projects = [
  {
    title: "Concrete Bridge",
    category: "Construction",
    desc: "Struktur jembatan beton bertulang dengan fokus pada durabilitas, estetika, dan efisiensi beban lalu lintas jangka panjang.",
    image: pics1,
    gallery: [pics1, bridge1, bridge2],
  },
  {
    title: "Pondok Pesantren",
    category: "Construction",
    desc: "Pembangunan pondok pesantren dengan desain yang mengutamakan kenyamanan, keamanan, dan fungsionalitas ruang ibadah serta asrama.",
    image: pics2,
    gallery: [pics2, boardingSchool1, boardingSchool2],
  },
  {
    title: "The Vessel",
    category: "Construction",
    desc: "Rancangan struktur ikonik modular dengan konektivitas vertikal dan pengalaman ruang publik yang imersif.",
    image: pics3,
    gallery: [pics3, vessel1, vessel2],
  },
];

const Arrow = () => (
  <span className="w-6 h-6 flex items-center justify-center rounded-full border border-neutral-300 group-hover:bg-neutral-100 transition">
    <svg
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M4 7h5M8 4l3 3-3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const Project = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setActiveIndex(null);
  };

  const current = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <>
      <section id="projects" className="w-full py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-center text-5xl md:text-7xl font-serif mb-16">
            Our Projects
          </h2>

          <div className="flex flex-col gap-14">
            {projects.map((p, i) => {
              const reverse = i % 2 === 0; // card kanan, lalu kiri, lalu kanan

              return (
                <div
                  key={p.title}
                  className={`
                    flex flex-col md:flex-row 
                    ${reverse ? "md:flex-row-reverse" : ""}
                    gap-6 md:gap-12
                  `}
                >
                  {/* IMAGE */}
                  <div className="md:w-[60%] w-full">
                    <div className="overflow-hidden rounded-md h-[230px] md:h-[300px] bg-neutral-800">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.04]"
                      />
                    </div>
                  </div>

                  {/* CARD */}
                  <div
                    className={`
                      md:w-[40%] w-full
                      ${reverse ? "md:mr-auto" : "md:ml-auto"}
                    `}
                  >
                    <div className="group bg-white rounded-md h-[230px] md:h-[300px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition">
                      <div>
                        <span className="block text-[11px] tracking-widest uppercase mb-3 text-neutral-500">
                          {p.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-medium text-neutral-900 mb-4">
                          {p.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-neutral-600 line-clamp-4">
                          {p.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <button
                          type="button"
                          onClick={() => handleOpen(i)}
                          className="inline-flex items-center gap-3 text-sm font-medium text-neutral-900 group-hover:text-neutral-700 transition"
                        >
                          See More
                          <Arrow />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Gallery */}
      {open && current && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={handleClose}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="bg-white w-full max-w-5xl rounded-xl shadow-2xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="block text-xs tracking-widest uppercase text-neutral-500">
                  {current.category}
                </span>
                <h3 className="text-2xl font-semibold text-neutral-900">
                  {current.title}
                </h3>
              </div>
              <button
                aria-label="Close"
                onClick={handleClose}
                className="w-9 h-9 rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition inline-flex items-center justify-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {current.gallery.map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] overflow-hidden rounded-md bg-neutral-200"
                >
                  <img
                    src={src}
                    alt={`${current.title} ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
