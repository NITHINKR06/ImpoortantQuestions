'use client';

import { useRouter } from 'next/navigation';
import {
  HiOutlineChartBar,
  HiOutlineLibrary,
  HiCog,
  HiOutlineCode,
  HiOutlineDocumentText
} from 'react-icons/hi';
import { motion } from 'framer-motion';

const subjectIcons = {
  // Maths: { icon: HiOutlineChartBar, color: 'bg-gradient-to-tr from-indigo-500 to-purple-500' },
  FCN: { icon: HiOutlineLibrary, color: 'bg-gradient-to-tr from-green-400 to-emerald-500' },
  MES: { icon: HiCog, color: 'bg-gradient-to-tr from-yellow-400 to-amber-500' },
  // DAA: { icon: HiOutlineCode, color: 'bg-gradient-to-tr from-pink-500 to-rose-500' },
  SEPM: { icon: HiOutlineDocumentText, color: 'bg-gradient-to-tr from-blue-500 to-cyan-500' }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: 'spring',
      stiffness: 100
    }
  })
};

export default function SubjectsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-[#0f172a] px-6 py-14">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          Pick Your Subject from Unit 2
        </motion.h1>
        <p className="text-gray-500 dark:text-gray-300 mt-3">
          Dive into detailed notes and resources for each topic.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(subjectIcons).map(([name, { icon: Icon, color }], i) => (
          <motion.div
            key={name}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.06 }}
            onClick={() => router.push(`/unit2/${name.toLowerCase()}`)}
            className="group cursor-pointer bg-white dark:bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
          >
            <div
              className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center text-white text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform`}
            >
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Click to explore materials and class notes.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
