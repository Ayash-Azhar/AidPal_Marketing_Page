import { Inter } from "next/font/google"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import WhyAidpal from "@/components/WhyAidpal"
import FeaturesSection from "@/components/FeaturesSection"
import HowItWorks from "@/components/HowItWorks"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"
import Vision from "@/components/Vision";
import Mission from "@/components/Mission";

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={`${inter.className} bg-white text-gray-800`}>
      <Header />
      <main>
        <HeroSection />
        <WhyAidpal />
        <FeaturesSection />
        <HowItWorks />
        <Vision />  {/* Added Vision Section */}
        <Mission /> {/* Added Mission Section */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

