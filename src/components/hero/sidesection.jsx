import React from "react";
import { Calculator, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom"; // For navigation
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Assuming you're using custom Tooltip components

export default function FloatingMenu() {
  const menuItems = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Call Us",
      href: "tel:+91 9403727364",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      href: "https://wa.me/+919403727364",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email Us",
      href: "mailto:info.mittaldistributors@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      href: "https://www.google.com/maps/place/MITTAL+DISTRIBUTORS/@20.8906692,74.7723693,782m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bdec5f9f7633e83:0xa2a2d96fee1f888!8m2!3d20.8906692!4d74.7749442!16s%2Fg%2F11gg675sl9?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-1 bg-black/80 p-2 rounded-l-lg">
          {menuItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  to={item.href} // Used 'to' for React Router
                  className="p-2 text-white hover:bg-white/20 rounded transition-colors duration-200"
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-black/90 text-white border-none">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
