import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import WhyAidpal from "@/components/WhyAidpal"
import FeaturesSection from "@/components/FeaturesSection"
import HowItWorks from "@/components/HowItWorks"
import FAQ from "@/components/FAQ"; // Import the FAQ component
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"
import Vision from "@/components/Vision";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <LoadingScreen />
        <HeroSection />
        <WhyAidpal />
        <FeaturesSection />
        <HowItWorks />
        <Vision />
        <Mission /> 
        <FAQ /> 
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

