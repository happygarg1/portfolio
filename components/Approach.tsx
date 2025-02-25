"use client";
import React from 'react';
import { LampContainer } from './ui/Lamp';
import { motion } from "framer-motion";

const Approach = () => {
  return (
    <div className="py-12">
      <h1 className="heading text-center">
        My <span className="text-purple">Approach</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-3 grid-cols-1 gap-10 py-10">
        <LampContainer className="flex flex-col items-center text-center p-4 -mt-8 relative">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            className="from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
          >
            Build lamps <br /> the right way
          </motion.h1>
          <h2 className="absolute mt-8 lg:mt-12 text-xl font-semibold text-white">
            Planning & Strategy
          </h2>
          <p className="absolute mt-20 md:mt-16 lg:mt-20 text-gray-300 text-sm px-2">
          We&apos;ll collaborate to map out your website&apos;s goals, target audience, and key functionalities. We&apos;ll discuss things like site structure, navigation, and content requirements.
          </p>
        </LampContainer>

        <LampContainer className="flex flex-col items-center text-center p-4 -mt-8 relative">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
          >
            Build lamps <br /> the right way
          </motion.h1>
          <h2 className="absolute mt-8 md:mt-10 lg:mt-12 text-xl font-semibold text-white">
            Design & Development
          </h2>
          <p className="absolute mt-20 md:mt-16 lg:mt-20 text-gray-300 text-sm px-2">
          Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.
          </p>
        </LampContainer>

        <LampContainer className="flex flex-col items-center text-center p-4 -mt-8 relative">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            className="from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
          >
            Build lamps <br /> the right way
          </motion.h1>
          <h2 className="absolute mt-8 lg:mt-12 text-xl font-semibold text-white">
            Launch & Maintenance
          </h2>
          <p className="absolute mt-20 md:mt-16 lg:mt-20 text-gray-300 text-sm px-2">
          This is where the magic happens! Based on the approved design, I&apos;ll translate everything into functional code, building your website from the ground up.
          </p>
        </LampContainer>
      </div>
    </div>
  );
};

export default Approach;
