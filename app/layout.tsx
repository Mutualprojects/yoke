// app/layout.tsx
import "./globals.css";
import { NavigationMenuDemo } from "./components/Header"; // adjust if your path is different
import HoverFooter from "./components/HoverFooter";
import { Inter, Manrope } from "next/font/google";

// ===== Font Setup =====
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// ===== Metadata =====
export const metadata = {
  title: "Yoke Conveyors & Equipments | Conveying, Packaging & Automation",
  description:
    "Yoke Conveyors & Equipments – Design, manufacture and integration of conveyor systems, packaging lines and industrial automation solutions.",
  // Force light theme in supporting browsers
  other: {
    "color-scheme": "light",
  },
};

// ===== Root Layout =====
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body
        className="
          font-body 
          text-gray-900 
          bg-white 
          selection:bg-[#3e7cb1]/20 
          selection:text-[#0d1b2a] 
          transition-colors 
          duration-300
        "
      >
        {/* ===== Header Navigation ===== */}
        <NavigationMenuDemo />

        {/* ===== Main Content ===== */}
        <main className="min-h-[70vh] pt-16 md:pt-20">
          {children}
        </main>

        {/* ===== Footer ===== */}
        <HoverFooter />
      </body>
    </html>
  );
}
