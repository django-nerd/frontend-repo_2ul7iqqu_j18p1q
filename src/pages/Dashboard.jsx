import React, { useEffect, useMemo, useState } from 'react';
import { apiFetch } from '../lib/api';
import { useAuth } from '../components/AuthProvider';

export default function Dashboard() {
  const { token, user } = useAuth();
  const [date, setDate] = useState(() => new Date().toISOString().slice(0,10));
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    if (!token || !isAdmin) return;
    setLoading(true);
    apiFetch('/dashboard', { method: 'POST', token, body: { date } })
      .then(setData)
      .catch(err => console.error(err))
      .finally(()=>setLoading(false));
  }, [token, isAdmin, date]);

  if (!isAdmin) return <div className="p-6">Only administrators can view this dashboard.</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="bg-gray-800 rounded px-3 py-2"/>
        </div>
        {loading && <div>Loading...</div>}
        {data && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded p-4">
                <h2 className="font-medium mb-2">Totals</h2>
                <div className="text-sm text-gray-300">Students: {data.totals.students}</div>
                <div className="text-sm text-gray-300">Teachers: {data.totals.teachers}</div>
              </div>
              <div className="bg-gray-800 rounded p-4">
                <h2 className="font-medium mb-2">Attendance on {data.date}</h2>
                <div className="text-sm text-gray-300">Students Present Records: {data.attendance.students}</div>
                <div className="text-sm text-gray-300">Teachers Present Records: {data.attendance.teachers}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded p-4">
                <h2 className="font-medium mb-2">Students by Gender</h2>
                <Bar data={genderToChart(data.gender.students)} />
              </div>
              <div className="bg-gray-800 rounded p-4">
                <h2 className="font-medium mb-2">Teachers by Gender</h2>
                <Bar data={genderToChart(data.gender.teachers)} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded p-4">
                <h2 className="font-medium mb-2">Events</h2>
                <ul className="space-y-2 text-sm text-gray-300 max-h-56 overflow-auto">
                  {data.events.map(e => <li key={e._id} className="flex items-center justify-between"><span>{e.title}</span><span className="text-gray-400">{e.date}</span></li>)}
                </ul>
              </div>
              <div className="bg-gray-800 rounded p-4">
                <h2 className="font-medium mb-2">Announcements</h2>
                <ul className="space-y-2 text-sm text-gray-300 max-h-56 overflow-auto">
                  {data.announcements.map(a => <li key={a._id} className="flex items-center justify-between"><span>{a.title}</span><span className="text-gray-400">{a.date || '—'}</span></li>)}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Bar({ data }){
  const total = data.reduce((s, d)=>s+d.value,0) || 1;
  return (
    <div className="space-y-2">
      {data.map(d => (
        <div key={d.label}>
          <div className="text-xs text-gray-400 mb-1">{d.label} - {d.value}</div>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="h-2 bg-indigo-500 rounded" style={{ width: `${(d.value/total)*100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function genderToChart(g){
  return [
    { label: 'Male', value: g.male || 0 },
    { label: 'Female', value: g.female || 0 },
    { label: 'Other', value: g.other || 0 },
  ];
}
