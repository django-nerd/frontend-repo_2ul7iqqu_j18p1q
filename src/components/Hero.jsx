import React from 'react';
import { Rocket, Shield, Users } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const FeatureChip = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 backdrop-blur">
    <Icon className="h-3.5 w-3.5 text-indigo-400" />
    <span>{text}</span>
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LFe7dKryHuFZb54x/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-200">
            <Shield className="h-4 w-4" />
            Role-based School Management SaaS
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Manage your entire school in one modular platform
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            Powerful tools for administrators, teachers, students, and parents. Attendance, assignments, exams, results, classes, subjects, messaging, announcements, and more.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <FeatureChip icon={Users} text="Admin • Teacher • Student • Parent" />
            <FeatureChip icon={Rocket} text="Modular & reusable" />
            <FeatureChip icon={Shield} text="Secure & scalable" />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#modules" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-500">
              Explore Modules
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/10">
              View Demo Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
