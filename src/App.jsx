import './App.css'
import ProfileCard from './components/ProfileCard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FeatureCard from './components/FeatureCard'

function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <main className='flex-1 p-6'> 
        <div className='flex items-center justify-center py-8'>
          <ProfileCard />
        </div>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
          <FeatureCard title="HTML & CSS" description="Building structured, styled web pages" level="Advanced"/>
          <FeatureCard title="JavaScript" description="Adding interactivity and logic" level="Intermediate" />
          <FeatureCard title="React" description="Creating dynamic user interfaces" level="Beginner"/>
        </section>
      </main>
      <Footer/> 
    </div>
  )
}

export default App