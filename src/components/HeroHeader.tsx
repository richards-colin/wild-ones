import { motion } from "framer-motion";

export default function HeroHeader() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-[#f6f6f4] via-[#f2f1ef] to-[#eae9e7] px-4">
      {/* Main title */}
      <motion.h1
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
    </section>
  );
}
