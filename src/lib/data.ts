export const siteConfig = {
  name: "ShoreStack",
  tagline: "We help small businesses save time and money with simple, affordable systems.",
  email: "shorestack@gmail.com",
  phone: "(240) 442-8990",
  url: "https://shorestack.com",
  description:
    "ShoreStack is a small local business in Maryland that builds affordable, practical software for small businesses. We keep costs low, work within your budget, and focus on saving you time and money every single day.",
  workingHours: "Monday - Friday, 9 AM - 5 PM",
  timezone: "Eastern Time (ET)",
  avgResponseTime: "Within 24 hours",
  lastUpdated: "February 2026",
  version: "2.1",
  location: "Maryland, USA",
};

export interface IdentificationCard {
  id: string;
  label: string;
  description: string;
  symptoms: string[];
  suggestion: string;
}

export const identificationCards: IdentificationCard[] = [
  {
    id: "unorganized",
    label: "Everything feels scattered",
    description: "You know things should be more organized, but there is no time to fix it.",
    symptoms: [
      "Important details live in your head instead of a system anyone can access",
      "You waste time every day looking for information that should be easy to find",
      "Tasks slip through the cracks because there is no reliable way to track them",
    ],
    suggestion:
      "Most businesses in this situation need one central place where tasks, notes, and follow-ups live together. Not a complicated system with a learning curve, just a straightforward tool where your team can see what needs to happen and when. We build these starting from a few hundred dollars, depending on what you actually need.",
  },
  {
    id: "messages",
    label: "Too many calls and messages",
    description: "Your phone never stops ringing with questions you have already answered.",
    symptoms: [
      "You answer the same questions from customers over and over throughout the day",
      "Customers call just to check on their booking status or confirm appointments",
      "Messages come in through WhatsApp, texts, calls, and email all at once",
    ],
    suggestion:
      "When customers keep calling for the same information, it usually means they do not have a way to find answers on their own. A simple self-service page where they can check status, confirm bookings, or find answers to common questions can cut your daily calls in half. This is one of the most affordable fixes we offer because it pays for itself within weeks.",
  },
  {
    id: "staff",
    label: "Staff tasks are hard to track",
    description: "You spend more time managing people than running the business.",
    symptoms: [
      "You remind the same people about the same tasks multiple times a week",
      "Nobody is sure who is responsible for what on any given day",
      "Things get done late because there is no clear system for assignments",
    ],
    suggestion:
      "A clear task board where everyone can see their responsibilities changes everything. Your staff checks it in the morning, updates it during the day, and you stop being the middleman for every single assignment. We can set this up quickly and affordably.",
  },
  {
    id: "bookings",
    label: "Bookings or orders get messy",
    description: "Double bookings, missed appointments, and confused customers.",
    symptoms: [
      "Double bookings happen more often than you would like to admit",
      "You juggle between calendars, text messages, and spreadsheets to track appointments",
      "Customers show up at the wrong time or with the wrong expectations",
    ],
    suggestion:
      "An online booking system that shows real availability, prevents conflicts, and sends automatic reminders solves this permanently. Your customers book on their own, get a confirmation right away, and you never have to manually send reminders again. We build these within your budget.",
  },
  {
    id: "unsure",
    label: "Not sure what I need",
    description: "You know something needs to change, just not sure where to start.",
    symptoms: [
      "You feel busy all day but somehow not productive",
      "Small problems keep growing into bigger ones because there is no time to address them",
      "You have thought about getting help but were not sure who to call or what to ask for",
    ],
    suggestion:
      "That is completely normal. Most of our clients start exactly here. We begin with a conversation where we listen to how your day actually works and point out where small changes would make the biggest difference. There is no cost for this initial conversation, and we will be honest about whether we can help.",
  },
];

export interface Symptom {
  id: string;
  label: string;
}

