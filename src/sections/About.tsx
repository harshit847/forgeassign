import { motion, type Variants } from "framer-motion";
import { useState, type SetStateAction } from "react";
import bg1 from "../assets/images.jpg";
import bg2 from "../assets/Polyline.jpg";
import bg3 from "../assets/rubber.jpg";
import bg4 from "../assets/steel.jpg";




const listVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function About() {
  const items = [
    { num: "01.", text: "Custom Brackets", icon: "🛠️", img: bg1 },
    { num: "02.", text: "Steel Adapters", icon: "⚙️", img: bg2 },
    { num: "03.", text: "Motor Mounts", icon: "🔩", img: bg3 },
    { num: "04.", text: "Enclosures", icon: "📦", img: bg4 }
  ];
  const [bgImage, setBgImage] = useState(bg2);

  const changeBackground = (img: SetStateAction<string>) => {
    setBgImage(img);
  }

  return (
    <section className="py-20 bg-white">
      <div className="grid md:grid-cols-2 gap-50 px-4">
        <div>
          <p className="inline-block text-xs px-2 py-1 rounded bg-blue-600 text-white mb-4">● About ●</p>
          <h2 className="text-4xl md:text-6xl font-[350]">
            Revolutionizing Manufacturing with Speed and <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-500 text-border-black">Precision</span>
          </h2>
          <motion.ol
            className="mt-5 space-y-1 text-gray-800 pt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {items.map((item, i) => (
              <motion.li
                key={item.num}
                className="flex items-center justify-between border-t-2 border-gray-200 font-semibold"
                variants={listVariants}
                custom={i}
                onClick={() => changeBackground(item.img)}
              >
                <span>
                  <span className="text-gray-500 text-xs">{item.num}</span>
                  <span className="ml-5 text-sm">{item.text}</span>
                </span>
                <span>{item.icon}</span>
              </motion.li>
            ))}
          </motion.ol>

          <div className="mt-15 h-40 md:h-56 rounded-2xl bg-cover bg-center transition-all duration-500 border-1 border-gray-200"
            style={{
              backgroundImage: `url(${bgImage})`
            }} />
        </div>
        <aside className="text-sm text-black leading-6 pl-50 pr-10">
          <div className="flex items-center gap-3 mb-3">
            <img className="h-12 w-12 rounded object-cover" src="https://i.pravatar.cc/100?img=12" alt="CEO" />
            <div>
              <div className="font-medium">Ayrton Senna</div>
              <div className="text-gray-500 text-xs">CEO & Senior Partner at Forge</div>
            </div>
          </div>
          <p>
            At Forge, we believe that getting custom CNC parts should be fast, reliable, and effortless. That’s why we built a fully streamlined platform that turns your CAD files into production-ready parts—delivered in as fast as one day.
            Whether you're prototyping or scaling, we remove the friction from manufacturing so you can focus on building what matters.
          </p>
          <p className="mt-4">
            We operate high‑performance CNC machines backed by in‑house automation and a trusted network of suppliers. From one‑off prototypes to small production runs, our system is built to deliver precise, high‑quality parts with speed.
            You can also reserve your own dedicated CNC machine through our RM (Reserved Machines) offering—your own production line, without the overhead.
          </p>
        </aside>
      </div>
    </section>
  )
}