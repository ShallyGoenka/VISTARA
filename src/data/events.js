export const EVENTS = [
  {
    id: "1",
    name: "Tech Fest 2026",
    category: "Tech",
    date: "2026-12-11T09:30:00",
    time: "09:30 AM – 06:00 PM IST",
    venue: "Nimhans Convention Centre, Hosur Road",
    city: "Bengaluru",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "India's leading tech event exploring AI, robotics, and the future of the web.",
    fullDescription: "Tech Fest 2026 brings together engineers, startup founders, and curious tech enthusiasts. Across two stages, hear talks from industry leaders, test out live hardware demos, and connect with people building the next generation of software.",
    organizer: "Apex Tech Community",
    organizerDescription: "A group of engineers and creators supporting open-source software and technology across India.",
    price: 0,
    schedule: [
      { time: "09:30 AM", title: "Welcome & Keynote: What's Next in Tech" },
      { time: "11:15 AM", title: "Panel Discussion: AI and Everyday Life" },
      { time: "01:00 PM", title: "Lunch Break & Hands-on Demo Floor" },
      { time: "02:30 PM", title: "Technical Workshops & Live Coding" },
      { time: "05:15 PM", title: "Wrap-up & Community Showcase" }
    ],
    featured: true
  },
  {
    id: "2",
    name: "Battle of Bands",
    category: "Music",
    date: "2026-12-19T18:00:00",
    time: "06:00 PM – 11:30 PM IST",
    venue: "Richardson & Cruddas Industrial Space, Byculla",
    city: "Mumbai",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "12 indie rock, jazz, and fusion bands play live in a historic Mumbai venue.",
    fullDescription: "Set in a restored 19th-century warehouse, Battle of Bands brings live music to life. Watch 12 top college and indie bands perform their best original tracks with great sound, stage lighting, and high energy from the crowd.",
    organizer: "SoundWave Music Collective",
    organizerDescription: "Hosting live music gigs and supporting independent musicians since 2018.",
    price: 499,
    schedule: [
      { time: "06:00 PM", title: "Doors Open & Acoustic Opening Act" },
      { time: "06:45 PM", title: "Round 1: First 6 Bands Perform" },
      { time: "08:30 PM", title: "Intermission & Food Trucks" },
      { time: "09:15 PM", title: "Finals: Top 6 Bands Compete" },
      { time: "11:00 PM", title: "Winner Announcement & Trophy Ceremony" }
    ],
    featured: true
  },
  {
    id: "3",
    name: "Inter-College Cricket Cup",
    category: "Sports",
    date: "2027-01-09T08:00:00",
    time: "08:00 AM – 05:30 PM IST",
    venue: "Major Dhyan Chand National Arena, India Gate",
    city: "Delhi NCR",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "16 top college cricket teams battle it out for the annual winter championship cup.",
    fullDescription: "Come watch exciting cricket at Delhi's famous national stadium. 16 top university teams play in fast-paced knockout games. Enjoy shaded seats, live commentary, and food stalls throughout the day.",
    organizer: "Delhi University Sports Association",
    organizerDescription: "Organizing competitive college tournaments and student athletic leagues across North India.",
    price: 199,
    schedule: [
      { time: "08:00 AM", title: "Toss & Morning Quarter-Final Matches" },
      { time: "11:30 AM", title: "Semi-Final Games" },
      { time: "01:30 PM", title: "Lunch Break & Special Skills Challenge" },
      { time: "02:30 PM", title: "Championship Final & Award Ceremony" }
    ],
    featured: false
  },
  {
    id: "4",
    name: "UI/UX Design Workshop",
    category: "Workshops",
    date: "2027-01-23T10:00:00",
    time: "10:00 AM – 04:30 PM IST",
    venue: "WeWork Galaxy, 43 Residency Road, Shanthala Nagar",
    city: "Bengaluru",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A hands-on class covering design systems, typography, clean UI, and real app prototypes.",
    fullDescription: "A practical one-day workshop for beginners and working designers who want to sharpen their UI/UX skills. Learn how to build clean design systems, pair fonts like a pro, and create smooth user interactions with real-time feedback from senior product designers.",
    organizer: "Studio Forma Design Lab",
    organizerDescription: "Teaching modern digital product design and creative tools to students and professionals.",
    price: 1299,
    schedule: [
      { time: "10:00 AM", title: "Design Principles: Making Clean, Clear Interfaces" },
      { time: "11:30 AM", title: "Hands-on: Choosing Fonts & Setting Page Layouts" },
      { time: "01:00 PM", title: "Lunch Break & Quick Portfolio Reviews" },
      { time: "02:00 PM", title: "Practical Exercise: Building a Complete Design System" },
      { time: "04:00 PM", title: "Group Feedback & Take-Home Resource Pack" }
    ],
    featured: false
  },
  {
    id: "5",
    name: "Cultural Night – Rang Utsav",
    category: "Cultural",
    date: "2027-02-06T17:30:00",
    time: "05:30 PM – 10:00 PM IST",
    venue: "Jawahar Kala Kendra, Jhalana Doongri",
    city: "Jaipur",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A lively celebration of Rajasthani folk dances, Sufi music, handmade crafts, and local food.",
    fullDescription: "Spend an enjoyable evening at Jaipur's famous arts center. Watch traditional Ghoomar and Kalbelia dance performances, listen to soulful Sufi singing under the stars, browse handcrafted souvenirs, and taste authentic Rajasthani dishes.",
    organizer: "Rajasthan Heritage Arts Trust",
    organizerDescription: "Supporting traditional artists, folk musicians, and local craft makers in Western India.",
    price: 0,
    schedule: [
      { time: "05:30 PM", title: "Welcome Music & Lighting of the Courtyard" },
      { time: "06:15 PM", title: "Traditional Folk Dance Performances" },
      { time: "07:45 PM", title: "Live Sufi Concert in the Amphitheatre" },
      { time: "09:00 PM", title: "Artisan Craft Stalls & Traditional Dinner" }
    ],
    featured: true
  },
  {
    id: "6",
    name: "Hackathon 24H",
    category: "Tech",
    date: "2027-02-20T10:00:00",
    time: "10:00 AM (24 Hours Non-stop) IST",
    venue: "T-Hub Phase 2, Knowledge City, HITEC City",
    city: "Hyderabad",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Build a working app in 24 hours. Solve real challenges with fellow developers and designers.",
    fullDescription: "Join 300 builders for a fun 24-hour sprint at India's top startup hub. Form teams, pick a problem in healthcare, environment, or web tech, and build a project from scratch. Enjoy free meals, fast Wi-Fi, helpful mentors, and a shot at winning cash prizes.",
    organizer: "HackerPulse India",
    organizerDescription: "Hosting student and developer hackathons across India to help people learn and build.",
    price: 350,
    schedule: [
      { time: "10:00 AM", title: "Check-in, Team Setup & Problem Statements" },
      { time: "11:30 AM", title: "Hacking Begins: Build Sprint 1" },
      { time: "06:00 PM", title: "Dinner & Mentor Checkpoint" },
      { time: "12:00 AM", title: "Midnight Snacks & Pitch Practice" },
      { time: "08:30 AM", title: "Code Freeze, Live Demos & Prizes" }
    ],
    featured: false
  },
  {
    id: "7",
    name: "Acoustic Evenings",
    category: "Music",
    date: "2027-03-06T19:00:00",
    time: "07:00 PM – 10:00 PM IST",
    venue: "The Loft Garden Theatre, Koregaon Park",
    city: "Pune",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A relaxed, candlelit night of acoustic songs, stories, and warm tea under open skies.",
    fullDescription: "Take a break from the busy city with an intimate music night in a garden setting. Talented acoustic singer-songwriters share original songs and the real stories behind them. Seating is cozy and open-air, with warm tea served throughout the evening.",
    organizer: "Lantern Light Concerts",
    organizerDescription: "Hosting small, friendly live music sessions in quiet garden and heritage spaces.",
    price: 799,
    schedule: [
      { time: "07:00 PM", title: "Doors Open & Fresh Tea Service" },
      { time: "07:30 PM", title: "Opening Set: Acoustic Guitar & Cello" },
      { time: "08:30 PM", title: "Main Performance: Indie Folk Songs" },
      { time: "09:45 PM", title: "Meet the Artists & Informal Chat" }
    ],
    featured: false
  },
  {
    id: "8",
    name: "Public Speaking Masterclass",
    category: "Workshops",
    date: "2027-03-20T14:00:00",
    time: "02:00 PM – 06:30 PM IST",
    venue: "St. Xavier's Heritage Auditorium, Mahapalika Marg",
    city: "Mumbai",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Learn how to speak with confidence, tell engaging stories, and keep your audience interested.",
    fullDescription: "Whether you need to give a team presentation, speak on stage, or ace an interview, this interactive workshop will help you overcome stage fright. Practice short speeches, learn breathing techniques, and get friendly feedback from experienced public speakers.",
    organizer: "Public Speakers Club of India",
    organizerDescription: "Helping students, professionals, and creators build strong speaking and presentation skills.",
    price: 999,
    schedule: [
      { time: "02:00 PM", title: "Speaking Fundamentals: Posture & Voice Control" },
      { time: "03:15 PM", title: "Storytelling: How to Keep People Listening" },
      { time: "04:30 PM", title: "Tea Break & Casual Networking" },
      { time: "05:00 PM", title: "Mini Speeches & Individual Feedback" },
      { time: "06:15 PM", title: "Personal Action Plans & Wrap-up" }
    ],
    featured: false
  }
];

export const CATEGORIES = ["All", "Tech", "Music", "Sports", "Workshops", "Cultural"];

export const CITIES = ["All", ...Array.from(new Set(EVENTS.map(e => e.city)))];
