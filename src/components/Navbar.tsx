import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > document.body.scrollHeight * 0.53 && window.scrollY < document.body.scrollHeight * 0.7301) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300
      ${scrolled ? "bg-black text-white" : "bg-transparent text-black"}`}>
      <div className="h-10 flex items-center justify-between text-sm px-4">
        <div className="font-semibold">✱ Forge</div>
        <div className=" text-gray-600">⛳︎ Canada, Montreal</div>
        <nav className="flex items-center gap-6">
          <a href="#manufacture" className="underline">Manufacture</a>
          <a href="#tools" className="underline">Tool library</a>
          <a href="#contact" className="underline">Get in touch</a>
          <div className="hidden sm:block text-black pl-80 px-3">Eng  / <a href="#fra" className="underline">Fra</a></div>
        </nav>
      </div>
    </header>
  )
}