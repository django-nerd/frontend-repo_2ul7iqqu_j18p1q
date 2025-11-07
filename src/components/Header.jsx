import { School, Settings, LogIn } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white">
            <School size={20} />
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900 leading-5">Edusphere</p>
            <p className="text-xs text-gray-500 -mt-0.5">SaaS School Management</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#roles" className="hover:text-gray-900 transition-colors">Roles</a>
          <a href="#preview" className="hover:text-gray-900 transition-colors">Dashboard</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100">
            <Settings size={16} /> Settings
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-sm hover:shadow transition-shadow">
            <LogIn size={16} /> Sign In
          </button>
        </div>
      </div>
    </header>
  )
}
