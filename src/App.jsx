import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ModulesGrid from './components/ModulesGrid';
import DashboardPreview from './components/DashboardPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main>
        <Hero />
        <ModulesGrid />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
