# Hector Pacheco — Personal Engineering Portfolio

Professional personal portfolio website for **Hector Pacheco**, Software Engineer specializing in **Full-Stack Software Development, Cloud Infrastructure (AWS / Docker / Vercel), GraphQL, AI Platforms, IoT, Edge Computing, and Embedded Systems** with a background in **Industrial Instrumentation & Controls**.

Built with React 19, TypeScript, Vite, React Router, and a custom CSS dark engineering design system.

---

## 🚀 Live Production & Project Links

- **CalTrack (Industrial Calibration SaaS & Cloud Platform)**: [https://caltrack-web-six.vercel.app/login](https://caltrack-web-six.vercel.app/login)
- **Procurement Tracking System (Enterprise Procurement Workflow Platform)**: [https://procurement-tracking-xg87.vercel.app/](https://procurement-tracking-xg87.vercel.app/)
- **Pi Arcade OS (Embedded Hardware & Gaming Project Site)**: [https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/](https://thee-hector-genaro-pacheco.github.io/pi-arcade-os/)
- **OC Water Features (Production Client Platform)**: [https://www.ocwaterfeaturesinc.com/](https://www.ocwaterfeaturesinc.com/)

---

## 🛠️ Featured Engineering Projects

1. **CalTrack** (*Industrial SaaS · Full-Stack · AWS Cloud*)  
   AWS ECS Fargate containerized API, Amazon ECR, Amazon RDS PostgreSQL, Docker, React, TypeScript, Prisma ORM, and Vercel Edge deployment.

2. **Procurement Tracking System** (*Full-Stack · GraphQL · Business Operations*)  
   Full-stack procurement platform with React 19, TypeScript, Express 5, GraphQL, Apollo Client/Server, Prisma ORM 6, PostgreSQL, JWT auth, and multi-role RBAC (`ADMIN`, `REQUESTER`, `APPROVER`, `BUYER`, `RECEIVER`).

3. **FieldTrack AI** (*IoT / Edge AI / Embedded*)  
   Raspberry Pi 5 edge-computing platform combining Python hardware daemons, GPS NMEA sentence parsing, PIR motion hardware interrupts, OpenCV computer vision inference, and a React telemetry dashboard over WebSockets.

4. **Thriveward Funding Intelligence** (*AI · Data Intelligence · Governance*)  
   AI-assisted funding intelligence platform collecting, normalizing, and evaluating funding opportunities with hash-verified source provenance, Argon2id session security, RBAC authorization, and strict human-in-the-loop oversight. *(Private Repository)*

5. **Pi Arcade OS** (*Embedded / Linux / Systems*)  
   Embedded hardware and software arcade system built in Python and Pygame on Raspberry Pi, featuring direct GPIO arcade microswitch wiring, software debouncing logic, 16x2 I2C LCD status reporting, and passive buzzer audio.

6. **E-Commerce Store** (*Full-Stack · GraphQL · AWS*)  
   Full-stack e-commerce application built with React/TypeScript, Node/Express, MongoDB, and GraphQL, featuring JWT authentication, role-based authorization, and AWS S3 image uploads using server-generated pre-signed URLs.

---

## 💼 Real-World Client Work

- **OC Water Features** ([https://www.ocwaterfeaturesinc.com/](https://www.ocwaterfeaturesinc.com/))  
  Production full-stack web platform engineered for a Southern California specialty contracting business, combining Next.js SSR/SSG, Supabase PostgreSQL, Zod validation, lead intake workflows, administrative tooling, and live Vercel deployment.

---

## 🎓 Education & Professional Training

- **Western Governors University (WGU)** — B.S. Software Engineering (*In Progress, 2026–Present*)
- **Palantir Technologies** — Foundry & AIP Training
- **Mirion Technologies** — SU-890 iCAM Operations & Maintenance (*16.00 Continued Education Credits*)
- **NV5 Training Academy** — Radiation Worker II Training

---

## ⚙️ Tech Stack & Demonstrated Domains

- **Core Web & Frontend**: React 19, TypeScript, Vite, React Router, Custom CSS Design System, Lucide React
- **Backend & APIs**: Node.js, Express, GraphQL, Apollo Server/Client, REST APIs, WebSockets, Python, FastAPI
- **Databases & ORM**: PostgreSQL, Supabase, MongoDB, Prisma ORM, Mongoose
- **Cloud & DevOps**: AWS ECS Fargate, ECR, RDS, Secrets Manager, KMS, S3, Docker, Vercel, Render
- **Hardware & Industrial**: Raspberry Pi 5, Python GPIO, PySerial NMEA, OpenCV, 4–20 mA Current Loops, Industrial Transmitters & PLC Systems

---

## 📁 Project Structure

```text
Portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions workflow for type-check & build validation
├── public/
│   ├── favicon.svg             # Technical SVG favicon
│   └── resume.pdf              # Downloadable one-page Software Engineer resume
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx          # Sticky navigation & mobile drawer
│   │   ├── Hero.tsx            # Hero identity & interactive telemetry panel
│   │   ├── ProjectCard.tsx     # Custom accent project card with Live/Case Study/GitHub actions
│   │   ├── FeaturedProjects.tsx# Grid showcasing CalTrack, Procurement Tracking, FieldTrack AI, Thriveward Funding Intelligence, Pi Arcade OS, and E-Commerce Store
│   │   ├── ControlsToCode.tsx  # Interactive progression stepper
   ├── SkillsSection.tsx   # Categorized skills grid (Languages, Cloud & Infra, DBs, Hardware, etc.)
│   │   ├── ExperienceSection.tsx# Instrumentation & Controls timeline
│   │   ├── ClientWorkSection.tsx# Production client work showcase for OC Water Features
│   │   ├── AboutSection.tsx    # Bio, principles, Education & Technical Training cards
│   │   ├── ContactSection.tsx  # Direct email trigger & social cards
│   │   └── Footer.tsx          # System status footer
│   ├── data/
│   │   └── portfolioData.ts    # Centralized typed dataset (Projects, Live URLs, Skills, Bio, Contact)
│   ├── pages/
│   │   ├── HomePage.tsx        # Main portfolio landing page
│   │   ├── CaseStudyPage.tsx   # Detailed route for /projects/:slug (with AWS Cloud Flow & Mobile Roadmap)
│   │   └── ResumePage.tsx      # Structured HTML resume & downloadable one-page PDF link
│   ├── styles/
│   │   └── index.css           # Global design system tokens & variables
│   ├── App.tsx                 # Main application component & routes (with /projects/bridge-ai redirect)
│   └── main.tsx                # React DOM root mounting point
├── index.html                  # SEO title & meta description tags
├── vercel.json                 # Vercel SPA route rewrite rules
├── package.json
├── tsconfig.json
└── vite.config.ts              # Local dev server configured on port 3001
```

---

## 💻 Local Development & Installation

1. **Clone & Install Dependencies**:
   ```bash
   git clone https://github.com/Thee-Hector-Genaro-Pacheco/myPortfolio.git
   cd Portfolio
   npm install
   ```

2. **Run Local Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3001` in your browser.

---

## ⚙️ Available Validation Scripts

- `npm run dev` — Launch Vite local development server on port 3001.
- `npm run lint` — Non-emitting TypeScript validation (`tsc --noEmit`).
- `npm run build` — TypeScript typecheck and production bundle compilation into `dist/`.
- `npm run preview` — Locally preview production build output.
