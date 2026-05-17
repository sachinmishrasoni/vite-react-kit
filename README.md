# vite-react-kit

A modern and scalable React boilerplate CLI powered by Vite.

`vite-react-kit` helps developers quickly create production-ready React applications with a clean architecture, reusable folder structure, and optional feature setup — all through an interactive CLI experience.

Whether you're building admin panels, dashboards, SaaS products, or scalable frontend applications, `vite-react-kit` helps you skip repetitive setup and start development faster.

---

# Features

## Core Setup

* Vite + React starter
* JavaScript & TypeScript support
* Interactive CLI experience
* Clean and scalable architecture
* Modular project generation
* Fast project setup

---

## UI Library Support

Choose your preferred UI framework during setup:

* Bootstrap
* Material UI (MUI)
* Tailwind CSS

---

## State Management

Built-in support for:

* Redux Toolkit
* Zustand

---

## Feature Setup

Automatically configure commonly used libraries:

* React Router
* Axios
* React Query
* React Toastify
* SweetAlert2

---

## Project Configuration

Optional developer tooling setup:

* Path Alias (`@/`)
* ESLint
* Prettier

---

## Scalable Folder Structure

Generate a professional and maintainable folder architecture automatically.

Perfect for:

* enterprise applications
* admin dashboards
* scalable frontend systems
* team-based projects

---

# Installation

No global installation required.

Run directly using:

```bash id="5ymr1t"
npx vite-react-kit
```

---

# Interactive CLI Flow

The CLI will guide you through the complete project setup process.

```txt id="2kckxv"
? Project name
my-app

? Select language
❯ TypeScript
  JavaScript

? Select UI Library
❯ Bootstrap
  MUI
  Tailwind CSS

? Select state management
❯ Redux Toolkit
  Zustand
  None

? Select features
◉ React Router
◉ Axios
◉ React Query
◉ Toastify
◉ SweetAlert2

? Project configuration
◉ Path Alias (@/)
◉ ESLint
◉ Prettier

? Apply scalable folder structure?
❯ Yes
  No

? Install dependencies?
❯ Yes
  No

? Initialize git repository?
❯ Yes
  No
```

---

# Generated Folder Structure

```txt id="krhjlwm"
src/
│
├── assets/
│   ├── data/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── styles/
│       └── global.css
│
├── components/
│   ├── common/
│   ├── ui/
│   └── animation/
│
├── layouts/
│
├── pages/
│
├── routes/
│
├── services/
│   ├── api/
│   ├── notifications/
│   ├── payments/
│   └── storage/
│
├── shared/
│   ├── config/
│   ├── constants/
│   ├── data/
│   ├── helpers/
│   ├── hooks/
│   └── types/
│
├── store/
│
├── App.tsx
└── main.tsx
```

---

# CLI Architecture

The project uses a modular CLI architecture for scalability and maintainability.

```txt id="jqtwxn"
cli/
│
├── commands/
├── generators/
├── prompts/
└── index.js
```

### Commands

Handle high-level CLI workflows.

### Generators

Responsible for actual project generation and setup logic.

### Prompts

Manage interactive CLI questions.

---

# Supported Technologies

* React
* Vite
* JavaScript
* TypeScript
* Bootstrap
* Material UI
* Tailwind CSS
* Redux Toolkit
* Zustand
* Axios
* React Query
* ESLint
* Prettier

---

# Local Development

Clone the repository:

```bash id="y5g8hu"
git clone https://github.com/your-username/vite-react-kit.git
```

Install dependencies:

```bash id="kdr7qx"
npm install
```

Link package locally:

```bash id="frl8zb"
npm link
```

Run CLI locally:

```bash id="llcyxm"
vite-react-kit
```

---

# Publish New Version

Update package version:

```bash id="vrvz6r"
npm version patch
```

Publish package:

```bash id="ebg8fj"
npm publish --access public
```

---

# Future Roadmap

Upcoming features planned for future releases:

* Shadcn UI setup
* Authentication starter
* Admin dashboard starter
* Docker setup
* Husky setup
* CI/CD setup
* Unit testing setup
* Dark mode starter
* Multi-layout architecture
* Smart structure merge mode
* Existing project enhancement mode

---

# Why vite-react-kit?

Setting up modern React projects repeatedly can be time-consuming.

`vite-react-kit` solves that by providing:

* reusable architecture
* automated setup
* scalable project structure
* configurable tooling
* modern frontend best practices

This allows developers to focus more on building features and less on repetitive configuration.

---

# Contributing

Contributions are welcome.

Feel free to open issues, suggest improvements, and submit pull requests.

---

# License

MIT License

---

# Author

Built with React and Vite by Sachin Mishra Soni (EMISAM).
