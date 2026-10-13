import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Ajoke Luxe Nails",
  tagline: "Acrylic, Biogel, Gel X, and press ons in Ajax. Book online.",
  category: "Nail tech",
  schemaType: "BeautySalon",
  area: "Ajax, ON",
  siteUrl: "https://ajoke-luxe-nails.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#B76E79" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Ajax nail studio",
    headline: "Luxe sets, booked online",
    subhead:
      "Acrylic, Biogel, Gel X, manicures, press ons, soak offs, and toes. Book your appointment online, or send a DM with your idea.",
    images: [
      { src: "/images/post-1.jpg", alt: "Autumn nail set by Ajoke Luxe Nails" },
      { src: "/images/post-2.jpg", alt: "White and soft nail set" },
      { src: "/images/post-3.jpg", alt: "Biogel extension nail set" },
    ],
    primaryCta: {
      label: "Book online",
      href: "https://app.squareup.com/appointments/book/vedu3lckmu1elj/L8Y20MP0E1YX9/start",
    },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "2x certified nail tech",
    "Acrylic, Biogel, and Gel X",
    "Ajax, ON",
    "Book online with Square",
  ],

  about: {
    title: "Ajoke Luxe Nails",
    body: [
      "Ajoke Luxe Nails is an Ajax nail studio offering acrylic, Biogel, Gel X, manicures, press ons, soak offs, and toes. Every set is finished with care for clients across Durham Region.",
      "Book below on Square appointments, and please read the booking policy before you confirm. Prefer to chat first? Send a DM with your date and design idea.",
    ],
    image: { src: "/images/post-5.jpg", alt: "Nail set by Ajoke Luxe Nails" },
  },

  menu: {
    label: "Services",
    title: "What we offer",
    intro: "Services listed on the studio profile. Message or book online for pricing on your look and length.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us or book online for pricing on your look and length.",
    groups: [
      {
        title: "Nails",
        items: [
          { name: "Acrylic", description: "Full sets and fills." },
          { name: "Biogel", description: "Soft strength and extensions." },
          { name: "Gel X", description: "Extensions for length and shape." },
          { name: "Manicures", description: "Clean colour and finish." },
          { name: "Press ons", description: "Custom press on sets. Read the policy when you book." },
          { name: "Soak offs", description: "Gentle removal." },
          { name: "Toes", description: "Pedicure colour and acrylic toes." },
        ],
      },
    ],
    footnote: "Please read the booking policy on Square before confirming your appointment.",
  },

  gallery: {
    title: "Recent sets",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1440,
        alt: "Autumn nail set",
        caption: "Autumn set",
        href: "https://www.instagram.com/p/DeXRhdTHKe8/",
      },
      {
        src: "/images/post-2.jpg",
        width: 720,
        height: 960,
        alt: "Soft white nail set",
        caption: "Soft and clean",
        href: "https://www.instagram.com/p/DePxlSskdH0/",
      },
      {
        src: "/images/post-3.jpg",
        width: 1080,
        height: 1438,
        alt: "Biogel extension nails",
        caption: "Biogel extension",
        href: "https://www.instagram.com/p/DeCcnEknLdz/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1440,
        alt: "Detailed nail art set",
        caption: "Detail work",
        href: "https://www.instagram.com/p/Ddg97aahbUd/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1440,
        alt: "Acrylic toes",
        caption: "Acrylic toes",
        href: "https://www.instagram.com/p/DVjp7xPEWyB/",
      },
      {
        src: "/images/post-8.jpg",
        width: 1080,
        height: 1255,
        alt: "Square gel nail art",
        caption: "Square art",
        href: "https://www.instagram.com/p/DGJsQInRQ3g/",
      },
      {
        src: "/images/post-4.jpg",
        width: 640,
        height: 1136,
        alt: "Halloween nail set",
        caption: "Halloween set",
        href: "https://www.instagram.com/p/Dd4YGjWTRte/",
      },
      {
        src: "/images/post-6.jpg",
        width: 720,
        height: 1280,
        alt: "Nail set process",
        caption: "Set with me",
        href: "https://www.instagram.com/p/DbMP6NKnLqq/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "ajoke.luxenails",
    embeds: [
      "https://www.instagram.com/p/DeXRhdTHKe8/",
      "https://www.instagram.com/p/DeCcnEknLdz/",
      "https://www.instagram.com/p/Ddg97aahbUd/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book your appointment",
    intro:
      "Most clients book online on Square. Please read the policy before confirming. Prefer to message first? Copy a starter DM below.",
    dmMessage:
      "Hi Ajoke Luxe Nails! I would love to book a nail appointment.\nPreferred date:\nService (acrylic, Biogel, Gel X, manicure, press ons, or toes):\nDesign idea:",
    links: [
      {
        label: "Book on Square",
        href: "https://app.squareup.com/appointments/book/vedu3lckmu1elj/L8Y20MP0E1YX9/start",
      },
    ],
    note: "Please read the booking policy on Square before you confirm.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I book?",
      a: "Use the Square booking link to pick a time. Please read the policy first. If you have questions, send an Instagram DM.",
    },
    {
      q: "Where are you located?",
      a: "Appointments are in Ajax, Ontario. Details are shared when you book.",
    },
    {
      q: "What services do you offer?",
      a: "Acrylic, Biogel, Gel X, manicures, press ons, soak offs, and toes.",
    },
    {
      q: "Are you certified?",
      a: "Yes. Ajoke Luxe Nails is run by a 2x certified nail tech.",
    },
  ],

  contact: {
    title: "Contact and booking",
    area: "Ajax, Ontario",
    socials: [
      {
        label: "Book on Square",
        href: "https://app.squareup.com/appointments/book/vedu3lckmu1elj/L8Y20MP0E1YX9/start",
      },
    ],
  },

  seo: {
    title: "Ajoke Luxe Nails | Nail tech in Ajax",
    description:
      "Acrylic, Biogel, Gel X, manicures, and press ons in Ajax, ON. Book online on Square or send an Instagram DM.",
    keywords: [
      "Ajax nail tech",
      "Durham nail tech",
      "Gel X Ajax",
      "acrylic nails Ajax",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
