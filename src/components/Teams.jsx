import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "framer-motion";

const Teams = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand’s success."
      />

      <div className="w-full overflow-x-auto pb-2">
        <div className="flex gap-4 min-w-max px-1">
          {teamData.map((team, index) => (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg shadow-gray-100 dark:shadow-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-52"
            >
              <img src={team.image} className="w-11 h-11 rounded-full object-cover shrink-0" alt={team.name} />
              <div className="min-w-0">
                <h3 className="font-bold text-sm truncate">{team.name}</h3>
                <p className="text-xs opacity-60 truncate">{team.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Teams;
