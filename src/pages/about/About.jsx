"use client";

import { Calendar, Sun, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigation/navbar";
import JoinOurTeamForm from "./Joinourteam";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/a-picturesque-symphony-of-renewable-energy-as-solar-panels-harmoniously-grace-a-vibrant-and.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                About Mittal Distributors
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-xl"
              >
                Leading the Solar Revolution in India since 2001
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Company History */}
        <section className="max-w-7xl mx-auto px-4 py-8 flex items-center md:flex-row flex-col-reverse">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 items-center justify-center"
          >
            <div className="flex gap-4">
              <Calendar className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Established in 2001
                </h3>
                <p className="text-gray-600">
                  Founded in Dhule, Maharashtra, with a focus on enhancing the
                  use of sustainable solar energy across India.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Sun className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Solar Energy Focus
                </h3>
                <p className="text-gray-600">
                  Specializing in the provision of high-quality Vikram Solar
                  panels and Fronius inverters, tailored for efficient energy
                  solutions.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative pb-[56.25%] ml-16 h-0 overflow-hidden max-w-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded"
                src="https://www.youtube.com/embed/EFinOuvJRKs?si=oO4uWYldB9_kltYH"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </section>

        {/* Products & Services */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Solar Solutions
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Sun className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-xl mb-2">
                          Vikram Solar Panels
                        </h3>
                        <p className="text-gray-600">
                          We provide Vikram Solar panels, known for their
                          efficiency and durability, ensuring optimal solar
                          energy solutions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Sun className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-xl mb-2">
                          Fronius Inverters
                        </h3>
                        <p className="text-gray-600">
                          Offering Fronius inverters, acclaimed for their
                          innovative technology and reliability in solar energy
                          systems.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}

        <Separator />
        {/* Join Our Team Section */}
        <section className=" bg-gray-50">
          <JoinOurTeamForm />
        </section>
      </div>
      <Footer />
    </div>
  );
}
