export const siteConfig = {
  name: "ShoreStack",
  tagline: "Clean Design. Powerful Systems. One Partner.",
  email: "k.patelsoftwaredeveloper@gmail.com",
  phone: "(555) 000-0000",
  url: "https://shorestack.com",
  description:
    "ShoreStack delivers clean design and powerful systems. 20 years of full stack engineering experience building enterprise SaaS platforms, modern web apps, and scalable digital systems.",
};

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemsSolved: string;
  benefits: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "custom-website",
    title: "Custom Website Design and Development",
    shortDescription:
      "Modern responsive websites that look clean and work smoothly on every device.",
    fullDescription:
      "Your website is often the first thing a potential customer sees. A custom designed website ensures that first impression is a lasting one. We build modern, responsive websites from scratch using the latest technology so your business looks polished and professional on every screen. Whether visitors arrive on a phone, tablet, or desktop, the experience is seamless. No templates, no shortcuts. Every layout, color, and interaction is crafted to match your brand and guide visitors toward taking action.",
    problemsSolved:
      "Outdated designs that push visitors away. Confusing layouts where people cannot find what they need. Slow loading pages that hurt search rankings and frustrate users. Cookie cutter templates that make your business look like everyone else.",
    benefits:
      "You get a website that makes a strong first impression and builds trust instantly. Visitors stay longer, explore more, and are more likely to become customers. You can focus on running your business while we handle the design, development, and technical details.",
    icon: "globe",
  },
  {
    id: "saas-architecture",
    title: "Full SaaS Architecture and Development",
    shortDescription:
      "Enterprise level systems built with modern technology that scales with your business.",
    fullDescription:
      "Building a software as a service platform requires more than just writing code. It requires careful architecture, security planning, and infrastructure that can grow with demand. We design and build SaaS products from the ground up using proven patterns for multi tenancy, data isolation, authentication, billing integration, and API design. Whether you are launching a new product or rebuilding an existing one, we create systems that are reliable, maintainable, and ready for scale.",
    problemsSolved:
      "Unreliable applications that crash under load. Slow performance that drives users away. Technical debt that slows down every new feature. Security gaps that put your business and your customers at risk.",
    benefits:
      "You get a platform that is stable, fast, and secure from day one. Your development team can ship features faster because the foundation is solid. You can focus on growing your user base while we handle the engineering complexity.",
    icon: "server",
  },
  {
    id: "real-estate",
    title: "Multi Tenant Real Estate Platforms",
    shortDescription:
      "Property management systems with listings, tenant portals, payments, and reporting all in one place.",
    fullDescription:
      "Managing real estate across multiple properties and tenants means juggling listings, applications, lease agreements, rent collection, maintenance requests, and financial reporting. We build custom platforms that bring all of this into a single system. Each property owner or management company gets their own secure space while sharing the same powerful infrastructure. From tenant portals where renters can pay rent and submit maintenance requests to admin dashboards with real time reporting, everything works together.",
    problemsSolved:
      "Manual processes that waste hours every week. Scattered tools that do not talk to each other. Inconsistent data that leads to mistakes and missed payments. Tenants who cannot easily communicate with management.",
    benefits:
      "You get a single platform that handles everything from listings to payments to maintenance. Your team spends less time on paperwork and more time on growing the portfolio. Tenants get a better experience which means fewer complaints and longer lease terms. You can focus on your properties while we build and maintain the technology.",
    icon: "building",
  },
  {
    id: "asset-management",
    title: "Asset Management Applications",
    shortDescription:
      "Track assets, maintenance schedules, lifecycle data, and generate reports with clarity.",
    fullDescription:
      "Every business that owns equipment, vehicles, technology, or physical assets needs a reliable way to track what they have, where it is, what condition it is in, and when it needs attention. We build custom asset management applications that replace spreadsheets and guesswork with real time visibility. Track purchase dates, warranty information, maintenance history, depreciation, and location. Set up automated alerts for upcoming service dates and generate reports that help you make smarter decisions about replacements and budgets.",
    problemsSolved:
      "Spreadsheet chaos where critical information gets lost or outdated. Missing maintenance records that lead to costly breakdowns. No clear picture of asset lifecycle or total cost of ownership. Wasted time searching for information across different files and systems.",
    benefits:
      "You get a centralized system where every asset is tracked and every record is current. Your team makes better decisions about when to repair and when to replace. Maintenance happens on schedule which extends the life of your assets. You can focus on operations while we build the system that keeps everything organized.",
    icon: "clipboard",
  },
  {
    id: "booking-systems",
    title: "Online Booking Systems",
    shortDescription:
      "Let your customers book appointments online anytime without the back and forth.",
    fullDescription:
      "Service businesses like salons, restaurants, pet groomers, consultants, and fitness studios depend on appointments. When customers cannot book easily, they go somewhere else. We build custom online booking systems that let your customers see availability, choose a time, and confirm their appointment in seconds. Automated reminders reduce no shows. Calendar integration keeps your team organized. Whether you need simple time slot booking or complex multi staff scheduling with service categories, we build it to fit your workflow.",
    problemsSolved:
      "Missed phone calls that mean missed revenue. Double bookings that frustrate customers and staff. Scheduling confusion that wastes time every day. No shows that cost money because there are no automated reminders.",
    benefits:
      "Your customers can book anytime, even outside business hours. Your staff spends less time on the phone and more time serving customers. Automated reminders mean fewer no shows and a fuller schedule. You can focus on delivering great service while the booking system handles the logistics.",
    icon: "calendar",
  },
  {
    id: "website-redesign",
    title: "Website Redesign for Outdated Sites",
    shortDescription:
      "Transform your outdated website into a clean, modern experience that builds trust.",
    fullDescription:
      "An outdated website does more harm than having no website at all. Visitors form an opinion about your business in seconds and a slow, cluttered, or dated design tells them to look elsewhere. We take your existing website and rebuild it with a fresh modern design, improved navigation, faster load times, and better mobile responsiveness. We keep what works, fix what does not, and ensure the new site reflects the quality of your business. Every redesign includes improved SEO fundamentals so search engines can find you more easily.",
    problemsSolved:
      "Poor first impressions that cost you customers before they even read your content. Low customer trust because the site looks unprofessional or abandoned. Bad mobile experience that drives away the majority of your visitors. Weak search engine visibility because the site was not built with SEO in mind.",
    benefits:
      "You get a website that looks professional and feels modern. Visitors trust your business immediately and stay longer to explore your offerings. Mobile users have a smooth experience which means more inquiries and sales. You can focus on your business while we handle the complete transformation.",
    icon: "refresh",
  },
  {
    id: "local-seo",
    title: "Local SEO Setup",
    shortDescription:
      "Get found by customers in your area through Google and local search results.",
    fullDescription:
      "Most customers search online before choosing a local business. If you do not show up in those searches, you are invisible to potential customers who are ready to buy. We set up and optimize your Google Business Profile, ensure your business information is consistent across all directories, implement local schema markup on your website, and create a strategy to improve your visibility in local search results. This is not about tricks or shortcuts. It is about making sure Google understands what your business does and where you are located so it can show you to the right people.",
    problemsSolved:
      "Low search ranking that means competitors get the calls instead of you. Inconsistent business information across the web that confuses both customers and search engines. No Google Business Profile or a profile that is incomplete and unoptimized. Missing out on customers who are searching for exactly what you offer in your area.",
    benefits:
      "You get discovered by nearby customers who are actively searching for your services. Your business information is accurate and consistent everywhere online. Your Google Business Profile is optimized to appear in local search results and map listings. You can focus on serving customers while we handle the technical side of local visibility.",
    icon: "map",
  },
];

