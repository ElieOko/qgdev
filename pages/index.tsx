import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import getScrollAnimation from '@/src/utils/getScrollAnimation';
import CollapseDefault from '@/src/components/material-tailwind/toggle';
import { Button } from '@material-tailwind/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
        <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
   <motion.div
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true, amount: 0.8 }}
>
  <motion.div
    className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
   
  >
    <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
        Apprenez plus rapidement avec <strong>QGDev</strong>.
      </h1>
      <p className="text-black-500 mt-4 mb-6">
       {"Êtes-vous prêt à ouvrir les portes d'un monde infini de possibilités ?"} 
        <br />
        {"Apprendre la programmation en ligne est bien plus qu'une simple compétence technique. C'est une opportunité de développer votre créativité, de résoudre des problèmes complexes et de façonner le futur numérique."}
      </p>
      <Button>Poursuivre</Button>
    </div>
    <div className="flex w-full">
      <motion.div className="h-full w-full flex items-center">
        <img
          className="responsive max-h-96 mx-auto"
          src="./assets/Illustration2.png"
          alt="VPN Illustrasi"
        />
      </motion.div>
    </div>
  </motion.div>
</motion.div>
    </div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                <div className="p-6">
                  <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                  <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                  <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                  <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                  <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                  <div className="flex items-center flex-wrap ">
                    <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                      
                    </a>
                    <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                      
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" alt="blog"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Votre plateforme</h2>
                  <h1 className="title-font text-lg font-medium  mb-3">QGDev</h1>
                  <p className="leading-relaxed mb-3">Bientôt disponible.</p>
                  <div className="flex items-center flex-wrap ">
                    {/* <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a> */}
                    {/* <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-600 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                <div className="p-6">
                  <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                  <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                  <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                  <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                  <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                  <div className="flex items-center flex-wrap ">
                    <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                      
                    </a>
                    <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                      
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
   
  )
}
