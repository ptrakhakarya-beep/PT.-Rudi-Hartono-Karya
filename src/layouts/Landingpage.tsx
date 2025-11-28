import Navbar from "../components/Navbar";
import Services from "../components/Services";
import backgroundImage from "../assets/background.png";
import backgroundContact from "../assets/background2.jpg";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion, type Variants } from "framer-motion";

const fadeUp : Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1], // smooth
    },
  },
};

const Landingpage = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* ===== HERO ===== */}
      <div
        className="relative  pb-24 min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/40 to-transparent pointer-events-none" />

        <motion.section
          id="home"
          className="max-w-7xl mx-auto px-4 pt-40 pb-32 relative z-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
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
                We are a civil engineering construction company focused on comprehensive
                project planning and design. With a professional team and extensive experience,
                we ensure every task is completed with high standards.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2 border border-white/50 rounded-full text-white hover:bg-white/10 transition font-medium"
              >
                CONTACT US
                <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white/30 ml-2">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 8h6M9 5l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="flex flex-col items-end mt-8 md:mt-0">
              <span className="text-white text-[72px] md:text-[96px] font-bold leading-none drop-shadow-lg">
                50+
              </span>
              <span className="text-white text-2xl md:text-3xl font-medium mb-4">Projects</span>
              <p className="text-gray-200 text-sm max-w-xs mb-2 text-right">
                Each project is executed with technical excellence from planning to supervision.
              </p>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-1 border border-white/50 rounded-full text-white hover:bg-white/10 transition text-sm"
              >
                SEE ALL PROJECTS
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white/30 ml-1">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h6M8 4l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* SERVICES */}
        <motion.section
          className="relative z-10 mt-32 scroll-mt-16" // <-- tambahkan scroll-mt-16
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          id="services"
        >
          <Services />
        </motion.section>
      </div>

      {/* ===== WHITE SECTION ===== */}
      <div className="bg-white">
        {/* PROJECTS */}
        <motion.section
          className="relative z-10"
          id="projects"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project />
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          className="relative py-24 mt-20"
          style={{
            backgroundImage: `url(${backgroundContact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))",
            }}
          />

          <div className="relative">
            <Contact />
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default Landingpage;
