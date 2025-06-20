"use client";

import React from "react";
import Image from "next/image";
import { FaFeather } from "react-icons/fa6";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";

const skills = [
  "Web Development",
  "SEO Optimization",
  "Google Analytics",
  "Blog Development",
  "Full Stack ERP Development",
  "Proficient Data Analytics using Python & R Programming",
  "Databases: SQL and NoSQL (MongoDB)",
];

const technologies = Array.from({ length: 9 }, (_, i) => `/Icn${i + 1}.svg`);

const projects = [
  {
    title: "Network Supply Management System",
    desc: "Manage network subscription management by ensuring only users who have active subscriptions and are authenticated by RADIUS have access to network.",
    img: "/f1.png",
    link: "https://github.com/CarolineMwenda/LeaseTrack",
  },
  {
    title: "Property Management Software",
    desc: "Rent collection and property listing made easier.",
    img: "/f2.png",
    link: "https://www.kejeka.com/",
  },
  {
    title: "Mind and Health Hub",
    desc: "A blog with mental health awareness content.",
    img: "/f3.png",
    link: "https://mindbrainhealthhub.net/",
  },
  {
    title: "Clinic Website",
    desc: "Clinical health made known.",
    img: "/f4.png",
    link: "https://jmn-mental-healthcare.vercel.app/blog",
  },
];

export default function HomePage() {
  return (
    <>
      <FollowerPointerCard
        title={
          <div className="flex items-center gap-2">
            <Image
              src="/p1.png"
              alt="Caroline Mwenda"
              width={24}
              height={24}
              className="rounded-full border-2 border-white"
            />
            <span>Caroline Mwenda</span>
          </div>
        }
      >
        <main className="min-h-screen bg-blue-100 text-[#095e63] px-4 py-12 flex flex-col items-center">

          {/* Hero Section */}
          <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-5xl font-bold mb-4 relative inline-block text-[#095e63] glow-text">
                Hi, I am Caroline Kanana Mwenda
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-3">
                I am a passionate software developer with expertise in:
              </p>
              <ul className="space-y-2">
                {skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-base sm:text-lg">
                    <FaFeather className="text-[#095e63]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/p1.png"
                alt="Caroline Kanana Mwenda"
                width={320}
                height={320}
                className="rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                style={{ border: "none", boxShadow: "none" }}
              />
            </div>
          </div>

          {/* Graphics Design Section */}
          <div className="w-full max-w-6xl mb-16 flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold mb-4">Graphics Design Content</h1>
            <a
              href="https://www.canva.com/design/DAGq1heeqAE/T9gGbEVrd3Z9mwE5CeHTmA/edit?utm_content=DAGq1heeqAE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 rounded-full text-white bg-black font-semibold transition hover:scale-105"
            >
              <span className="z-10 relative">Graphic Samples</span>
              <span className="absolute inset-0 rounded-full border-2 border-white animate-pulse opacity-40 pointer-events-none"></span>
            </a>
          </div>

          {/* Technologies */}
          <div className="w-full mb-16">
            <h1 className="text-3xl font-bold text-center mb-6">Technologies</h1>
            <div className="relative w-full max-w-4xl overflow-hidden">
              <div className="flex gap-8 whitespace-nowrap animate-scroll">
                {[...technologies, ...technologies].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Tech ${index + 1}`}
                    className="h-16 w-16 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <h1 className="text-3xl font-bold mb-10">Featured Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl w-full">
            {projects.map((project, i) => (
              <a href={project.link} target="_blank" rel="noopener noreferrer" key={i}>
                <CardContainer className="inter-var">
                  <CardBody className="bg-white group/card rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.2] w-full h-auto">
                    <CardItem translateZ="50" className="text-xl font-bold">
                      {project.title}
                    </CardItem>
                    <CardItem as="p" translateZ="60" className="text-sm mt-2">
                      {project.desc}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </a>
            ))}
          </div>

          {/* Get in Touch */}
          <div className="w-full max-w-6xl mt-20">
            <h1 className="text-3xl font-bold text-center mb-6">Get in Touch</h1>
            <div className="flex flex-col gap-6">
              {/* Reveal Card */}
              <div className="w-full bg-[#0E0E10] rounded-2xl flex justify-center items-center h-[24rem]">
                <TextRevealCard
                  text="I design and develop your imagination."
                  revealText="Let's build it together!"
                >
                  <TextRevealCardTitle>
                    I design and develop your imagination.
                  </TextRevealCardTitle>
                  <TextRevealCardDescription>
                    Ready to design, develop, and deploy digital solutions tailored to your needs.
                  </TextRevealCardDescription>
                </TextRevealCard>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-200 text-black rounded-xl p-8">
                <form className="space-y-5">
                  <div>
                    <label className="block font-semibold mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded border border-gray-300" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Company</label>
                    <input type="text" className="w-full px-4 py-2 rounded border border-gray-300" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 rounded border border-gray-300" placeholder="Phone number" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded border border-gray-300" placeholder="you@example.com" />
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </FollowerPointerCard>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes light-beam {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .glow-text {
          position: relative;
          text-shadow: 0 0 10px #5eead4, 0 0 20px #0891b2;
        }

        .glow-text::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            #a5f3fc 50%,
            transparent 100%
          );
          animation: light-beam 3s infinite linear;
          z-index: -1;
        }
      `}</style>
    </>
  );
}
