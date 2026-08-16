# Hector Pacheco — Personal Engineering Portfolio

Professional personal portfolio website for **Hector Pacheco**, Software Engineer specializing in **Full-Stack Software Development, Cloud Infrastructure (AWS / Docker / Vercel), AI Platforms, IoT, Edge Computing, and Embedded Systems** with a background in **Industrial Instrumentation & Controls**.

Built with React 19, TypeScript, Vite, React Router, and a custom CSS dark engineering design system.

---

## 🚀 Live Production Links

- **CalTrack (Industrial SaaS & Calibration Platform)**: [https://caltrack-web-six.vercel.app/login](https://caltrack-web-six.vercel.app/login)
- **OC Water Features (Production Client Platform)**: [https://www.ocwaterfeaturesinc.com/](https://www.ocwaterfeaturesinc.com/)

---

## 🛠️ Project Structure

```text
Portfolio/
├── public/
│   ├── favicon.svg             # Technical SVG favicon
│   └── resume.pdf              # [PLACEHOLDER] Place compiled PDF resume here
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx          # Sticky navigation & mobile drawer
│   │   ├── Hero.tsx            # Hero identity & interactive telemetry panel
│   │   ├── ProjectCard.tsx     # Custom accent project card with Live/Case Study/GitHub actions
│   │   ├── FeaturedProjects.tsx# Grid showcasing CalTrack, Bridge AI, FieldTrack AI, etc.
│   │   ├── ControlsToCode.tsx  # Interactive progression stepper
│   │   ├── SkillsSection.tsx   # Categorized skills grid (Languages, Cloud & Infra, DBs, etc.)
│   │   ├── ExperienceSection.tsx# Instrumentation & Controls timeline
│   │   ├── ClientWorkSection.tsx# OC Water Features & West Harbor Painting showcase
│   │   ├── AboutSection.tsx    # Bio, principles & Education cards
│   │   ├── ContactSection.tsx  # Direct email trigger & social cards
│   │   └── Footer.tsx          # System status footer
│   ├── data/
│   │   └── portfolioData.ts    # Centralized typed dataset (Projects, Live URLs, Skills, Bio, Contact)
│   ├── pages/
│   │   ├── HomePage.tsx        # Main portfolio landing page
│   │   ├── CaseStudyPage.tsx   # Detailed route for /projects/:slug (with AWS Cloud Flow & Mobile Roadmap)
│   │   └── ResumePage.tsx      # Structured resume view & PDF setup instructions
│   ├── styles/
│   │   └── index.css           # Global design system tokens & variables
│   ├── App.tsx                 # Main application component & routes
│   └── main.tsx                # React DOM root mounting point
├── index.html                  # SEO title & meta description tags
├── package.json
├── tsconfig.json
└── vite.config.ts
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
   Open `http://localhost:3000` in your browser.

---

## ⚙️ Available Scripts

- `npm run dev` — Launch Vite local development server.
- `npm run build` — Run TypeScript typecheck (`tsc`) and compile production bundle into `dist/`.
- `npm run lint` — Perform non-emitting TypeScript validation.
- `npm run preview` — Locally preview the production build output.

---

## 📝 Updating Portfolio Data & Live Links

All portfolio content is decoupled from UI markup and managed inside:
👉 `src/data/portfolioData.ts`

- **Live Production App Links**: Update `liveUrl` on any project object (e.g., CalTrack, OC Water Features).
- **GitHub Repositories**: Modify `githubUrl` fields in `featuredProjects`.
- **Cloud Infrastructure & Skills**: Update `skillCategories` (Cloud & Infrastructure, Languages, Databases).
- **Resume PDF**: Place compiled `resume.pdf` document in `public/resume.pdf`.

---

## 📦 Production Build & Deployment

To compile the application for production hosting (GitHub Pages, Vercel, Netlify, or AWS S3):

```bash
npm run build
```

This compiles optimized HTML, CSS, and JS into the `dist/` directory ready for deployment.
