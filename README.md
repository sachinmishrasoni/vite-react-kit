# vite-react-kit

Modern React boilerplate CLI built with Vite.

Create scalable React starter projects with Bootstrap, MUI, TypeScript, JavaScript, and more.

---

## Features

* Vite + React setup
* JavaScript & TypeScript support
* Bootstrap templates
* MUI templates
* Scalable folder structure
* Axios API layer
* Environment configuration
* Reusable services architecture
* Clean project structure
* Ready-to-use boilerplate
* Fast project generation

---

## Installation

No installation required.

Use directly with:

```bash
npx vite-react-kit <template-name> <project-name>
```

---

## Usage

### Bootstrap TypeScript

```bash
npx vite-react-kit bootstrap-ts my-app
```

### Bootstrap JavaScript

```bash
npx vite-react-kit bootstrap-js my-app
```

### MUI TypeScript

```bash
npx vite-react-kit mui-ts my-app
```

### MUI JavaScript

```bash
npx vite-react-kit mui-js my-app
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

## Project Structure

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

Update version:

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
* CLI interactive prompts

---

## Contributing

Contributions are welcome.

Feel free to open issues and submit pull requests.

---

## License

MIT License

---

## Author

Built with React and Vite by Sachin Mishra Soin (EMISAM).
