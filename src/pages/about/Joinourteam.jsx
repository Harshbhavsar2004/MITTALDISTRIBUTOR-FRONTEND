import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import gsap from "gsap";
import { Separator } from "@/components/ui/separator";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

export default function EnhancedJoinOurTeamForm() {
  const [applicantName, setApplicantName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const formRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current.children,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const applicantData = {
      applicantName,
      email,
      phone,
      address,
    };

    try {
      const response = await fetch(
        "https://backend-mu-orpin.vercel.app/api/job-applications/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(applicantData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Application submitted:", result);
        toast.success("Application submitted successfully!");
        // Clear form fields
        setApplicantName("");
        setEmail("");
        setPhone("");
        setAddress("");
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Failed to submit application:", error);
      toast.error("Failed to submit application.");
    }
  };

  return (
    <div className=" w-full bg-white flex flex-col md:flex-row"
    >
      <div className="md:w-1/2 relative flex  flex-col justify-center items-center">
        <h1 className="font-bold text-black text-4xl -mt-7">Join Our Best Team </h1>
        <p className="text-center mt-5 w-3/4">Join our team and be a part of the future of sustainable energy! At MittalDistributors, we’re passionate about delivering innovative solar solutions and building a greener planet. Together, let’s power a brighter tomorrow!</p>
        <h2 className="mt-5 font-mono font-extrabold text-2xl">~ By Akshay Mittal</h2>
      </div>
      <div className="md:w-1/2 p-6 md:p-10 relative" ref={formRef}>
        <Toaster />
        <div className="relative z-10 bg-white bg-opacity-80 p-6 md:p-8 rounded-lg ">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center space-x-2">
                <User className="w-5 h-5 text-red-600" />
                <span>Name</span>
              </Label>
              <Input
                id="name"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                required
                className="border-red-600 w-full h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-600" />
                <span>Email</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-red-600 w-full h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-600" />
                <span>Mobile Number</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="border-red-600 w-full h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <span>Address</span>
              </Label>
              <Textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="border-red-600 w-full h-24"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-10 bg-slate-800 hover:bg-slate-700"
            >
              Submit Application
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
