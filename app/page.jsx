'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaAtom, FaChalkboardTeacher, FaMobileAlt, FaUserGraduate } from 'react-icons/fa';
import { AiOutlineExperiment } from 'react-icons/ai';
import { BiTestTube } from 'react-icons/bi';
import Image from 'next/image';

const ChemistryLandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { id: 1, text: "This platform revolutionized how I teach chemistry. My students are more engaged than ever!", author: "Dr. Emily Johnson, Chemistry Professor" },
    { id: 2, text: "I finally understand complex reactions thanks to the 3D visualizations. It's like having a lab in my pocket!", author: "Alex Chen, Undergraduate Student" },
    { id: 3, text: "The interactive models made studying for my AP Chemistry exam so much easier and fun!", author: "Sarah Thompson, High School Senior" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="w-full h-full"
            animate={{ rotate: 360, scale: [1, 7, 1] }} // Added scale animation
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          >
            <Image
              src="/images/image copy.png"
              alt="3D Molecular Model"
              width={1920}
              height={1080}
              className="w-full h-full object-cover opacity-30 overflow-hidden"
              style={{ objectPosition: 'center' }}
            />
          </motion.div>
        </div>
        <div className="z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Engage with Chemistry Like Never Before</h1>
          <p className="text-xl mb-8">Experience interactive 3D visualizations and simulations</p>
          <a href="/login">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300">Start Learning Now</button>
          </a>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/elements">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-100 p-6 rounded-lg shadow-md"
              >
                <FaAtom className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">3D Simulations</h3>
                <p>Experience chemistry in three dimensions with our cutting-edge simulations.</p>
              </motion.div>
            </a>
            <a href="/table">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-purple-100 p-6 rounded-lg shadow-md"
              >
                <AiOutlineExperiment className="text-4xl text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Periodic Table</h3>
                <p>Explore elements and their properties through our interactive periodic table.</p>
              </motion.div>
            </a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-green-100 p-6 rounded-lg shadow-md"
            >
              <BiTestTube className="text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Reactions</h3>
              <p>Witness chemical reactions unfold before your eyes in real-time visualizations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learn by Doing */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Learn by Doing</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <Image
                src="/images/image.png"
                alt="Chemistry Simulation"
                className="rounded-lg shadow-md"
                width={1920}
                height={1080}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-2xl font-semibold mb-4">Simulate Chemical Reactions</h3>
              <p className="mb-6">Our platform allows you to simulate complex chemical reactions, helping you understand the underlying principles and mechanisms.</p>
              <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                Try a Simulation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Students and Educators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">For Students and Educators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-yellow-100 p-8 rounded-lg shadow-md"
            >
              <FaUserGraduate className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Students</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Interactive 3D models</li>
                <li>Practice quizzes and assessments</li>
                <li>Personalized learning paths</li>
                <li>Progress tracking</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-indigo-100 p-8 rounded-lg shadow-md"
            >
              <FaChalkboardTeacher className="text-4xl text-indigo-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Educators</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Customizable lesson plans</li>
                <li>Virtual lab simulations</li>
                <li>Student performance analytics</li>
                <li>Collaboration tools</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto"
          >
            <p className="text-lg italic mb-4">{testimonials[currentTestimonial].text}</p>
            <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
            <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your Chemistry Learning?</h2>
          <p className="text-xl mb-8">Join thousands of students and educators who are already benefiting from our platform.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300"
          >
            Get Started for Free
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default ChemistryLandingPage;
