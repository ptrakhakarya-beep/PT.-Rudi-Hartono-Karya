import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import backgroundImage from "../assets/background.jpg";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Landingpage = () => {
  return (
    <div className="w-full">
      <Navbar />

      <div
        className="relative pb-24 min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-400"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/40 to-transparent pointer-events-none" />
        <section id="home" className="max-w-7xl mx-auto px-4 pt-40 pb-32 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight md:leading-[1.1] mb-6 drop-shadow-lg">
                We Build
                <br />
                Buildings That
                <br />
                You'll Love
              </h1>
              <p className="text-gray-200 text-base md:text-lg max-w-xl mb-8">
                Kami adalah perusahaan jasa konstruksi teknik sipil yang berfokus
                pada perencanaan dan perancangan proyek secara komprehensif. Dengan
                tim profesional dan pengalaman dalam berbagai jenis proyek kami
                memastikan setiap pekerjaan selesai dengan perencanaan matang,
                material berkualitas, dan eksekusi tepat waktu.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2 border border-white/50 rounded-full text-white hover:bg-white/10 transition font-medium"
              >
                CONTACT US
                <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white/30 ml-2">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M5 8h6M9 5l3 3-3 3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="flex flex-col items-end mt-8 md:mt-0">
              <span className="text-white text-[72px] md:text-[96px] font-bold leading-none drop-shadow-lg">
                32+
              </span>
              <span className="text-white text-2xl md:text-3xl font-medium mb-4">
                Projects
              </span>
              <p className="text-gray-200 text-sm max-w-xs mb-2 text-right">
                Setiap proyek kami kerjakan dengan pendekatan teknis komprehensif
                dari desain hingga pengawasan lapangan.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-1 border border-white/50 rounded-full text-white hover:bg-white/10 transition text-sm"
              >
                SEE ALL PROJECTS
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white/30 ml-1">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M4 7h6M8 4l3 3-3 3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
              <section className="relative z-10 mt-20">
        <Services />
      </section>
      </div>

        <div className=" bg-gradient-to-b from-[#213845] via-[#375B65] to-[#4F8391]">

      <section className="relative z-10">
        <Project />
      </section>

      <section className="relative z-10">
        <Contact />
      </section>
        </div>

      <Footer />
    </div>
  );
};

export default Landingpage;
