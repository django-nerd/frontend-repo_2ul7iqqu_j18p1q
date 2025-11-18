import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';

export default function Login() {
  const [email, setEmail] = useState('admin@school.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (e) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 rounded-xl p-6 space-y-4 shadow-xl">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        {error && <div className="text-red-400 text-sm">{error}</div>}
        <div className="space-y-2">
          <label className="block text-sm">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full bg-gray-700 rounded px-3 py-2 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="w-full bg-gray-700 rounded px-3 py-2 outline-none" />
        </div>
        <button className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded py-2">Sign in</button>
      </form>
    </div>
  );
}