export const symptoms: Symptom[] = [
  { id: "s1", label: "Customers call or message for things they could look up themselves" },
  { id: "s2", label: "You use WhatsApp, texts, or calls to coordinate your team" },
  { id: "s3", label: "Important business information is stored only in your head" },
  { id: "s4", label: "You have missed a follow-up with a customer in the last month" },
  { id: "s5", label: "Scheduling conflicts or double bookings happen regularly" },
  { id: "s6", label: "You copy information between different apps or spreadsheets" },
  { id: "s7", label: "New employees take a long time to learn how things work" },
  { id: "s8", label: "You get interrupted multiple times a day for routine questions" },
  { id: "s9", label: "End-of-day or end-of-week reporting takes longer than it should" },
  { id: "s10", label: "You have looked into software solutions but they seemed too expensive or complicated" },
];

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  detail: string;
  duration: string;
}

export const howIWorkSteps: TimelineStep[] = [
  {
    id: "observe",
    title: "Listen",
    description: "We start by understanding how your business actually runs today.",
    detail: "Before we touch any technology, we sit down with you and learn how your day works from start to finish. We ask about the things that slow you down, the tasks that take too long, and the problems that keep coming back. This is not a sales call. It is a working session where we figure out together whether we can actually help. If we cannot, we will tell you honestly.",
    duration: "1-2 days",
  },
  {
    id: "map",
    title: "Analyze",
    description: "We document where time is being wasted and why.",
    detail: "After listening, we map out your workflow step by step. We identify the exact points where time gets lost, where confusion happens, and what causes the same problems to repeat. Most business owners are surprised to discover that three or four simple bottlenecks are responsible for most of their daily frustration. We document all of this clearly so you can see it too.",
    duration: "1-2 days",
  },
  {
    id: "simplify",
    title: "Plan",
    description: "We figure out the simplest fix that delivers the biggest improvement.",
    detail: "Before building anything, we look for what can be removed, combined, or automated. Sometimes the best solution is not new software at all. Sometimes it is connecting two tools you already have, or removing a step that is not necessary. We always look for the smallest, most affordable change that gives you the biggest return. We give you a clear plan with a fixed price before any work begins.",
    duration: "1 day",
  },
  {
    id: "build",
    title: "Build",
    description: "We create exactly what you need, nothing more.",
    detail: "We build a focused system that fits your actual workflow rather than forcing you to change how you work. You will see a working version early so you can test it with your team before paying in full. We do not disappear for weeks and come back with something you did not ask for. You will know what is happening throughout the entire process, and the cost will never exceed what we agreed on.",
    duration: "2-4 weeks",
  },
  {
    id: "adjust",
    title: "Support",
    description: "We refine based on real use and stay available.",
    detail: "After your system goes live, we stick around. Your team will have questions. Workflows change. Things come up that nobody predicted. We make adjustments based on how the system actually performs in your day-to-day operations, not based on assumptions. The first version is rarely the final one, and we do not charge you extra for reasonable refinements.",
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
    before: "15+ calls and messages daily asking the same questions you have already answered",
    after: "Customers check status, book appointments, and find answers on their own through a simple online page",
  },
  {
    id: "o2",
    area: "Staff Coordination",
    before: "Verbal instructions that get forgotten within hours, leading to missed tasks and confusion",
    after: "Clear task assignments visible to everyone on a shared board that updates in real time",
  },
  {
    id: "o3",
    area: "Scheduling",
    before: "Double bookings, missed appointments, and time wasted on manual calendar management",
    after: "Automated scheduling with real-time availability, instant confirmations, and reminders sent automatically",
  },
  {
    id: "o4",
    area: "Daily Reporting",
    before: "30+ minutes at the end of every day manually compiling numbers from different sources",
    after: "Reports generated automatically from the same system you already use throughout the day",
  },
];

export interface TrustItem {
  text: string;
}

export const expectations: TrustItem[] = [
  { text: "We ask questions before building anything, so you never pay for something you do not need" },
  { text: "You see a working version to test before paying in full, not a mockup or a presentation" },
  { text: "We explain everything in plain language, never in technical jargon" },
  { text: "Changes after launch are normal and expected, we plan for them" },
  { text: "If something is not the right fit for your budget or situation, we will tell you honestly" },
];

