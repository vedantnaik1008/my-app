import LandingNavbar from '@/components/LandingNavbar'
import LandingHero from '@/components/LandingHero'
import LandingContent from '@/components/LandingContent'

const page = () => {
  return (
    <div className="h-screen">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}

export default page
