# Early Childhood Contexts Resource Hub

![ECE Resource Hub Screenshot](https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Overview

The Early Childhood Contexts Resource Hub is a professional development website designed for early childhood educators, leaders, and policymakers in Australia. It provides an in-depth exploration of the key contexts—economic, social, cultural, health, and crisis—that shape the lives of children and families in contemporary society.

This resource offers evidence-based information, practical strategies, policy insights, and curated resources to help professionals create equitable, inclusive, and responsive learning environments.

---

## Key Features

-   **5 In-Depth Context Modules:** Each section provides detailed information on a specific context (Economic, Social, Cultural, Health, Crisis).
-   **Evidence-Based Strategies:** Practical, actionable strategies for educators to implement in their practice.
-   **Australian Policy Landscape:** Summaries of relevant national and state-level policies and frameworks.
-   **Interactive Content:** Accordion-style sections for easy navigation and data visualizations to illustrate key statistics.
-   **Curated Resource Lists:** Handpicked books, media, and professional development materials for both educators and children (ages 0-5).
-   **External Partner Links:** Direct links to community and professional organizations for further support.
-   **Embedded Media:** YouTube videos are embedded directly into resource cards for seamless viewing.
-   **APA 7th Edition Citations:** All sources are meticulously cited and listed on a dedicated references page.
-   **Fully Responsive Design:** A clean, accessible, and mobile-friendly interface built with Tailwind CSS.

---

## Theoretical Framework

The content and structure of this resource are informed by several key sociological and developmental theories, including:

-   **Ecological Systems Theory** (Urie Bronfenbrenner)
-   **Hierarchy of Needs** (Abraham Maslow)
-   **Attachment Theory** (John Bowlby)
-   **Resilience Theory**
-   **Social Learning Theory** (Albert Bandura)

---

## Technology Stack

-   **Frontend:** [React](https://reactjs.org/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Icons:** Heroicons (via manual SVG components)

---

## Project Structure

The project is organized with a clear separation of concerns to ensure maintainability and scalability.

```
/
├── public/
│   └── index.html        # HTML entry point
├── src/
│   ├── components/       # Reusable React components (Accordion, Icons, etc.)
│   ├── data/             # All static text content and data for the site
│   ├── pages/            # Page-level components (HomePage, ContentPage, etc.)
│   ├── services/         # API service definitions (e.g., Gemini)
│   ├── App.tsx           # Main application component with routing logic
│   ├── index.tsx         # React application entry point
│   └── types.ts          # TypeScript type definitions
└── README.md             # This file
```

---

## Getting Started

To run this project locally, follow these steps:

**1. Clone the repository:**
```bash
git clone <repository-url>
cd <repository-directory>
```

**2. Install dependencies:**
This project uses ES modules loaded via a CDN, so a traditional `npm install` step for libraries like React is not required. However, you will need a local server to serve the `index.html` file.

**3. Run a local server:**
You can use any simple HTTP server. If you have Node.js installed, you can use the `serve` package.

```bash
# Install serve globally (if you haven't already)
npm install -g serve

# Run the server from the project root
serve .
```

Alternatively, you can use the Live Server extension in Visual Studio Code.

**4. Open in browser:**
Navigate to the local address provided by your server (e.g., `http://localhost:3000`) to view the application.

---

## Content and Citations

All information presented in this resource hub is intended for educational purposes. The content has been carefully researched and all sources are cited in APA 7th edition format on the **References** page.