export const guarantees: TrustItem[] = [
  { text: "No long-term contracts. You can stop at any time and keep everything we built" },
  { text: "No jargon. We communicate like normal people, not like a tech company" },
  { text: "No surprise costs. The price we agree on is the price you pay" },
  { text: "You own everything. Every line of code, every design, every piece of data" },
  { text: "We respond within one business day, every time" },
];

export interface Story {
  id: string;
  business: string;
  situation: string;
  change: string;
  result: string;
  saved: string;
}

export const operationalStories: Story[] = [
  {
    id: "st1",
    business: "Hair Salon",
    situation:
      "The owner spent two hours every evening texting clients to remind them about appointments the next day. She also had to check her paper calendar against her phone to make sure nothing was double-booked. On busy weeks, mistakes were unavoidable.",
    change:
      "We built a simple online booking page where clients pick their own time slots. The system automatically sends text reminders 24 hours before each appointment and prevents anyone from booking a slot that is already taken.",
    result:
      "Evening admin time dropped from two hours to fifteen minutes. No-shows decreased significantly because clients received automatic reminders. The owner stopped worrying about double bookings entirely.",
    saved: "10+ hours/week",
  },
  {
    id: "st2",
    business: "Property Manager",
    situation:
      "A small property manager handled rent payments through a spreadsheet and received maintenance requests through personal text messages. Requests frequently got lost in the thread, and tenants would call repeatedly to ask about the status of their repairs.",
    change:
      "We created a tenant portal where residents submit maintenance requests online and can check the status at any time. Rent payments are tracked automatically, and the manager gets a daily summary instead of managing everything manually.",
    result:
      "Missed maintenance requests dropped to zero. Tenants stopped calling to check on repair status because they could see updates themselves. The manager reclaimed six hours every week that used to go to tracking and follow-ups.",
    saved: "6+ hours/week",
  },
  {
    id: "st3",
    business: "Catering Company",
    situation:
      "Orders came in through WhatsApp messages, including voice notes, photos of menus, and follow-up questions scattered across multiple conversations. The kitchen staff frequently had to interrupt the owner to clarify details, and incorrect deliveries happened at least twice a month.",
    change:
      "We built a structured order form that captures every detail upfront, including dietary requirements, delivery address, time, and special instructions. Each order automatically generates a clear checklist for the kitchen team.",
    result:
      "Order errors dropped from twice a month to nearly zero. Kitchen staff stopped interrupting the owner because all the details were right there on the checklist. The entire team saved eight hours per week that used to go to clarification and corrections.",
    saved: "8+ hours/week",
  },
];

export interface SolutionCategory {
  id: string;
  title: string;
  description: string;
  realLife: string;
  causes: string[];
  systemFix: string;
  savings: string;
}

