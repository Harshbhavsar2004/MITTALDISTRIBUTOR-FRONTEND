'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
      {
        "id": 1,
        "quote": "The quality of service and products is outstanding. The team provides excellent support throughout the installation process.",
        "author": "Rajesh Kumar",
        "role": "Solar Consultant",
        "company": "GreenTech Solutions",
        "avatar": "/placeholder.svg?height=48&width=48"
      },
      {
        "id": 2,
        "quote": "Vikram Solar panels are highly efficient and reliable. The installation process was smooth and hassle-free.",
        "author": "Pooja Sharma",
        "role": "Energy Analyst",
        "company": "EcoEnergy Pvt. Ltd.",
        "avatar": "/placeholder.svg?height=48&width=48"
      },
      {
        "id": 3,
        "quote": "Fronius inverters have exceeded our expectations in terms of performance. The after-sales support is exceptional.",
        "author": "Amit Desai",
        "role": "Project Manager",
        "company": "Solarify India",
        "avatar": "/placeholder.svg?height=48&width=48"
      }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <Quote className="h-12 w-12 text-yellow-600" />
          <h2 className="text-4xl font-bold tracking-tight">What they say about Mittal Distributors</h2>
        </div>

        {/* Right Column - Testimonial Carousel */}
        <Card
          className="relative bg-gray-50/50"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <CardContent className="p-8">
            <h1 className='text-yellow-600 text-2xl' >What They Say!</h1>
            <div className="absolute right-6 top-6 flex gap-1.5 ">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={
                    currentIndex === index
                      ? "h-2 w-4 rounded-full bg-emerald-500 transition-all duration-300"
                      : "h-2 w-2 rounded-full bg-gray-300 transition-all duration-300"
                  }
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="relative overflow-hidden min-h-[200px] mt-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={
                    index === currentIndex
                      ? "absolute top-0 left-0 w-full opacity-100 translate-x-0 transition-all duration-500 ease-in-out"
                      : "absolute top-0 left-0 w-full opacity-0 translate-x-full transition-all duration-500 ease-in-out"
                  }
                  aria-hidden={index !== currentIndex}
                >
                  <blockquote className="space-y-6">
                    <p className="text-lg text-gray-700">"{testimonial.quote}"</p>
                    <footer className="flex items-center gap-4">
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
