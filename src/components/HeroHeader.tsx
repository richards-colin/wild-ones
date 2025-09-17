"use client"; // Needed for framer-motion

import { motion } from "framer-motion";

export default function HeroHeader() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-[#f6f6f4] via-[#f2f1ef] to-[#eae9e7] px-4"
      aria-labelledby="hero-title"
    >
      {/* Main title */}
      <motion.h1
        id="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold tracking-widest text-gray-900"
      >
        WILD ONES
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg md:text-2xl text-gray-600 tracking-[0.25em]"
      >
        MOSTLY TAMED – FOREVER LOVED
      </motion.p>

      {/* Website In Progress Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-32 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-gray-900 mb-4">
          Website In Progress
        </h2>
        <p className="text-md md:text-xl text-gray-700 mb-8 max-w-2xl">
          Thanks for stopping by! Our website is currently under construction.<br />
          In the meantime, get in touch with us through our socials:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="https://www.instagram.com/wildones.photos/?igsh=cHZnbWNyeDNidjhz#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition font-semibold text-lg"
          >
            Instagram
          </a>
          <a
            href="mailto:ekandrhysphotography@gmail.com"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition font-semibold text-lg"
          >
            Email Us
          </a>
        </div>
      </motion.div>
    </section>
    // <section
    //   className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-[#f6f6f4] via-[#f2f1ef] to-[#eae9e7] px-4"
    //   aria-labelledby="hero-title"
    // >
    //   {/* Main title */}
    //   <motion.h1
    //     id="hero-title"
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 1 }}
    //     className="text-6xl md:text-8xl font-bold tracking-widest text-gray-900"
    //   >
    //     WILD ONES
    //   </motion.h1>

    //   {/* Tagline */}
    //   <motion.p
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 1, delay: 0.5 }}
    //     className="mt-4 text-lg md:text-2xl text-gray-600 tracking-[0.25em]"
    //   >
    //     MOSTLY TAMED – FOREVER LOVED
    //   </motion.p>
      
    // </section>
  );
}
