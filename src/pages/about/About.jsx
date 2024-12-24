import { Calendar, Sun } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Footer } from '@/components/footer/Footer'
import Navbar from '@/components/navigation/navbar'

export default function AboutPage() {
  return (
   <div>
    <Navbar/>
     <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/a-picturesque-symphony-of-renewable-energy-as-solar-panels-harmoniously-grace-a-vibrant-and.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Mittal Distributors</h1>
            <p className="text-xl">Leading the Solar Revolution in India since 2001</p>
          </div>
        </div>
      </div>

      {/* Company History */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex md:flex-row flex-col-reverse">
        <div className="flex-1 space-y-6">
          <div className="flex gap-4">
            <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Established in 2001</h3>
              <p className="text-gray-600">
                Founded in Dhule, Maharashtra, with a focus on enhancing the use of sustainable solar energy across India.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Solar Energy Focus</h3>
              <p className="text-gray-600">
                Specializing in the provision of high-quality Vikram Solar panels and Fronius inverters, tailored for efficient energy solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 m-4">
          <video 
            autoPlay
            loop
            muted
            className="w-full h-full rounded"
          >
            <source src='/2836004-uhd_3840_2160_24fps.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Products & Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solar Solutions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Vikram Solar Panels</h3>
                    <p className="text-gray-600">
                      We provide Vikram Solar panels, known for their efficiency and durability, ensuring optimal solar energy solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Fronius Inverters</h3>
                    <p className="text-gray-600">
                      Offering Fronius inverters, acclaimed for their innovative technology and reliability in solar energy systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We strive to lead the solar energy revolution in India, providing sustainable solutions that power the future while serving as a trusted partner for residential and commercial solar projects.
          </p>
        </div>
      </section>
    </div>
    <Footer/>
   </div>
  )
}

