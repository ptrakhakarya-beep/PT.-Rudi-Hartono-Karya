import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("Home");

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, href: "#home" },
    { text: "Services", icon: <BuildOutlinedIcon />, href: "#services" },
    { text: "Projects", icon: <WorkspacesOutlinedIcon />, href: "#projects" },
    { text: "Contact", icon: <PhoneRoundedIcon />, href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between border border-white/30 bg-black/30 backdrop-blur-md rounded-sm px-6 h-16">
          <a
            href="#home"
            onClick={() => setActive("Home")}
            className="flex items-center gap-2 select-none"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              {/* Placeholder logo bars */}
              <div className="flex flex-col gap-[3px] w-8">
                <span className="block h-[3px] bg-white"></span>
                <span className="block h-[3px] bg-white w-6"></span>
                <span className="block h-[3px] bg-white w-4"></span>
                <span className="block h-[3px] bg-white w-2"></span>
              </div>
            </div>
            <h3 className="text-sm md:text-base font-medium tracking-wide text-white ">
              PT. RUDI HARTONO KARYA
            </h3>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-200">
            {menuOptions.slice(0, 3).map((item) => (
              <a
                key={item.text}
                href={item.href}
                onClick={() => setActive(item.text)}
                className="relative group pb-1"
              >
                <span
                  className={`transition-colors ${
                    active === item.text
                      ? "text-white"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {item.text}
                </span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#6BB1C4] transition-all duration-300 ${
                    active === item.text
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setActive("Contact")}
              className="relative group pb-1 ml-2"
            >
              <span
                className={`transition-colors ${
                  active === "Contact"
                    ? "text-white"
                    : "text-gray-300 group-hover:text-white"
                }`}
              >
                Contact
              </span>
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#6BB1C4] transition-all duration-300 ${
                  active === "Contact" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          </div>

          {/* Right Icons + Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              onClick={() => setOpenMenu(true)}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-white bg-slate-800/70 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <HiOutlineBars3 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{
            width: 260,
            backgroundColor: "#0f172a",
            height: "100%",
            color: "#fff",
          }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={() => setActive(item.text)}
                  sx={{
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: active === item.text ? 600 : 400,
                      color:
                        active === item.text
                          ? "white"
                          : "rgba(255,255,255,0.8)",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;