export const siteConfig = {
  name: "ShoreStack",
  tagline: "I help small businesses stop losing time to messy operations.",
  email: "shorestack@gmail.com",
  phone: "(240) 442-8990",
  url: "https://shorestack.com",
  description:
    "Solo developer helping small businesses simplify daily operations with custom software. No buzzwords, no complexity — just practical systems that save you time.",
  workingHours: "Monday – Friday, 9 AM – 5 PM",
  timezone: "Eastern Time (ET)",
  avgResponseTime: "Within 24 hours",
  lastUpdated: "February 2026",
  version: "2.0",
};

export interface IdentificationCard {
  id: string;
  label: string;
  symptoms: string[];
  suggestion: string;
}

export const identificationCards: IdentificationCard[] = [
  {
    id: "unorganized",
    label: "I run a small business and things feel unorganized",
    symptoms: [
      "Important details live in your head instead of a system",
      "You spend time looking for information instead of using it",
      "Tasks fall through the cracks regularly",
    ],
    suggestion:
      "A simple system that keeps everything in one place — tasks, notes, follow-ups — without the learning curve of complex software.",
  },
  {
    id: "messages",
    label: "Customers message or call constantly",
    symptoms: [
      "You answer the same questions over and over",
      "Customers call to check status or confirm bookings",
      "You miss messages because they come from everywhere",
    ],
    suggestion:
      "A way for customers to find answers, book, or check status themselves — so your phone rings less and you still look responsive.",
  },
  {
    id: "staff",
    label: "Staff tasks are hard to track",
    symptoms: [
      "You remind people about the same tasks repeatedly",
      "Nobody is sure who is responsible for what",
      "Things get done late or not at all",
    ],
    suggestion:
      "A clear task board where everyone sees their responsibilities and you stop being the middleman for every assignment.",
  },
  {
    id: "bookings",
    label: "Bookings or orders get confusing",
    symptoms: [
      "Double bookings happen more than they should",
      "You juggle calendars, texts, and spreadsheets",
      "Customers show up at wrong times or with wrong expectations",
    ],
    suggestion:
      "An online booking or ordering system that handles availability, confirmations, and reminders automatically.",
  },
  {
    id: "unsure",
    label: "I'm not sure — I just want things smoother",
    symptoms: [
      "You feel busy all day but not productive",
      "Small problems keep growing into bigger ones",
      "You know something could be better but are not sure what",
    ],
    suggestion:
      "A conversation where I listen to how your day actually works and point out where simple changes would make the biggest difference.",
  },
];

export interface Symptom {
  id: string;
  label: string;
}

export const symptoms: Symptom[] = [
  { id: "s1", label: "Customers call or message for things they could look up themselves" },
  { id: "s2", label: "You use WhatsApp, texts, or calls to coordinate staff" },
  { id: "s3", label: "Important information is in your head, not written down anywhere reliable" },
  { id: "s4", label: "You have missed a follow-up in the last month" },
  { id: "s5", label: "Scheduling conflicts happen regularly" },
  { id: "s6", label: "You spend time copying information between apps or spreadsheets" },
  { id: "s7", label: "New staff take a long time to figure out how things work" },
  { id: "s8", label: "You are interrupted multiple times daily for routine questions" },
  { id: "s9", label: "End-of-day or end-of-week reporting takes longer than it should" },
  { id: "s10", label: "You have thought about getting a system but it seemed too complicated or expensive" },
];

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  duration: string;
}

