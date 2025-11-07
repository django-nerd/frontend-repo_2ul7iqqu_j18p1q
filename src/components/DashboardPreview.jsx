import React from 'react';
import { Calendar, Users, User, Activity, Bell } from 'lucide-react';

const Stat = ({ label, value, icon: Icon, accent }) => (
  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
    </div>
    <div className={`rounded-lg p-2 ${accent}`}>
      <Icon className="h-5 w-5" />
    </div>
  </div>
);

const TinyBar = ({ a, b }) => {
  const total = Math.max(1, a + b);
  const aw = Math.round((a / total) * 100);
  const bw = 100 - aw;
  return (
    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div className="h-full bg-indigo-500" style={{ width: `${aw}%` }} />
      <div className="-mt-2 h-2 bg-emerald-500" style={{ width: `${bw}%` }} />
    </div>
  );
};

const DashboardPreview = () => {
  const [date, setDate] = React.useState(() => new Date().toISOString().slice(0, 10));

  const data = React.useMemo(() => {
    const seed = new Date(date).getDate();
    const students = 520 + (seed % 30);
    const teachers = 42 + (seed % 5);
    const attendance = 80 + (seed % 15);
    const male = Math.floor(students * (0.48 + (seed % 5) / 100));
    const female = students - male;
    const events = [
      { time: '09:00', title: 'Math Quiz - Grade 8' },
      { time: '12:30', title: 'PTA Committee' },
      { time: '15:00', title: 'Football Practice' },
    ];
    const announcements = [
      { title: 'Midterm schedule published' },
      { title: 'New assignment template' },
      { title: 'Science fair registrations open' },
    ];
    return { students, teachers, attendance, male, female, events, announcements };
  }, [date]);

  return (
    <section id="demo" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Admin dashboard preview</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-300 md:text-base">Change the date to see simulated data change across stats, charts, events and announcements.</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Stat label="Students" value={data.students} icon={Users} accent="bg-indigo-500/20 text-indigo-300" />
        <Stat label="Teachers" value={data.teachers} icon={User} accent="bg-emerald-500/20 text-emerald-300" />
        <Stat label="Attendance" value={`${data.attendance}%`} icon={Activity} accent="bg-amber-500/20 text-amber-300" />
        <Stat label="Events Today" value={data.events.length} icon={Calendar} accent="bg-pink-500/20 text-pink-300" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 md:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-white">Gender distribution</h3>
            <span className="text-xs text-gray-400">Students</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-300">Male: {data.male}</p>
              <TinyBar a={data.male} b={data.female} />
            </div>
            <div>
              <p className="text-sm text-gray-300">Female: {data.female}</p>
              <TinyBar a={data.female} b={data.male} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-white">Events</h3>
              <Calendar className="h-4 w-4 text-gray-400" />
            </div>
            <ul className="space-y-2">
              {data.events.map((e) => (
                <li key={e.title} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <span className="text-sm text-gray-200">{e.title}</span>
                  <span className="text-xs text-gray-400">{e.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-white">Announcements</h3>
              <Bell className="h-4 w-4 text-gray-400" />
            </div>
            <ul className="space-y-2">
              {data.announcements.map((a) => (
                <li key={a.title} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-200">{a.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
