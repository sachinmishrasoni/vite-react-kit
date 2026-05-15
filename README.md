# vite-react-kit

Modern React boilerplate CLI built with Vite.

Create scalable and production-ready React starter projects with Bootstrap, MUI, TypeScript, JavaScript, and more.

---

## Features

* Interactive CLI setup
* Vite + React configuration
* JavaScript & TypeScript templates
* Bootstrap templates
* Material UI templates
* Scalable folder structure
* Axios API architecture
* Environment configuration
* Reusable services architecture
* Clean and maintainable codebase
* Fast project generation
* Optional dependency installation
* Optional Git initialization

---

## Quick Start

Run directly using:

```bash
npx vite-react-kit
```

---

## Interactive CLI

After running the command, the CLI will ask:

```txt
? Select a template
❯ Bootstrap TypeScript
  Bootstrap JavaScript
  MUI TypeScript
  MUI JavaScript
```

Then:

```txt
? Enter project name:
my-app
```

Optional setup prompts:

```txt
? Install dependencies?
❯ Yes
  No
```

```txt
? Initialize git repository?
❯ Yes
  No
```

---

## Available Templates

| Template     | Description                           |
| ------------ | ------------------------------------- |
| bootstrap-ts | React + Vite + Bootstrap + TypeScript |
| bootstrap-js | React + Vite + Bootstrap + JavaScript |
| mui-ts       | React + Vite + MUI + TypeScript       |
| mui-js       | React + Vite + MUI + JavaScript       |

---

## Generated Project Structure

```txt
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

## Services Architecture

### API Layer

```txt
services/api/
├── apiConfig.ts
├── axiosInstance.ts
├── endpoints.ts
└── interceptor.ts
```

### Storage Services

```txt
services/storage/
├── localStorage.service.ts
└── sessionStorage.service.ts
```

### Notification Service

```txt
services/notifications/
└── toast.service.ts
```

---

## Tech Stack

* React
* Vite
* Bootstrap
* Material UI
* TypeScript
* JavaScript
* Axios
* ESLint

---

## Development

Clone the repository:

```bash
git clone https://github.com/your-username/vite-react-kit.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## Publish New Version

Update package version:

```bash
npm version patch
```

Publish package:

```bash
npm publish --access public
```

---

## Roadmap

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

---

## Contributing

Contributions are welcome.

Feel free to open issues and submit pull requests.

---

## License

MIT License

---

## Author

Built with React and Vite by Sachin Mishra Soni (EMISAM).
