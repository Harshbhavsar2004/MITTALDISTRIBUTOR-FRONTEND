import { useState } from 'react'
import { PhoneIcon as WhatsappIcon, SignalIcon as TelegramIcon, FacebookIcon, LinkedinIcon } from 'lucide-react'
import { Footer } from '@/components/footer/Footer'
import Navbar from '@/components/navigation/navbar'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const { toast } = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = { name, email, phone, message }

        try {
            const response = await fetch('http://localhost:5000/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                toast.success('Contact form submitted successfully!')
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
            } else {
                throw new Error('Failed to submit contact form')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const validatePhone = (e) => {
        const value = e.target.value
        setPhone(value)
        if (!/^\+?[\d\s-]+$/.test(value)) {
            setPhoneError('Enter a valid number')
        } else {
            setPhoneError('')
        }
    }

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <div className="w-full max-w-6xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">
                    {/* Left Section */}
                    <div className="bg-[#1a2234] text-white p-8 space-y-6">
                        <h1 className="text-3xl font-semibold mb-8">Request Qoute</h1>
                        <Separator />
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium w-32">Email Address</span>
                                    <span>info.mittaldistributors@gmail.com</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="font-medium w-32">Phone Number</span>
                                    <span>+91 94037 27364</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="font-medium w-32">Address</span>
                                    <span>MIDC , Dhule</span>
                                </div>
                            </div>
                        </div>

                        {/* Map Image */}
                        <div className="my-10 w-full h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.925992284791!2d74.7728634!3d20.890982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5f9f7633e83%3A0xa2a2d96fee1f888!2sMITTAL%20DISTRIBUTORS!5e0!3m2!1sen!2sin!4v1694609923741!5m2!1sen!2sin"
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Mittal Distributors Location"
                                width="100%"
                                height="50%"
                                className='rounded'
                            >
                            </iframe>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="bg-white p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={phone}
                                    onChange={validatePhone}
                                    required
                                />
                                {phoneError && (
                                    <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                                )}
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-[#e07d6d] text-white py-3 rounded-lg transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

