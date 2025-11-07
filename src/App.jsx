import Header from './components/Header'
import Hero from './components/Hero'
import ModulesGrid from './components/ModulesGrid'
import DashboardPreview from './components/DashboardPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <ModulesGrid />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  )
}

export default App
