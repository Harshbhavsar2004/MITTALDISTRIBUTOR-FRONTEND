import { useEffect, useRef } from 'react'
import { Battery, Cable, Flag, Home, ListOrdered, Power, Sun , Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/footer/Footer'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
gsap.registerPlugin(ScrollTrigger)


const solarData = [
    {
        image: '/fronius-symo-.png',
        title: 'The Symo GEN24 Advantages',
        application: '',
        madeIn : "Austria",
        Inputcurrent: 'Maximum flexibility',
        efficiency: 'Backup power for every situation',
        index: 0
    },
    {
        image: '/fronius-tauro-169-1-600x361.png',
        title: 'The Tauro Advantages',
        voltage: '200/1000 V',
        mppt: 3,
        efficiency: 98.6
    },
    {
        image: '/Fronius-Eco.png',
        title: 'The Eco Advantages',
        madeIn: 'Austria',
        voltage: '580/1000',
        Inputcurrent: '44.2',
        mppt: 1,
        efficiency: 98.2
    },
    {
        image: '/Fronius-SYMO.png',
        title: 'The Symo Advantages',
        madeIn: 'Austria',
        voltage: '325/1000',
        Inputcurrent: '50',
        mppt: 2,
        efficiency: 97.3
    },
    {
        image: '/Fronius-Primo.png',
        title: 'The Primo Advantages',
        madeIn: 'Austria',
        voltage: '80/600',
        Inputcurrent: '18',
        mppt:"1 and 2",
        efficiency: 97
    }

]

function SolarCard({ logo, image, title, madeIn, voltage, efficiency, Inputcurrent, mppt }) {
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
                <img src={image} alt="Solar panel" className="w-full h-full object-contain" />
            </div>

            {/* Right Section: Details */}
            <div className="flex-grow md:ml-6 space-y-4">
                <img src="/Fronius-Logo.png" alt="Company logo" className="h-10" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="space-y-3">
                    {/* Conditional Sections */}
                    {madeIn && (
                        <div className="flex items-start gap-3">
                            <div className="p-3 bg-gray-100 rounded-full">
                                <Flag className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Made In</p>
                                <p className="text-gray-600 text-sm">{madeIn}</p>
                            </div>
                        </div>
                    )}

                    {voltage && (
                        <div className="flex items-start gap-3">
                            <div className="p-3 bg-gray-100 rounded-full">
                                <Power className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Maximum/ Minimum Input DC Voltage</p>
                                <p className="text-gray-600 text-sm">{voltage}</p>
                            </div>
                        </div>
                    )}

                    {Inputcurrent && (
                        <div className="flex items-start gap-3">
                            <div className="p-3 bg-gray-100 rounded-full">
                                <Cable className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Maximum Usable Input Current (A)</p>
                                <p className="text-gray-600 text-sm">{Inputcurrent}</p>
                            </div>
                        </div>
                    )}

                    {mppt && (
                        <div className="flex items-start gap-3">
                            <div className="p-3 bg-gray-100 rounded-full">
                                <ListOrdered className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Number of MPPT</p>
                                <p className="text-gray-600 text-sm">{mppt}</p>
                            </div>
                        </div>
                    )}

                    {efficiency && (
                        <div className="flex items-start gap-3">
                            <div className="p-3 bg-gray-100 rounded-full">
                                <Sun className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Maximum Efficiency</p>
                                <p className="text-gray-600 text-sm">{efficiency}</p>
                            </div>
                        </div>
                    )}
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

export default function InverterCardGrid() {
    return (
        <div >
            <Navbar />
            <div className="relative min-h-screen bg-gray-50 p-6">
                <div
                    className="absolute inset-0 bg-black opacity-40"
                    style={{
                        backgroundImage: "url('/product-bg-image.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {solarData.map((card, index) => (
                        <SolarCard key={index} {...card} index={index} />
                    ))}
            <RequestQuoteCard/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