export interface PortfolioItem {
  title: string;
  category: string;
  url: string | null;
  image: string | null;
  isPlaceholder: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Restaurant Website",
    category: "Web Design",
    url: "https://saffron-amber.vercel.app/",
    image: null,
    isPlaceholder: false,
  },
  {
    title: "Pet Grooming Website",
    category: "Web Design",
    url: "https://dog-best-friend.vercel.app/",
    image: null,
    isPlaceholder: false,
  },
  {
    title: "Nail Salon Website",
    category: "Web Design",
    url: null,
    image: null,
    isPlaceholder: true,
  },
  {
    title: "SaaS Dashboard",
    category: "SaaS Platform",
    url: null,
    image: null,
    isPlaceholder: true,
  },
  {
    title: "Real Estate Platform",
    category: "Multi Tenant System",
    url: null,
    image: null,
    isPlaceholder: true,
  },
  {
    title: "Asset Management System",
    category: "Enterprise App",
    url: null,
    image: null,
    isPlaceholder: true,
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Owner",
    company: "Bloom & Co Salon",
    text: "ShoreStack completely transformed our online presence. Our new booking system cut down phone calls by half and our customers love being able to schedule appointments anytime. The website looks incredible on mobile which is where most of our clients find us.",
  },
  {
    name: "James Rodriguez",
    role: "Managing Director",
    company: "Apex Property Group",
    text: "We needed a platform that could handle multiple properties and hundreds of tenants. ShoreStack built us a system that replaced five different tools with one clean dashboard. Rent collection, maintenance requests, reporting. Everything just works.",
  },
  {
    name: "Emily Chen",
    role: "Founder",
    company: "TasteBud Kitchen",
    text: "Our old website looked like it was built ten years ago because it was. ShoreStack gave us a modern design that actually represents the quality of our food. Since the redesign, our online reservations have doubled.",
  },
];
