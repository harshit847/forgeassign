import { motion } from "framer-motion";
import bg5 from "../assets/wrench.png";

export default function PopularDetails() {
  return (
    <section id="manufacture" className="relative pt-20 pb-2 px-2 bg-white">
      
      <h2 className="text-center text-4xl md:text-5xl font-[350]">
        The Most Popular<br /> 
        <span className="italic font-serif">Details</span> We Produce
      </h2>

      <div className="relative grid md:grid-cols-3 gap-2 mt-12">

        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="rounded-xl p-6 h-100 bg-gray-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Spherical Joint</h3>
              <span>→</span>
            </div>
            <ul className="mt-4 text-gray-600 text-sm space-y-1">
              <li>Material: Steel, Stainless Steel</li>
              <li>Load Capacity: Up to 10,000 N</li>
              <li>Thread: M8 to M30</li>
              <li>Bearing Type: Ball or Plain</li>
            </ul>
            <img className="pl-20 h-60" src={bg5} />
          </div>

        ))}

        <motion.div
          className="absolute top-0 left-0 w-full grid md:grid-cols-3 gap-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", staggerChildren: 0.2 }}
        >
          <div className="rounded-xl p-6 h-100 mb-5 bg-gray-200 relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Spherical Joint</h3>
              <span>→</span>
            </div>
            <ul className="mt-4 text-gray-600 text-sm space-y-1">
              <li>Material: Steel, Stainless Steel</li>
              <li>Load Capacity: Up to 10,000 N</li>
              <li>Thread: M8 to M30</li>
              <li>Bearing Type: Ball or Plain</li>
            </ul>
            <img className="pl-20 h-60" src={bg5} />
          </div>

          <div className="rounded-xl p-6 h-100 bg-gray-200 relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Protective Cap</h3>
              <span>→</span>
            </div>
            <ul className="mt-4 text-gray-600 text-sm space-y-1">
              <li>Material: Steel, Rubber</li>
              <li>Fit Type: Snap-on, Threaded</li>
              <li>Water Resistance: IP54</li>
              <li>Impact Resistance: 10 J</li>
            </ul>
            <img className="pl-20 h-60" src={bg5} />
          </div>

          <div className="rounded-xl p-6 h-100 border-2 border-dashed bg-blue-600 text-white flex items-center justify-center text-center relative z-10">
            <div>
              <p className="text-2xl font-semibold">Drag & Drop Your 3D Design</p>
              <p className="mt-3 text-xs opacity-90">
                SUPPORTED FORMATS — IGES / STL / FBX / DXF / STEP
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
