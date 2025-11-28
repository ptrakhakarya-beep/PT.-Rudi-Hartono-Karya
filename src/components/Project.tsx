import { useState, useEffect } from "react";
import bridge1 from "../assets/JEMBATAN/jembatan1.jpg";
import bridge2 from "../assets/JEMBATAN/jembatan2.jpeg";
import bridge3 from "../assets/JEMBATAN/jembatan3.jpg";
import bridge4 from "../assets/JEMBATAN/jembatan4.jpg";
import bridge5 from "../assets/JEMBATAN/jembatan5.jpeg";
import boardingSchool1 from "../assets/PONDOK/Pondok (1).png"
import boardingSchool2 from "../assets/PONDOK/Pondok (2).png"
import boardingSchool3 from "../assets/PONDOK/Pondok (3).png"
import boardingSchool4 from "../assets/PONDOK/Pondok (4).png"
import boardingSchool5 from "../assets/PONDOK/Pondok (5).png"
import boardingSchool6 from "../assets/PONDOK/Pondok (6).png"
import boardingSchool7 from "../assets/PONDOK/Pondok (7).png"
import boardingSchool8 from "../assets/PONDOK/Pondok (8).png"
import boardingSchool9 from "../assets/PONDOK/Pondok (9).png"
import boardingSchool10 from "../assets/PONDOK/Pondok (10).png"
import boardingSchool11 from "../assets/PONDOK/Pondok (11).png"
import boardingSchool12 from "../assets/PONDOK/Pondok (12).png"
import boardingSchool13 from "../assets/PONDOK/Pondok (13).png"
import boardingSchool14 from "../assets/PONDOK/Pondok (14).png"
import boardingSchool15 from "../assets/PONDOK/Pondok (15).png"
import road1 from "../assets/JALAN/Jalan1.jpeg";
import road2 from "../assets/JALAN/Jalan2.jpg";
import road3 from "../assets/JALAN/Jalan3.jpg";
import road4 from "../assets/JALAN/Jalan4.jpg";
import road5 from "../assets/JALAN/Jalan5.jpg";
import campus1 from "../assets/GEDUNG KAMPUS/Kampus (1).png";
import campus2 from "../assets/GEDUNG KAMPUS/Kampus (2).png";
import campus3 from "../assets/GEDUNG KAMPUS/Kampus (3).png";
import campus4 from "../assets/GEDUNG KAMPUS/Kampus (4).png";
import campus5 from "../assets/GEDUNG KAMPUS/Kampus (5).png";
import campus6 from "../assets/GEDUNG KAMPUS/Kampus (6).png";
const projects = [
  {
    title: "Bridge",
    category: "Implementation & Development",
    desc: "This bridge project reflects our dedication to building safe, durable, and reliable structures. With quality materials and careful planning, we create solutions that support communities and keep people moving with confidence.",
    image: bridge1,
    gallery: [bridge1, bridge2, bridge3, bridge4, bridge5],
  },
  {
    title: "Boarding School",
    category: "Consulting & Planning",
    desc: "Our boarding school project showcases our commitment to thoughtful design and strategic planning. We create educational environments that are not only functional and comfortable but also foster growth and learning for students.",
    image: boardingSchool1,
    gallery: [boardingSchool1, boardingSchool2, boardingSchool3, boardingSchool4, boardingSchool5, boardingSchool6, boardingSchool7, boardingSchool8, boardingSchool9, boardingSchool10, boardingSchool11, boardingSchool12, boardingSchool13, boardingSchool14, boardingSchool15],
  },
  {
    title: "Campus Building",
    category: "Consulting & Planning",
    desc: "We provide thoughtful planning and smart design solutions to create campus spaces that are functional, comfortable, and built for long-term growth. Every detail is crafted to support a better learning environment.",
    image: campus1,
    gallery: [campus1, campus2, campus3, campus4, campus5, campus6],
  },
  {
    title: "Road Construction",
    category: "Implementation & Development",
    desc: "Our road construction work focuses on safety, durability, and smooth mobility. With reliable materials and precise execution, we build roads that support communities and keep daily travel running with confidence.",
    image: road1,
    gallery: [road1, road2, road3, road4, road5],
  },
];

const Arrow = () => (
  <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white/30 group-hover:bg-white/10 transition">
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

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
 if (open) {
    document.body.style.overflow = "hidden";
    if (navbar) navbar.classList.add("hidden");
  } else {
    document.body.style.overflow = "auto";
    if (navbar) navbar.classList.remove("hidden");
  }

  return () => {
    document.body.style.overflow = "auto";
    if (navbar) navbar.classList.remove("hidden");
  };
}, [open]);

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
          <h2 className="text-black text-center text-5xl md:text-7xl font-serif mb-16">
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
                    <div className="group bg-primary rounded-md h-[230px] md:h-[300px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition">
                      <div>
                        <span className="block text-[11px] tracking-widest uppercase mb-3 text-white">
                          {p.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-medium text-white mb-4">
                          {p.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white line-clamp-3 md:line-clamp-4">
                          {p.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <button
                          type="button"
                          onClick={() => handleOpen(i)}
                          className="inline-flex items-center gap-3 text-sm font-medium text-white group-hover:text-white transition"
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
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center pt-10 justify-center px-4"
          onClick={handleClose} 
        >
          <div
            role="dialog"
            aria-modal="true"
            className="
        bg-white w-full max-w-5xl rounded-xl shadow-2xl
        max-h-[80vh] overflow-y-auto
      "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8 border-b border-neutral-200">
              <div className="flex items-start justify-between">
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* body scroll */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {current.gallery.map((src, idx) => (
                  <div key={idx} className="aspect-[4/3] overflow-hidden rounded-md bg-neutral-200">
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
        </div>
      )}
    </>
  );
};

export default Project;
