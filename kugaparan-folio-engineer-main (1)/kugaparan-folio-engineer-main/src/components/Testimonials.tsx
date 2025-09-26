import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Mahinsasa Rathnayake",
      position: "Senior Lecturer",
      organization: "Department of Chemical and Process Engineering, University of Moratuwa",
      content: "Kugaparan demonstrates exceptional analytical skills and a deep understanding of chemical engineering principles. His ability to apply theoretical knowledge to practical problems is remarkable, and his dedication to process optimization makes him stand out among his peers.",
      rating: 5,
      avatar: "MR"
    },
    {
      id: 2,
      name: "Prof. Engineering Faculty",
      position: "Process Engineering Professor",
      organization: "University of Moratuwa",
      content: "His work on heat exchanger design and packed column projects showcases his strong foundation in thermodynamics and mass transfer. Kugaparan consistently delivers high-quality technical solutions with attention to detail.",
      rating: 5,
      avatar: "PF"
    },
    {
      id: 3,
      name: "Project Supervisor",
      position: "Academic Supervisor",
      organization: "Chemical Engineering Department",
      content: "Kugaparan's approach to the acetone production process design was comprehensive and well-researched. His ability to integrate economic analysis with technical design demonstrates mature engineering thinking.",
      rating: 5,
      avatar: "PS"
    },
    {
      id: 4,
      name: "Peer Collaboration",
      position: "Team Member",
      organization: "University Project Team",
      content: "Working with Kugaparan on various projects has been an excellent experience. His problem-solving abilities and collaborative approach make him an invaluable team member. His expertise in MATLAB and Python significantly contributed to our project success.",
      rating: 5,
      avatar: "PC"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Others Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Testimonials from professors, colleagues, and project collaborators
            </p>
          </div>

          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote size={48} />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-warning fill-warning" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-card-foreground leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonials[currentIndex].avatar}
                  </div>

                  {/* Author Info */}
                  <div>
                    <h4 className="font-bold text-card-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary font-medium">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].organization}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* All Testimonials Preview */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`card-hover bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? 'ring-2 ring-primary shadow-lg' : ''
                }`}
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;