import React from 'react';
import { CalendarCheck2, BookOpen, ClipboardList, Trophy, Megaphone, MessageSquare, Users2, Settings } from 'lucide-react';

const modules = [
  { icon: CalendarCheck2, title: 'Attendance', desc: 'Track student & teacher attendance with daily insights and reports.' },
  { icon: ClipboardList, title: 'Assignments', desc: 'Create, submit, and grade assignments with deadlines and feedback.' },
  { icon: Trophy, title: 'Exams & Results', desc: 'Schedule exams and publish results with analytics and transcripts.' },
  { icon: BookOpen, title: 'Subjects & Lessons', desc: 'Organize subjects, units, and lesson plans with resources.' },
  { icon: Users2, title: 'Classes', desc: 'Manage classes, sections, timetables, and enrollments.' },
  { icon: Megaphone, title: 'Announcements', desc: 'Send targeted announcements to roles, classes, and groups.' },
  { icon: MessageSquare, title: 'Messaging', desc: 'Role-aware messaging with daily limits and admin overrides.' },
  { icon: Settings, title: 'Profiles & Settings', desc: 'Customizable profiles, permissions, and preferences.' },
];

const Card = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
    <div className="flex items-start gap-4">
      <div className="rounded-lg bg-indigo-600/20 p-2 text-indigo-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base font-medium text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-300">{desc}</p>
      </div>
    </div>
  </div>
);

const ModulesGrid = () => {
  return (
    <section id="modules" className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Modular building blocks</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-300 md:text-base">Pick only what you need. Each module is designed to be reused across products and codebases.</p>
        </div>
        <a href="#demo" className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200 hover:bg-white/10 md:inline-block">Open Demo</a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {modules.map((m) => (
          <Card key={m.title} icon={m.icon} title={m.title} desc={m.desc} />
        ))}
      </div>
    </section>
  );
};

export default ModulesGrid;