export const howIWorkSteps: TimelineStep[] = [
  {
    id: "observe",
    title: "Observe",
    description: "I spend time understanding how your business actually runs day to day. No assumptions.",
    duration: "1–2 days",
  },
  {
    id: "map",
    title: "Map",
    description: "I document where time gets wasted, where confusion happens, and what causes repeated problems.",
    duration: "1–2 days",
  },
  {
    id: "simplify",
    title: "Simplify",
    description: "Before building anything, I look for what can be removed, combined, or made automatic.",
    duration: "1 day",
  },
  {
    id: "build",
    title: "Build",
    description: "I create only what is needed — a focused system that fits your workflow, not the other way around.",
    duration: "2–4 weeks",
  },
  {
    id: "adjust",
    title: "Adjust",
    description: "After you use it, I refine. Real feedback from your team shapes the final result.",
    duration: "Ongoing",
  },
];

export interface BeforeAfter {
  id: string;
  area: string;
  before: string;
  after: string;
}

export const outcomes: BeforeAfter[] = [
  {
    id: "o1",
    area: "Customer Communication",
    before: "15+ calls and messages daily asking the same questions",
    after: "Customers check status, book, and find answers on their own",
  },
  {
    id: "o2",
    area: "Staff Coordination",
    before: "Verbal instructions forgotten within hours",
    after: "Clear task assignments visible to everyone",
  },
  {
    id: "o3",
    area: "Scheduling",
    before: "Double bookings, missed appointments, calendar confusion",
    after: "Automated availability, confirmations, and reminders",
  },
  {
    id: "o4",
    area: "Daily Reporting",
    before: "30+ minutes at end of day compiling information manually",
    after: "Reports generated automatically from the system",
  },
];

export interface TrustItem {
  text: string;
}

export const expectations: TrustItem[] = [
  { text: "I will ask questions before building anything" },
  { text: "You will have a working version to test before paying in full" },
  { text: "I will explain what I am building and why in plain language" },
  { text: "Changes after launch are normal and expected" },
  { text: "If something is not the right fit, I will tell you" },
];

export const guarantees: TrustItem[] = [
  { text: "No long-term contracts" },
  { text: "No jargon in communication" },
  { text: "No surprise costs" },
  { text: "You own everything I build for you" },
  { text: "I respond within one business day" },
];

export interface Story {
  id: string;
  situation: string;
  change: string;
  result: string;
}

export const operationalStories: Story[] = [
  {
    id: "st1",
    situation:
      "A salon owner was spending two hours every evening texting clients appointment reminders and checking the next day's schedule by hand.",
    change:
      "Built an online booking page where clients pick their own time slots and receive automatic confirmations and reminders.",
    result:
      "Evening admin time dropped to 15 minutes. No-shows decreased because clients got text reminders 24 hours before.",
  },
  {
    id: "st2",
    situation:
      "A small property manager tracked rent payments in a spreadsheet and received maintenance requests via text messages that often got lost.",
    change:
      "Created a tenant portal for rent payments and maintenance requests with automatic status updates.",
    result:
      "Missed maintenance requests dropped to zero. Tenants stopped calling to ask about the status of their repairs.",
  },
  {
    id: "st3",
    situation:
      "A catering company managed orders through WhatsApp messages, leading to missed details and incorrect deliveries twice a month.",
    change:
      "Built a simple order form that captures all details upfront and creates a checklist for the kitchen team.",
    result:
      "Order errors dropped from twice a month to nearly zero. Staff stopped interrupting the owner to clarify details.",
  },
];

export interface SolutionCategory {
  id: string;
  title: string;
  description: string;
  causes: string[];
  systemFix: string;
}

