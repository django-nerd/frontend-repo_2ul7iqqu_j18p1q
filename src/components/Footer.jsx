import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="mt-12 border-t border-white/10 bg-gray-900/60">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} EduSphere. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-gray-200">Privacy</a>
            <a href="#terms" className="hover:text-gray-200">Terms</a>
            <a href="#status" className="hover:text-gray-200">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
