import React from "react";

const services = [
  {
    title: "Consulting & Planning",
    icon: (
      <svg
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M16 16h16v16H16z" stroke="currentColor" strokeWidth="2" />
        <path d="M16 24h16" stroke="currentColor" strokeWidth="2" />
        <path d="M24 16v16" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    description : "comprehensive consulting and planning services to ensure your construction projects are well-structured from the start.",
  },
  {
    title: "Implementation & Development",
    icon: (
      <svg
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="18" r="6" stroke="currentColor" strokeWidth="2" />
        <rect
          x="16"
          y="28"
          width="16"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M20 28v-2a4 4 0 0 1 8 0v2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    highlight: true,
    description : "Efficient project execution and development services to bring your construction visions to life with precision and quality.",
  },
  {
    title: "Full Service Construction",
    icon: (
      <svg
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <rect
          x="12"
          y="24"
          width="24"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M18 24v-6a6 6 0 0 1 12 0v6"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    description : "Comprehensive construction planning and execution with strict supervision and quality you can rely on.",
  },
];

const Services = () => {
  return (
    <section id="services">

    <div className="max-w-7xl mx-auto bg-white/70 pt-20 pb-28 rounded-2xl px-8 relative">
      <span className="inline-block bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full mb-8 tracking-wide">
        SERVICES
      </span>
      <h2 className="text-gray-800 text-3xl md:text-5xl font-bold mb-12 max-w-3xl">
        We are multi-service
        <br />
        company under one roof.
      </h2>
      {/* Services Cards */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {services.map((srv) => (
          <div
            key={srv.title}
            className={`
              flex-1 rounded-2xl p-8 flex flex-col items-start
              hover:bg-white/70 backdrop-blur-md
              transition
              min-w-[250px]
              bg-primary hover:shadow-xl
              hover:[box-shadow:0_8px_32px_0_rgba(217,255,62,0.10)]
              group
            `}
            style={{
              boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10)",
            }}
          >
            <div className="mb-6">
              <span
                className="
                            transition-colors
                            text-white
                            group-hover:text-[#253946]
                            "
              >
                {React.cloneElement(srv.icon, {
                  className: "transition-colors duration-300",
                })}
              </span>
            </div>
            <h3
              className={`
              text-xl font-bold mb-4 text-white
              group-hover:text-[#253946]
            `}
            >
              {srv.title}
            </h3>
            <h4 className="text-md font-medium text-white group-hover:text-[#253946]">
              {srv.description}
            </h4>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Services;