export const solutionCategories: SolutionCategory[] = [
  {
    id: "communication",
    title: "Communication Problems",
    description:
      "Your customers and staff rely on calls, texts, and messaging apps for information that should be available without asking anyone.",
    realLife:
      "Think about how many times a day someone contacts you with a question you have already answered before. A customer wants to know if their appointment is confirmed. A staff member asks what time they start tomorrow. A vendor needs to know when to deliver. Each of these interruptions only takes a few minutes, but they add up to hours every week. The real cost is not just the time you spend answering, it is the focus you lose every time you get pulled away from what you were doing.",
    causes: [
      "There is no self-service option where customers can check status or find answers on their own",
      "Information is spread across WhatsApp, email, phone calls, and in-person conversations with no central place to find it",
      "Updates are communicated one person at a time instead of being posted where everyone can see them",
    ],
    systemFix:
      "A customer-facing page or portal where people find answers themselves, combined with internal notifications that keep your team informed automatically. This is one of the most affordable solutions we build because it is straightforward to set up and it pays for itself almost immediately by cutting your daily interruptions in half.",
    savings: "5-10 hours per week",
  },
  {
    id: "scheduling",
    title: "Scheduling Problems",
    description:
      "Appointments, bookings, or delivery windows are managed manually, which leads to conflicts, wasted time, and frustrated customers.",
    realLife:
      "If you have ever had a customer show up for an appointment that was already given to someone else, you know how damaging scheduling mistakes can be. It is not just embarrassing, it costs you the customer and the revenue. Manual scheduling falls apart because it depends on one person remembering to check the calendar, send confirmations, and follow up with reminders. When that person is busy, which is most of the time, things get missed.",
    causes: [
      "Availability is tracked in personal calendars, paper books, or spreadsheets that nobody else can access or update",
      "There is no automatic way to detect conflicts, so double bookings only get caught when it is too late",
      "Confirmations and reminders are sent manually, or not at all, leading to no-shows and confusion",
    ],
    systemFix:
      "An online scheduling system that shows real availability to your customers, prevents double bookings automatically, and sends confirmations and reminders without you lifting a finger. Your customers book themselves, and you just check the schedule when you need to. We build these within your budget and typically have them running within two weeks.",
    savings: "6-12 hours per week",
  },
  {
    id: "tracking",
    title: "Tracking Problems",
    description:
      "Orders, inventory, or job progress is tracked in spreadsheets, notebooks, or someone's memory, making it easy to lose details and hard to know where things stand.",
    realLife:
      "When a customer calls to ask about the status of their order and you have to dig through a spreadsheet, check your texts, and ask a team member before you can give an answer, that is a tracking problem. It makes your business look disorganized even if it is not. The bigger issue is that without a reliable system, things get missed. An order gets delayed because nobody noticed it was overdue. Inventory runs out because nobody updated the count. A job falls behind because nobody tracked the progress.",
    causes: [
      "The same information exists in multiple places, and none of them are up to date",
      "There is no single view of what is pending, what is complete, and what is overdue",
      "Checking the status of anything requires asking someone instead of looking it up",
    ],
    systemFix:
      "A central tracking board or dashboard where every item has a clear status, an assigned owner, and a complete history. Everyone who needs to know can see where things stand without asking. We design these to be as simple as possible because the more complicated a tracking system is, the less likely your team will actually use it.",
    savings: "4-8 hours per week",
  },
  {
    id: "coordination",
    title: "Team Coordination Problems",
    description:
      "Assigning tasks, checking progress, and making sure nothing falls through the cracks depends on verbal instructions and constant follow-ups.",
    realLife:
      "You tell someone to handle a task in the morning. By afternoon, you are not sure if it is done, so you ask. They forgot, or they thought someone else was doing it. You end up doing it yourself because it is faster. This happens every day, and it slowly burns you out. The problem is not your team. The problem is that verbal instructions are the worst possible way to assign and track work. People forget. They mishear. They assume. Without a system, you become the system, and that does not scale.",
    causes: [
      "Tasks are assigned verbally or through text messages and are forgotten by the end of the day",
      "There is no way to see what each person is working on without asking them directly",
      "The owner or manager becomes the bottleneck for every decision and status update",
    ],
    systemFix:
      "A simple task management system where assignments are visible to everyone, deadlines are clear, and progress is updated by the people doing the work. You stop being the bottleneck and start being the leader. This is one of the most impactful changes we make for small businesses, and it does not have to cost much at all.",
    savings: "5-10 hours per week",
  },
];

export interface Example {
  id: string;
  title: string;
  business: string;
  situation: string;
  change: string;
  result: string;
  timeSaved: string;
  cost: string;
}

