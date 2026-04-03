import { useState, useEffect } from "react";
import { Menu, X, Smartphone, Phone } from "lucide-react";

const navLinks = [
  { id: "home", label: "首页" },
  { id: "services", label: "服务项目" },
  { id: "recycle", label: "回收报价" },
  { id: "repair", label: "维修报价" },
  { id: "why-us", label: "为什么选我们" },
  { id: "contact", label: "联系我们" },
];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 rounded-xl brand-gradient flex items-center justify-center shadow-md">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-gray-900 tracking-wide">小奚通讯</span>
              <span className="text-[10px] text-gray-500 -mt-0.5">回收 · 维修 · 深圳&香港</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                  ? "bg-red-50 text-red-600"
                  : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:18598264348"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl brand-gradient text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:opacity-90"
            >
              <Phone className="w-4 h-4" />
              <span>18598264348</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium mb-1 transition-colors cursor-pointer ${
                activeSection === link.id
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:18598264348"
            className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-3 rounded-xl brand-gradient text-white text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            立即拨打：18598264348
          </a>
        </div>
      )}
    </header>
  );
}
