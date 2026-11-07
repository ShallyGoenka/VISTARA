# Vistara – Moments That Matter

> Discover moments that matter. Browse events, explore the details, and reserve your place.

Vistara is a responsive, frontend-only event discovery and registration website. It brings upcoming events together in one place so visitors can search and filter events, view event information, and register for the ones they want to attend.

The project uses a calm, photography-led design with a warm colour palette, clear navigation, and layouts designed for desktop, tablet, and mobile screens.

**Live website:** Add your deployed website URL here.

---

## Contents

- [Features](#features)
- [Event Categories](#event-categories)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How the Website Works](#how-the-website-works)
- [Deployment](#deployment)
- [Design Decisions](#design-decisions)
- [Limitations](#limitations)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Features

### Event discovery
- Browse upcoming and featured events.
- View event cards with an image, name, date, location, category, and short description.
- Open an event to see its full details.

### Search and filters
- Search for events by name, venue, city, or description.
- Filter events by category, date range, and city.
- Combine filters to narrow down the event list.
- Remove individual active filters or clear all filters.
- View a helpful message when no events match the selected filters.

### Event details
- View the event description, date, time, venue, and city.
- Read the event schedule and organiser information.
- See a countdown to the event.
- Explore related events from the same category.

### Event registration
- Register using a name, email address, and phone number.
- Validate form entries before accepting a registration.
- Prevent a second registration for the same event using the same email address.
- Display a registration confirmation after successful submission.

### My Registrations
- View registrations saved in the browser.
- See event details and the registration reference.
- Cancel a registration after confirming the action.
- Keep the registration list and navigation count in sync.

### Theme and usability
- Switch between light and dark themes.
- Save the selected theme in browser storage.
- Use responsive layouts on mobile, tablet, and desktop.
- Access helpful interface elements such as countdowns, loading placeholders, scroll effects, and a back-to-top control.

---

## Event Categories

The sample event collection covers these categories:

- **Tech** – Tech Fest 2026 and Hackathon 24H
- **Music** – Battle of Bands and Acoustic Evenings
- **Sports** – Inter-College Cricket Cup
- **Workshops** – UI/UX Design Workshop and Public Speaking Masterclass
- **Cultural** – Cultural Night – Rang Utsav

The event information is maintained in the project's local data file.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| React 18 | Building the interface with reusable components and hooks |
| Vite | Development server and production build tool |
| JavaScript (ES6+) | Application logic and interactions |
| Tailwind CSS v3 | Styling and responsive layouts |
| React Router DOM | Page navigation using `HashRouter` |
| Lucide React | Interface icons |
| Browser Local Storage | Saving registrations and theme preferences in the browser |

**Application type:** Frontend-only website. The project does not include a backend or database.

---

## Project Structure

The project is organised into reusable components, pages, contexts, hooks, data, and utility functions.

```text
vistara/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── CategoryTiles.jsx
│   │   ├── Countdown.jsx
│   │   ├── EventCard.jsx
│   │   ├── EventGrid.jsx
│   │   ├── FeaturedEvents.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Loader.jsx
│   │   ├── MyRegistrations.jsx
│   │   ├── Navbar.jsx
│   │   ├── RegistrationConfirmation.jsx
│   │   ├── RegistrationForm.jsx
│   │   ├── SearchFilter.jsx
│   │   ├── Skeleton.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── WhyChooseUs.jsx
│   ├── context/
│   │   ├── RegistrationsContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── events.js
│   ├── hooks/
│   │   ├── useCountdown.js
│   │   ├── useLocalStorage.js
│   │   └── useScrollReveal.js
│   ├── pages/
│   │   ├── EventDetails.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── utils/
│   │   └── validators.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── .gitignore
└── README.md
```

*The exact files in your local project may differ if you have made changes during development.*

---

## Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) (Node.js 18 or later recommended)
- npm (included with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/vistara.git
cd vistara
```

Replace `YOUR-GITHUB-USERNAME` with your GitHub username.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local address printed in the terminal. With the default Vite settings, it is usually:

```text
http://localhost:5173
```

### 4. Create a production build

```bash
npm run build
```

Vite creates the production files in the `dist/` folder.

### 5. Preview the production build

```bash
npm run preview
```

---

## How the Website Works

### Event data

The event list is stored in `src/data/events.js`. The website uses this data to display event cards, featured events, event details, categories, and related events.

### Search and filtering

Visitors can search the event list and combine category, date, and city filters. Active filters can be removed individually, or cleared together.

### Registration process

The registration form collects the participant's name, email address, and phone number. It checks the entered details and prevents duplicate registrations for the same event and email address. After a successful submission, the website displays a confirmation with the registration information.

### Saving registrations

Registration details are saved in the browser's Local Storage. The My Registrations section reads those saved details and lets visitors cancel a registration.

Because the project is frontend-only, saved registrations are tied to the browser and device being used. They are not sent to a central database and will not automatically appear on another device or browser.

### Theme preference

The selected light or dark theme is saved in Local Storage so it can be restored when the visitor returns using the same browser.

### Page navigation

React Router DOM with `HashRouter` handles navigation between the home page and event detail pages. Hash-based routing is useful for static hosting because it does not depend on server-side route handling.

---

## Deployment

Vistara is deployed to a static hosting service, Vercel.
https://vistara-rho.vercel.app/

## Design Decisions

### Colour palette

The interface uses a warm, restrained palette:

| Colour | Hex value | Use |
|---|---|---|
| Ivory | `#F7F5F0` | Main page background |
| Charcoal | `#242321` | Main text |
| Burgundy | `#783F46` | Primary buttons and accents |
| Burgundy hover | `#5F3037` | Button hover state |
| Sand | `#D9D0C3` | Borders and secondary surfaces |
| White | `#FFFFFF` | Cards and form surfaces |

The dark theme uses a warm near-black background (`#1B1A18`), dark cards (`#242321`), light text, and a softer burgundy accent.

### Typography

- **Playfair Display** is used for headings to give the site an editorial feel.
- **Inter** is used for body text and interface elements for clear reading.
- Small uppercase labels and consistent text sizing help organise event information.

### Layout and interaction

The design uses spacious sections, a consistent spacing system, clear content hierarchy, and responsive event cards. Interactions are kept subtle, with image hover effects, smooth transitions, loading placeholders, and scroll-based reveals.

### Accessibility considerations

The project design includes semantic page sections, form labels, descriptive image text, keyboard-friendly controls, visible focus states, and touch-friendly interactive elements. Accessibility should be checked against the final running application and tested with keyboard and screen-reader tools before claiming formal compliance.

---

## Limitations

- There is no backend or central database.
- Registrations are stored only in the visitor's browser using Local Storage.
- Registration information is not synchronised between devices or browsers.
- The project does not currently provide server-based accounts, email confirmations, payment processing, or organiser tools.

---

## Future Improvements

Possible additions for future versions include:

- User accounts and secure sign-in.
- A backend and database for shared event and registration data.
- Email confirmations and event reminders.
- An organiser dashboard for creating and managing events.
- Online payment support for paid events.
- Calendar integration for saving event dates.
- A ticket or pass view that visitors can access after registering.

---

## Author

Created as a web design and development project.
BY- Shally Goyanka

**Vistara – Moments That Matter.**
