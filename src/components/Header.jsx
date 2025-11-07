import React from 'react';
import { GraduationCap, Settings, LogIn, Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-gray-900/80 to-gray-900/60 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/90 text-white shadow">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">EduSphere</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#modules" className="hover:text-white">Modules</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#settings" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-200 hover:bg-white/5">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </a>
          <a href="#login" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500">
            <LogIn className="h-4 w-4" />
            <span>Sign in</span>
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-gray-200 hover:bg-white/5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-gray-900/80 px-4 pb-4 md:hidden">
          <div className="mt-2 flex flex-col gap-3 text-sm text-gray-300">
            <a href="#features" className="rounded-md px-2 py-2 hover:bg-white/5">Features</a>
            <a href="#modules" className="rounded-md px-2 py-2 hover:bg-white/5">Modules</a>
            <a href="#pricing" className="rounded-md px-2 py-2 hover:bg-white/5">Pricing</a>
            <a href="#contact" className="rounded-md px-2 py-2 hover:bg-white/5">Contact</a>
            <div className="mt-2 flex items-center gap-2">
              <a href="#settings" className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-gray-200 hover:bg-white/5">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </a>
              <a href="#login" className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-500">
                <LogIn className="h-4 w-4" />
                <span>Sign in</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
