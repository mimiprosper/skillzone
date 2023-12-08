import {
  facebook,
  instagram,
  twitter,
  shieldTick,
  support,
  truckFast,
  cheveronRight,
  chevronLeft,
} from "../assets/icons";

import { customer1, customer2 } from "../assets/images";

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const cheveron = [cheveronRight, chevronLeft];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Freelance Services" },
  { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const services = [
  {
    imgURL: truckFast,
    short: "coming soon...",
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    short: "coming soon...",
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    short: "",
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the service i got here exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The service not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Business", link: "/" },
      { name: "Digital Marketing", link: "/" },
      { name: "Designing", link: "/" },
      { name: "Software Development", link: "/" },
      { name: "Graphic Design", link: "/" },
      { name: "Video Editing", link: "/" },
      { name: "Content Creating", link: "/" },
      { name: "Music", link: "/" },
      { name: "Data", link: "/" },
      { name: "Handyman", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@skillzone.com", link: "mailto:customer@skillzone.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

