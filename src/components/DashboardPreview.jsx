import { useMemo, useState } from 'react'
import { BarChart3, Users, UserCheck, User, Calendar } from 'lucide-react'

function Stat({ label, value, accent }) {
  return (
    <div className="p-4 rounded-xl border border-gray-200 bg-white/70">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${accent}`}>{value}</p>
    </div>
  )
}

function TinyBar({ boys = 0, girls = 0 }) {
  const total = Math.max(1, boys + girls)
  const boysPct = Math.round((boys / total) * 100)
  const girlsPct = 100 - boysPct
  return (
    <div className="h-2 w-full bg-gray-100 rounded overflow-hidden flex">
      <div className="bg-blue-500" style={{ width: `${boysPct}%` }} />
      <div className="bg-pink-500" style={{ width: `${girlsPct}%` }} />
    </div>
  )
}

export default function DashboardPreview() {
  const today = new Date().toISOString().slice(0, 10)
  const [date, setDate] = useState(today)

  const data = useMemo(() => {
    const seed = Number(date.replaceAll('-', ''))
    // Fake but deterministic numbers for the chosen date to demonstrate reactivity
    const rand = (n) => (seed % n) + Math.floor(n / 3)
    return {
      students: { total: 420 + rand(80), boys: 230 + rand(40), girls: 190 + rand(40) },
      teachers: { total: 38 + (seed % 5), male: 18 + (seed % 3), female: 20 + (seed % 2) },
      attendance: {
        students: { present: 360 + (seed % 40), absent: 40 + (seed % 20) },
        teachers: { present: 30 + (seed % 4), absent: 8 + (seed % 3) }
      },
      events: [
        { id: 1, title: 'Science Fair', when: date },
        { id: 2, title: 'PTA Meeting', when: date }
      ],
      announcements: [
        { id: 1, title: 'Midterm schedule published', when: date },
        { id: 2, title: 'Uniform drive next week', when: date }
      ]
    }
  }, [date])

  return (
    <section id="preview" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2"><BarChart3 size={22}/> Admin Dashboard Preview</h2>
          <label className="flex items-center gap-2 text-sm">
            <Calendar size={16} className="text-gray-500"/>
            <input type="date" className="border rounded-lg px-3 py-2 text-gray-700" value={date} onChange={e=>setDate(e.target.value)} />
          </label>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Stat label="Total Students" value={data.students.total} accent="text-blue-600" />
          <Stat label="Total Teachers" value={data.teachers.total} accent="text-indigo-600" />
          <Stat label="Student Present" value={data.attendance.students.present} accent="text-emerald-600" />
          <Stat label="Teacher Present" value={data.attendance.teachers.present} accent="text-teal-600" />
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          <div className="p-5 rounded-xl border border-gray-200 bg-white/70">
            <p className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2"><Users size={18}/> Students by Sex</p>
            <TinyBar boys={data.students.boys} girls={data.students.girls} />
            <div className="mt-3 text-xs text-gray-600 flex items-center gap-3">
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500"/>Boys {data.students.boys}</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-pink-500"/>Girls {data.students.girls}</span>
            </div>
          </div>
          <div className="p-5 rounded-xl border border-gray-200 bg-white/70">
            <p className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2"><User size={18}/> Teachers by Sex</p>
            <TinyBar boys={data.teachers.male} girls={data.teachers.female} />
            <div className="mt-3 text-xs text-gray-600 flex items-center gap-3">
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500"/>Male {data.teachers.male}</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-pink-500"/>Female {data.teachers.female}</span>
            </div>
          </div>
          <div className="p-5 rounded-xl border border-gray-200 bg-white/70">
            <p className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2"><UserCheck size={18}/> Attendance Today</p>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center justify-between"><span>Students</span><span className="font-semibold">{data.attendance.students.present}/{data.attendance.students.present + data.attendance.students.absent}</span></div>
              <div className="flex items-center justify-between"><span>Teachers</span><span className="font-semibold">{data.attendance.teachers.present}/{data.attendance.teachers.present + data.attendance.teachers.absent}</span></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-gray-200 bg-white/70">
            <p className="text-sm font-semibold text-gray-900 mb-3">Events</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {data.events.map(e => (
                <li key={e.id} className="flex items-center justify-between border-b last:border-0 border-gray-100 pb-2">
                  <span>{e.title}</span>
                  <span className="text-gray-500">{e.when}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-gray-200 bg-white/70">
            <p className="text-sm font-semibold text-gray-900 mb-3">Announcements</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {data.announcements.map(a => (
                <li key={a.id} className="flex items-center justify-between border-b last:border-0 border-gray-100 pb-2">
                  <span>{a.title}</span>
                  <span className="text-gray-500">{a.when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
