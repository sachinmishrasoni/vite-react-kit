# vite-react-kit

Modern React boilerplate CLI built with Vite.

Create scalable and production-ready React starter projects with Bootstrap, MUI, TypeScript, JavaScript, and more.

---

# Features

* Interactive CLI setup
* Vite + React configuration
* JavaScript & TypeScript templates
* Bootstrap templates
* Material UI templates
* Scalable folder structure
* Existing project structure support
* Axios API architecture
* Environment configuration
* Reusable services architecture
* Clean and maintainable codebase
* Optional dependency installation
* Optional Git initialization
* Fast project generation

---

# Quick Start

Run directly using:

```bash id="zmu7tc"
npx vite-react-kit
```

---

# Interactive CLI

After running the command, the CLI will ask:

```txt id="kn7x1y"
? Select a template
❯ MUI TypeScript
  MUI JavaScript
  Bootstrap TypeScript
  Bootstrap JavaScript
```

Then:

```txt id="1ljj5k"
? Enter project name:
my-app
```

Optional setup prompts:

```txt id="n5smhq"
? Install dependencies?
❯ Yes
  No
```

```txt id="ujz1h0"
? Initialize git repository?
❯ Yes
  No
```

---

# Existing Project Structure Mode

Apply scalable folder architecture to an existing React/Vite project.

Run inside your existing project:

```bash id="bbyknu"
npx vite-react-kit structure
```

Then select:

```txt id="tvb99g"
? Select project type
❯ TypeScript
  JavaScript
```

Features:

* Detect existing `src` folder
* Create backup automatically
* Apply professional scalable architecture
* Safe structure replacement

Backup example:

```txt id="7aqdlu"
src → src_backup
```

---

# Available Templates

| Template     | Description                           |
| ------------ | ------------------------------------- |
| bootstrap-ts | React + Vite + Bootstrap + TypeScript |
| bootstrap-js | React + Vite + Bootstrap + JavaScript |
| mui-ts       | React + Vite + MUI + TypeScript       |
| mui-js       | React + Vite + MUI + JavaScript       |

---

# Generated Project Structure

```txt id="zkdxmx"
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── styles/
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

# Services Architecture

## API Layer

```txt id="3c7vtw"
services/api/
├── apiConfig.ts
├── axiosInstance.ts
├── endpoints.ts
└── interceptor.ts
```

## Storage Services

```txt id="k3dxba"
services/storage/
├── localStorage.service.ts
└── sessionStorage.service.ts
```

## Notification Service

```txt id="8v5o0v"
services/notifications/
└── toast.service.ts
```

---

# Tech Stack

* React
* Vite
* Bootstrap
* Material UI
* TypeScript
* JavaScript
* Axios
* ESLint
* Node.js CLI

---

# Local Development

Clone the repository:

```bash id="9dh5kb"
git clone https://github.com/your-username/vite-react-kit.git
```

Install dependencies:

```bash id="xam4qb"
npm install
```

Run locally:

```bash id="mu7ynr"
npm link
```

Test CLI:

```bash id="2gbggz"
vite-react-kit
```

Test structure mode:

```bash id="clzjlwm"
vite-react-kit structure
```

---

# Publish New Version

Update package version:

```bash id="xjmg1x"
npm version patch
```

Publish package:

```bash id="mjlwmz"
npm publish --access public
```

---

# Roadmap

Upcoming templates and features:

* Tailwind CSS templates
* Shadcn UI templates
* Redux Toolkit setup
* Zustand setup
* React Query integration
* Authentication starter
* Admin dashboard starter
* Theme configuration
* Interactive advanced prompts
* Dark mode starter
* Multi-layout architecture
* Smart structure merge mode

---

# Contributing

Contributions are welcome.

Feel free to open issues and submit pull requests.

---

# License

MIT License

---

# Author

Built with React and Vite by Sachin Mishra Soni (EMISAM).
