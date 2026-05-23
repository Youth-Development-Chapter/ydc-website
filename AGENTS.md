<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Youth Development Chapter (YDC) Website — Developer & Agent Guide

Welcome to the **YDC Website** codebase. This document outlines the project structure, features, and design implementation for this website.

---

## 1. Project Overview & Architecture

The YDC Website is the public-facing landing and marketing portal for the Youth Development Chapter (YDC). It introduces visitors to YDC's core vision, three pillars (Character, Career, Community), and directs them to register and participate via the main YDC Portal application (`https://portal.ydc.org.pk`).

### Core Technology Stack
1.  **Framework**: Next.js 16 (App Router) + React 19.
2.  **Styling**: Tailwind CSS v4 (incorporating modern features such as `@theme inline` directive and pure CSS custom properties).
3.  **Fonts**: Incorporates custom typography (like Geist, Coolvetica, and Noto Nastaliq Urdu font).
4.  **Icons**: Lucide React.

---

## 2. Directory Structure

```filepath
ydc-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Main Landing Page featuring all sections and CTAs
│   │   ├── layout.tsx          # Root Layout injecting fonts and CSS
│   │   ├── globals.css         # Styling, Tailwind v4 imports, fluid gradient anims
│   │   ├── data-deletion/      # Facebook App compatibility deletion request page
│   │   └── privacy-policy/     # Privacy Policy page for app compliance
│   ├── components/             # Reusable UI components
│   │   ├── Header.tsx          # Interactive pill-shaped navigation header
│   │   └── ui/
│   │       └── Button.tsx      # Standardized design system Button component
│   └── utils/
└── package.json                # Project configurations & dependency versions
```

---

## 3. Key Pages & Layouts

1.  **Main Landing Page (`src/app/page.tsx`)**:
    *   **Hero Area**: Modern, visually striking header using "Inspiration Drives Transformation" copy, Urdu watermark text, and a Call to Action (CTA) linking to the signup page on the YDC Portal.
    *   **Core Challenge & Vision**: Compares the challenges faced by South Punjab youth to YDC's solutions.
    *   **Three Pillars (Character, Career, Community)**: Highlighted using hover cards with underlying animated Urdu watermark labels.
    *   **Digital Ecosystem**: Promotes the features of the YDC Portal (Profiles, Smart Ticketing, Gamification, Daily Streaks, and LMS).
    *   **CTA Section**: Final push for membership onboarding.
2.  **Privacy Policy (`src/app/privacy-policy/page.tsx`)**: Necessary compliance page for social media (Facebook/Meta) integrations.
3.  **Data Deletion Instructions (`src/app/data-deletion/page.tsx`)**: Compliance instructions page for users requesting account and data deletion.

---

## 4. Custom Styling & Animation

The project employs modern styling patterns:
*   **Fluid Bottom Gradient**: Animated CSS fluid gradient (`.fluid-bottom-gradient` inside `globals.css`) that shifts colors continuously (`fluid-flow` keyframe animation) using brand HSL colors with blur filters and linear masking.
*   **Urdu Nastaliq Rendering**: Integrated Google Font `Noto Nasta'liq Urdu` under the custom utility class `font-nastaliq` to render authentic Urdu typography.

---

## 5. Development Checklist

### Commands
1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Start development server**:
    ```bash
    npm run dev
    ```
3.  **Build production version**:
    ```bash
    npm run build
    ```