export const examples: Example[] = [
  {
    id: "ex1",
    title: "Salon Appointment Booking",
    business: "Hair Salon",
    situation:
      "The owner managed all bookings through phone calls and a paper calendar. Every evening, she spent one to two hours texting clients to remind them about their appointments for the next day. Double bookings happened at least once a week, and no-shows were a constant problem because reminders were inconsistent.",
    change:
      "We built a clean online booking page where clients pick their stylist, service, and preferred time slot. The system shows only available slots, sends automatic confirmation texts when someone books, and follows up with a reminder 24 hours before the appointment. The owner can view the full schedule on her phone at any time.",
    result:
      "Evening admin time dropped from two hours to about fifteen minutes. No-shows decreased significantly. Double bookings stopped entirely. The owner now focuses on clients during the day instead of managing a calendar.",
    timeSaved: "~10 hours/week",
    cost: "Budget-friendly",
  },
  {
    id: "ex2",
    title: "Property Maintenance Tracking",
    business: "Property Manager",
    situation:
      "A property manager with twelve rental units received maintenance requests through personal text messages. Requests often got buried in conversation threads, and tenants would call repeatedly to check on the status of their repairs. The manager tracked everything in a spreadsheet that was rarely up to date.",
    change:
      "We created a simple tenant portal where residents submit maintenance requests with photos and descriptions. Each request gets a status that tenants can check online at any time. The manager receives a daily summary email listing all open requests, their priority, and how long each has been waiting.",
    result:
      "Missed maintenance requests dropped to zero. Tenants stopped calling for status updates because they could check online. The manager saved about six hours per week that previously went to manual tracking and phone calls.",
    timeSaved: "~6 hours/week",
    cost: "Budget-friendly",
  },
  {
    id: "ex3",
    title: "Catering Order Management",
    business: "Catering Company",
    situation:
      "Orders came in through WhatsApp, including voice notes, photos of handwritten menus, and scattered follow-up questions. The kitchen team frequently interrupted the owner to clarify details like dietary restrictions, delivery times, or portion sizes. Incorrect deliveries happened at least twice a month, costing both money and customer trust.",
    change:
      "We built a structured online order form that walks customers through every detail: menu selections, dietary needs, headcount, delivery address, date, time, and special instructions. Each submitted order automatically generates a clean checklist for the kitchen team with everything they need to prepare and deliver correctly.",
    result:
      "Order errors dropped from twice a month to nearly zero. The kitchen team stopped interrupting the owner because all details were clearly listed on each checklist. The entire workflow saved about eight hours per week.",
    timeSaved: "~8 hours/week",
    cost: "Budget-friendly",
  },
  {
    id: "ex4",
    title: "Equipment Rental Inventory",
    business: "Party Supplies Rental",
    situation:
      "The owner tracked rental items in a notebook. Chairs, tables, tents, and decorations were frequently double-rented because there was no real-time view of what was available. Items were sometimes returned late with no follow-up, and the owner spent hours every week trying to reconcile what was out, what was back, and what was damaged.",
    change:
      "We built a digital inventory system that shows what is available, what is rented, and when each item is due back. Customers can check availability online before calling. The system sends automatic return reminders to renters two days before their rental period ends.",
    result:
      "Double-rentals stopped completely. Late returns decreased because of automatic reminders. The owner saved about five hours per week that used to go to manual tracking and phone calls about availability.",
    timeSaved: "~5 hours/week",
    cost: "Budget-friendly",
  },
];

export const wizardSteps = {
  businessTypes: [
    "Salon, barbershop, or spa",
    "Restaurant, cafe, or catering",
    "Property management",
    "Retail or e-commerce",
    "Professional services (consulting, legal, accounting)",
    "Health and wellness",
    "Events, entertainment, or rentals",
    "Cleaning or home services",
    "Other",
  ],
  frustrations: [
    "Too many calls and messages to handle every day",
    "Scheduling and booking mistakes happen regularly",
    "Staff tasks are hard to track and things get missed",
    "Losing track of orders, inventory, or customer requests",
    "Spending too much time on paperwork and admin",
    "Customers cannot find information without calling me",
    "No reliable system for anything, everything is in my head",
    "Current software is too expensive or complicated",
    "Other",
  ],
  teamSizes: [
    "Just me",
    "2-5 people",
    "6-15 people",
    "16-30 people",
    "More than 30",
  ],
  currentTools: [
    "WhatsApp or text messages",
    "Excel or Google Sheets",
    "Paper notebooks or calendars",
    "Multiple separate apps that do not talk to each other",
    "A system that exists but does not work well",
    "Nothing — everything is in my head or on paper",
  ],
};
