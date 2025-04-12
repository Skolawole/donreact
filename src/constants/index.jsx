import React from "react";
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

// Import images
import aboutsMainImg from "../image/abouts_main_img.jpg";
import customersImg2 from "../image/custmers_img2.jpg";
import customersImg3 from "../image/customers_img3.jpg";
import customersImg4 from "../image/customers_img4.jpg";
import customersImg5 from "../image/customers_img5.jpg";
import customersImg6 from "../image/customers_img6.jpg";
import profileImg1 from "../image/profileImg1.jpg";
import profileImg2 from "../image/profileImg2.jpg";
import profileImg3 from "../image/profileImg3.jpg";
import profileImg4 from "../image/profileImg4.jpg";
import profileImg5 from "../image/profileImg5.jpg";
import profileImg6 from "../image/profileImg6.jpg";

// Example profile images (already provided in the question)
import user1 from "../image/portfolio_img1.jpg";
import user2 from "../image/portfolio_img2.jpg";
import user3 from "../image/portfolio_img3.jpg";
import user4 from  "../image/profession_main_img.jpg";
import user5 from "../image/customers_main_img.jpg";
import user6 from "../image/forms_main_img.jpg";
import user7 from "../image/codeimage.jpg";
// Navigation Items
export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#tesimonials" },
];

// Testimonials
export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  // Add more testimonials if needed...
];

// Features
export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];
//Checklist items
export const checklistItems = [
  {
    Title: "Code Joining Made Easy",
    description: "Track your performance using a tech alignment way.",
  },
  {
    Title: "Streamlined Collaboration",
    description: "Work seamlessly with your team across all codebases.",
  },
  {
    Title: "Tech-Driven Progress",
    description: "Analyze and improve through structured performance insights.",
  },
  {
    Title: "Smart Workflow Management",
    description: "Organize tasks efficiently with a tech-aligned checklist system.",
  },
];
// Price list Options
export const priceOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private Board Sharing",
      "5 GB Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$9/month",
    features: [
      "Unlimited Boards",
      "50 GB Storage",
      "Advanced Analytics",
      "Team Collaboration",
    ],
  },
  {
    title: "Team",
    price: "$29/month",
    features: [
      "All Pro Features",
      "1 TB Storage",
      "Priority Support",
      "Custom Branding",
    ],
  },
];

//Testimonials
export const Testimonials = [
  {
    person: "Bolade houut",
    company: "Stellar",
    imageUser: profileImg1,
    text: "I am so excited using this platform, it is super cool!",
  },
  {
    person: "Buks Composure",
    company: "NovaTech",
    imageUser: profileImg2,
    text: "This platform has transformed the way I work. Highly recommended!",
  },
  {
    person: "yougiu Noot",
    company: "Skyline",
    imageUser: profileImg3,
    text: "Amazing experience! The features are just what I needed.",
  },
  {
    person: "Simbi hoe",
    company: "BrightPath",
    imageUser: profileImg4,
    text: "Super intuitive and user-friendly. Love it!",
  },
  {
    person: "DiUi BLoe",
    company: "EcoWave",
    imageUser: profileImg5,
    text: "A must-have tool for anyone looking to streamline their workflow.",
  },
  {
    person: "Morasi Guidar",
    company: "TechSphere",
    imageUser: profileImg6,
    text: "Incredible support and fantastic features. Truly a game-changer!",
  },
];


// Images to be displayed in your component
export const customerImages = [
  { src: customersImg2, alt: "Customer 2" },
  { src: customersImg3, alt: "Customer 3" },
  { src: customersImg4, alt: "Customer 4" },
  { src: customersImg5, alt: "Customer 5" },
  { src: customersImg6, alt: "Customer 6" },
];

const YourComponent = () => {
  return (
    <div>
      {/* Example of showing the "About" main image */}
      <div className="about-section">
        <img src={aboutsMainImg} alt="About Us" className="w-full h-auto" />
      </div>

      {/* Display Customer Images */}
      <div className="customer-images flex flex-wrap">
        {customerImages.map((image, index) => (
          <div key={index} className="customer-image-item w-1/5 p-4">
            <img src={image.src} alt={image.alt} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>

      {/* Example of Testimonials */}
      <div className="testimonials-section">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item p-4 border-b">
            <img
              src={testimonial.image}
              alt={testimonial.user}
              className="w-16 h-16 rounded-full"
            />
            <h3>{testimonial.user}</h3>
            <p>{testimonial.company}</p>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>

      {/* Example of Features */}
      <div className="features-section">
        {features.map((feature, index) => (
          <div key={index} className="feature-item p-4">
            <div className="icon">{feature.icon}</div>
            <h4>{feature.text}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
