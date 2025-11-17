"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { EXTENDED_YOKE_DATA } from "../maindata";

import logoWhite from "../assets/images/OIP.jpeg";
import logoRust from "../assets/images/OIP.jpeg";

const COLORS = {
  rust: "#B54530",
  white: "#ffffff",
  mustard: "#D8B63A",
};

export function NavigationMenuDemo() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showMegaProducts, setShowMegaProducts] = React.useState(false);
  const [showMegaServices, setShowMegaServices] = React.useState(false);

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.55);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const headerBg = scrolled ? COLORS.white : COLORS.rust;
  const textColor = scrolled ? COLORS.rust : COLORS.white;
  const logoSrc = scrolled ? logoRust : logoWhite;

  const toggleMobile = () => setMobileOpen((v) => !v);

  return (
    <>
      {/* HEADER */}
      <motion.header
        animate={{ backgroundColor: headerBg }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 border-b backdrop-blur-lg"
        style={{
          borderColor: scrolled ? "#e5e5e5" : "rgba(255,255,255,0.25)",
        }}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 py-3 md:py-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <motion.div
              key={scrolled ? "rust-logo" : "white-logo"}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={logoSrc}
                alt="Yoke Conveyors Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10 relative">

            {/* SIMPLE LINKS */}
            {[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="font-semibold text-[18px] transition-all hover:opacity-80"
                  style={{ color: isActive ? COLORS.mustard : textColor }}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* PRODUCTS — FULL WIDTH MEGA MENU */}
            <div
              className="relative group"
              onMouseEnter={() => {
                setShowMegaProducts(true);
                setShowMegaServices(false);
              }}
              onMouseLeave={() => setShowMegaProducts(false)}
            >
              <span
                className="font-semibold text-[18px] cursor-pointer hover:opacity-80"
                style={{ color: textColor }}
              >
                Products
              </span>

              <AnimatePresence>
                {showMegaProducts && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="fixed left-0 top-[72px] w-full z-50"
                  >
                    <div
                      className="bg-white shadow-2xl border-t border-gray-200 rounded-b-2xl"
                      style={{ height: "50vh" }}
                    >
                      <div
                        className="
                          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                          gap-10 px-10 py-10
                          w-full max-w-[1600px] mx-auto
                          overflow-y-auto
                        "
                      >
                        {EXTENDED_YOKE_DATA.products.map((category, idx) => (
                          <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group/item hover:bg-gray-50 p-4 rounded-xl transition-all cursor-pointer"
                          >
                            <h3 className="text-[#B54530] font-bold text-[17px] mb-4 border-b border-gray-300 pb-2">
                              {category.category}
                            </h3>

                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item.slug}>
                                  <Link
                                    href={`/products/${item.slug}`}
                                    className="text-gray-700 hover:text-[#C97E28] hover:pl-2 transition-all block"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SERVICES — CENTERED MEGA MENU */}
            <div
              className="relative group"
              onMouseEnter={() => {
                setShowMegaProducts(false);
                setShowMegaServices(true);
              }}
              onMouseLeave={() => setShowMegaServices(false)}
            >
              <span
                className="font-semibold text-[18px] cursor-pointer hover:opacity-80"
                style={{ color: textColor }}
              >
                Services
              </span>

              <AnimatePresence>
                {showMegaServices && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 z-50"
                  >
                    <div className="bg-white shadow-2xl border border-gray-200 rounded-xl p-6 grid grid-cols-2 gap-6 w-[600px]">
                      {EXTENDED_YOKE_DATA.services.map((item) => (
                        <Link
                          href={`/services/${item.slug}`}
                          key={item.slug}
                          className="text-gray-700 hover:text-[#C97E28] flex items-center gap-2"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* OTHER PAGES */}
            {[{ label: "Industries", href: "/industries" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/contact" }].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="font-semibold text-[18px] hover:opacity-80"
                  style={{ color: isActive ? COLORS.mustard : textColor }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <motion.button onClick={toggleMobile} whileTap={{ scale: 0.9 }}>
              {mobileOpen ?
                <X size={28} style={{ color: textColor }} /> :
                <Menu size={28} style={{ color: textColor }} />}
            </motion.button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute top-full left-0 w-full backdrop-blur-lg z-40"
              style={{ backgroundColor: headerBg }}
            >
              <ul className="flex flex-col p-5 space-y-3 mb-10">
                <MobileNavItem label="Home" href="/" color={textColor} close={toggleMobile} />
                <MobileNavItem label="About Us" href="/about" color={textColor} close={toggleMobile} />

                <MobileExpandable title="Products" color={textColor}>
                  {EXTENDED_YOKE_DATA.products.map((cat) => (
                    <div key={cat.category}>
                      <h4 className="font-semibold mb-2 mt-3">{cat.category}</h4>
                      {cat.items.map((item) => (
                        <MobileNavItem
                          key={item.slug}
                          label={item.name}
                          href={`/products/${item.slug}`}
                          color={textColor}
                          close={toggleMobile}
                        />
                      ))}
                    </div>
                  ))}
                </MobileExpandable>

                <MobileExpandable title="Services" color={textColor}>
                  {EXTENDED_YOKE_DATA.services.map((item) => (
                    <MobileNavItem
                      key={item.slug}
                      label={item.title}
                      href={`/services/${item.slug}`}
                      color={textColor}
                      close={toggleMobile}
                    />
                  ))}
                </MobileExpandable>

                <MobileNavItem label="Industries" href="/industries" color={textColor} close={toggleMobile} />
                <MobileNavItem label="Projects" href="/projects" color={textColor} close={toggleMobile} />
                <MobileNavItem label="Contact" href="/contact" color={textColor} close={toggleMobile} />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

/* ---------------- MOBILE COMPONENTS ---------------- */

const MobileNavItem = ({ label, href, color, close }: any) => (
  <li>
    <Link
      href={href}
      onClick={close}
      className="block px-1 py-2 text-lg font-medium"
      style={{ color }}
    >
      {label}
    </Link>
  </li>
);

const MobileExpandable = ({ title, children, color }: any) => {
  const [open, setOpen] = React.useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full text-left px-1 py-2 text-lg font-medium flex justify-between"
        style={{ color }}
      >
        {title}
        <ChevronRight size={20} className={`transition ${open ? "rotate-90" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-4 mt-1 space-y-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