export const solutionCategories: SolutionCategory[] = [
  {
    id: "communication",
    title: "Communication Issues",
    description:
      "Customers and staff rely on calls, texts, and messaging apps for information that should be available without asking.",
    causes: [
      "No self-service option for customers to check status or find answers",
      "Information spread across WhatsApp, email, phone calls, and in-person conversations",
      "No central place where updates are posted for everyone to see",
    ],
    systemFix:
      "A customer-facing portal or status page where people find answers themselves, combined with internal notifications that keep your team informed without back-and-forth messaging.",
  },
  {
    id: "scheduling",
    title: "Scheduling Issues",
    description:
      "Appointments, bookings, or delivery windows are managed manually, leading to conflicts and wasted time.",
    causes: [
      "Availability tracked in personal calendars or paper books",
      "No automatic conflict detection",
      "Confirmations and reminders sent manually or not at all",
    ],
    systemFix:
      "An online scheduling system that shows real availability, prevents double bookings, and sends automatic confirmations and reminders to both you and your customers.",
  },
  {
    id: "tracking",
    title: "Tracking Issues",
    description:
      "Orders, inventory, or job progress is tracked in spreadsheets, notebooks, or memory — making it easy to lose details.",
    causes: [
      "Multiple versions of the same information in different places",
      "No single view of what is pending, complete, or overdue",
      "Status updates require asking someone instead of checking a system",
    ],
    systemFix:
      "A central tracking board or dashboard where every item has a clear status, assigned owner, and history — accessible to everyone who needs it.",
  },
  {
    id: "coordination",
    title: "Staff Coordination Issues",
    description:
      "Assigning tasks, checking progress, and making sure nothing is forgotten depends on verbal instructions and follow-ups.",
    causes: [
      "Tasks assigned verbally and forgotten",
      "No way to see what each person is working on",
      "The owner becomes the bottleneck for every decision and update",
    ],
    systemFix:
      "A simple task management system where assignments are visible, deadlines are clear, and progress is updated by the people doing the work — not just the person managing them.",
  },
];

export interface Example {
  id: string;
  title: string;
  situation: string;
  change: string;
  timeSaved: string;
}

export const examples: Example[] = [
  {
    id: "ex1",
    title: "Salon Appointment Booking",
    situation:
      "Owner managed all bookings through phone calls and a paper calendar. Evenings were spent texting reminders to clients for the next day.",
    change:
      "Clients now book online, see available slots, and receive automatic reminders. The calendar updates in real time.",
    timeSaved: "~10 hours per week",
  },
  {
    id: "ex2",
    title: "Property Maintenance Requests",
    situation:
      "Tenants sent maintenance requests via text. Some got lost, others were duplicated. The manager tracked everything in a spreadsheet.",
    change:
      "Tenants submit requests through a portal, see status updates, and receive notifications when work is completed.",
    timeSaved: "~6 hours per week",
  },
  {
    id: "ex3",
    title: "Catering Order Management",
    situation:
      "Orders came through WhatsApp with voice notes, photos of menus, and follow-up questions. Kitchen staff frequently asked the owner to clarify details.",
    change:
      "Customers fill out a structured order form. Kitchen staff see a clear checklist for each order with all details included.",
    timeSaved: "~8 hours per week",
  },
  {
    id: "ex4",
    title: "Inventory for Party Supplies Rental",
    situation:
      "Owner tracked rental items in a notebook. Items were often double-rented or returned late without follow-up.",
    change:
      "A digital inventory system shows what is available, what is rented, and sends automatic return reminders.",
    timeSaved: "~5 hours per week",
  },
];

export const wizardSteps = {
  businessTypes: [
    "Salon or spa",
    "Restaurant or catering",
    "Property management",
    "Retail or e-commerce",
    "Professional services (consulting, legal, accounting)",
    "Health and wellness",
    "Events and entertainment",
    "Other",
  ],
  frustrations: [
    "Too many calls and messages to handle",
    "Scheduling and booking confusion",
    "Staff not following through on tasks",
    "Losing track of orders or inventory",
    "Spending too much time on admin work",
    "Customers not finding information they need",
    "Other",
  ],
  teamSizes: [
    "Just me",
    "2–5 people",
    "6–15 people",
    "16–30 people",
    "More than 30",
  ],
  currentTools: [
    "WhatsApp or text messages",
    "Excel or Google Sheets",
    "Paper notebooks or calendars",
    "Multiple separate apps",
    "A system that does not work well",
    "Nothing — everything is in my head",
  ],
};
