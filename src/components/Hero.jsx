import { Shield, BarChart3, Users, Calendar, MessageCircle } from 'lucide-react'

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="p-5 rounded-xl border border-gray-200 bg-white/60 backdrop-blur hover:shadow-md transition-shadow">
    <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
      <Icon size={20} />
    </div>
    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
)

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium mb-4">
            <Shield size={14} /> Role-based Access • Multi-tenant Ready
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Modern School Management, built as reusable modules
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Admin, Teacher, Student, and Parent roles with secure permissions. Attendance, assignments, exams, results, subjects, classes, lessons, events, messages, and announcements — all modular and easy to reuse.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#preview" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-blue-600 font-semibold shadow hover:shadow-md transition-shadow">
              Explore Live Preview
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-indigo-700 bg-indigo-50 font-semibold hover:bg-indigo-100">
              See Features
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Feature icon={BarChart3} title="Analytics" desc="Role-aware dashboard with gender-based graphs and date filters." />
          <Feature icon={Users} title="Profiles" desc="Detailed pages for teachers, students, and parents." />
          <Feature icon={Calendar} title="Attendance" desc="Teacher marks students; admin marks teachers." />
          <Feature icon={MessageCircle} title="Messaging" desc="Daily limits, class-aware routing, and admin overrides." />
        </div>
      </div>
    </section>
  )
}
