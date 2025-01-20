"use client";

import { motion } from "framer-motion";
import { Button } from "@repo/ui/button";
import { PencilRuler, Users, Sparkles, Share2,  } from "lucide-react";
import  Link from "next/link"

export default function Home() {
  const features = [
    {
      icon: <PencilRuler className="h-6 w-6 text-blue-600" />,
      title: "Intuitive Drawing Tools",
      description:
        "Create beautiful diagrams and sketches with our easy-to-use drawing tools.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Real-time Collaboration",
      description:
        "Work together with your team in real-time, seeing changes as they happen.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-blue-600" />,
      title: "Smart Shapes",
      description:
        "Perfect shapes automatically with our smart recognition technology.",
    },
    {
      icon: <Share2 className="h-6 w-6 text-blue-600" />,
      title: "Easy Sharing",
      description:
        "Share your drawings instantly with a simple link or export in various formats.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Collaborative Drawing
            <span className="text-blue-600"> Made Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create, collaborate, and share beautiful diagrams and sketches with our intuitive drawing tool.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signin">
            <Button onClick={()=>{}} className="bg-blue-600 rounded-md hover:bg-blue-700 p-2">
              Sign In
            </Button>
            </Link>
<Link href="/signup">
            <Button onClick={()=>{}} className="bg-white text-black rounded-md p-2" >
              Sign Up
            </Button>
            </Link>
          </div>
        </motion.div>

        {/* Canvas Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mb-8 mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://public-files.gumroad.com/lambm62luqn0e83zw93my7qajibe"
              alt="Canvas Preview"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 text-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-black shadow-md rounded-lg p-6 text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Drawing Today 
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of creators who are already using our platform to bring their ideas to life.
          </p>
          <Button onClick={()=>{}}  className="bg-white rounded-md text-blue-600 p-2 rounded-mdl hover:bg-gray-100">
            Get Started
          </Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Excalidraw Clone. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
