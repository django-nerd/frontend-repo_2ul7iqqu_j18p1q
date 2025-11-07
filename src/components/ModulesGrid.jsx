import { ClipboardList, BookOpen, GraduationCap, Users2, CalendarDays, Megaphone, Mail, FileCheck2, FileText, Blocks } from 'lucide-react'

const Card = ({ icon: Icon, title, desc }) => (
  <div className="group p-5 rounded-xl border border-gray-200 bg-white/70 backdrop-blur hover:shadow-md transition-all">
    <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
      <Icon size={20} />
    </div>
    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
)

export default function ModulesGrid() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Modular features</h2>
          <p className="text-gray-600">Each module is isolated and reusable in other codebases.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card icon={Users2} title="Users & Roles" desc="Admin, Teacher, Student, Parent with strict permissions." />
          <Card icon={CalendarDays} title="Attendance" desc="Separate flows for students and teachers." />
          <Card icon={ClipboardList} title="Assignments" desc="Teachers create; students view and submit." />
          <Card icon={FileText} title="Exams & Results" desc="Plan exams, publish results, control visibility." />
          <Card icon={BookOpen} title="Subjects & Lessons" desc="Syllabus mapping, lesson tracking, content links." />
          <Card icon={GraduationCap} title="Classes" desc="Classrooms, homerooms, and teacher supervisors." />
          <Card icon={Megaphone} title="Announcements" desc="Admin and teachers broadcast updates safely." />
          <Card icon={Mail} title="Messaging" desc="Role-aware communication with daily limits." />
          <Card icon={Blocks} title="Reusable APIs" desc="Clean endpoints designed for portability." />
          <Card icon={FileCheck2} title="Auditing" desc="Who changed what and when, for compliance." />
        </div>
      </div>
    </section>
  )
}
