import { useEffect, useRef } from 'react'
import { Battery, Home, Sun , Mail} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/footer/Footer'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)


const solarData = [
  {
    logo: '/suryava.png',
    image: '/suryava-1.png.webp',
    title: 'Monocrystalline Solar PV Modules, Bifacial, MBB, G12 Half-Cell, HJT technology',
    application: 'Preferred for utility scale projects',
    range: '700-725W',
    efficiency: '23.34%',
    index: 0
  },
  {
    logo: '/hypersol_logo.png',
    image: '/hypersolpg.png',
    title: 'Monocrystalline Solar PV Modules, Bifacial, GG, G12 ntopCon',
    application: 'Preferred for utility scale projects',
    range: '415-715W',
    efficiency: '23.02%',
    index: 1
  },
  {
    logo: '/somera.png.webp',
    image: '/sm11.png',
    title: 'Somera, the monofacial multi busbar PV modules.',
    application: 'Across all solar segment projects having land constrain',
    range: '395-680W',
    efficiency: '21.70%',
    index: 2
  },
  {
    logo: '/paradea_logo.png',
    image: '/p1-21.png',
    title: 'Paradea, the bifacial glass-glass multi busbar PV modules.',
    application: 'Preferred for utility scale projects',
    range: '395-680W',
    efficiency: '22.01%',
    index: 3
  },
  {
    logo: '/para.png.webp',
    image: '/para211.png',
    title: 'Prexos, the bifacial glass to transparent backsheet multi busbar PV modules.',
    application: 'Applicable for rooftop projects with different roofing materials',
    range: '395-680W',
    efficiency: '21.89%',
    index: 4
  }
]

function SolarCard({ logo, image, title, application, range, efficiency, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Section: Image */}
      <div className="flex-shrink-0 md:w-1/3">
        <img src={image} alt="Solar panel" className="w-full h-full object-cover" />
      </div>

      {/* Right Section: Details */}
      <div className="flex-grow md:ml-6 space-y-4">
        <img src={logo} alt="Company logo" className="h-10" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="space-y-3">
          {/* Application */}
          <div className="flex items-start gap-3">
            <div className="p-3 bg-gray-100 rounded-full">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm">APPLICATION</p>
              <p className="text-gray-600 text-sm">{application}</p>
            </div>
          </div>

          {/* Range */}
          <div className="flex items-start gap-3">
            <div className="p-3 bg-gray-100 rounded-full">
              <Battery className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm">RANGE</p>
              <p className="text-gray-600 text-sm">{range}</p>
            </div>
          </div>

          {/* Maximum Efficiency */}
          <div className="flex items-start gap-3">
            <div className="p-3 bg-gray-100 rounded-full">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm">MAXIMUM EFFICIENCY</p>
              <p className="text-gray-600 text-sm">{efficiency}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RequestQuoteCard() {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center text-white text-center"
    >
      <Mail className="w-16 h-16 mb-6" />
      <h3 className="text-2xl font-bold mb-4">Ready to Harness the Power of the Sun?</h3>
      <p className="text-lg mb-6">Get a personalized quote for your solar energy needs and start saving today!</p>
      <Button onClick={() => navigate("/contact")} variant="secondary" size="lg" className="font-semibold">
        Request a Quote
      </Button>
    </div>
  );
}

export default function SolarCardsGrid() {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen bg-gray-50 p-6">
        <div
          className="absolute inset-0 bg-black opacity-40"
          style={{
            backgroundImage: "url('/solar-image-bg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solarData.map((card, index) => (
            <SolarCard key={index} {...card} index={index} />
          ))}
          <RequestQuoteCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

