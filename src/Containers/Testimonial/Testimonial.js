import React from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import rajshree from './assets/rajshree-nema.jpeg'
import srijan from './assets/srijan.jpeg'
import naman from './assets/naman.jpeg'

const TESTIMONIALS = [
  {
    review:
      "I rarely come across people who have deep understanding of the minutest scenarios. I was immensely impressed with her priority and time management skills in place! She has even worked at odd hours to help her team members. She would be an asset to any team and earns my highest recommendation.",
    image: rajshree,
    name: "Rajshree Nema",
    designation: "SDE, Addverb Technolgies",
  },
  {
    review:
      "Amruta is skilled software engineer with good design and logical thinking. She will be asset to the team wherever she goes.",
    image: naman,
    name: "Naman Gupta",
    designation: "Technology Lead, Addverb Technolgies",
  },
  {
    review:
      "I had the pleasure of working with Amruta at Addverb. I was impressed with her ability of getting things done quickly and perfectly, especially during unexpected and close deadlines. We together have designed and developed for multiple projects. She is a highly focused person and earns my heartfelt recommendation! ",
    image: srijan,
    name: "Srijan Jain",
    designation: "SDE, Addverb Technolgies",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container container">
      <div className="testimonial-title title">
        <div className="testimonial-primary-text">Testimonials</div>
        <div className="testimonial-secondary-text">What my colleagues say about me</div>
      </div>
      <div className="testimonial-carousel">
        {TESTIMONIALS.map((testimony) => (
          <TestimonialCard
            review={<q>{testimony.review}</q>}
            image={testimony.image}
            name={testimony.name}
            designation={testimony.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;