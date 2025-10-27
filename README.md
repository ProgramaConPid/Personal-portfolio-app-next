# Personal Portfolio App

> A modern, responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Showcase your skills, projects, and contact information in a visually appealing and interactive way.

---

## 🚀 Project Overview

This portfolio is designed to highlight your professional experience, technical skills, and featured projects. It includes:

- **Home page** with hero section and animated background
- **About page** with personal introduction
- **Projects page** with project cards and images
- **Contact page** with a contact form
- Custom notifications and interactive UI elements

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [MongoDB](https://www.mongodb.com/) & [MySQL](https://www.mysql.com/) (for backend data)

---

## 📦 Folder Structure

```
src/
	app/           # Next.js app router files
		pages/       # Static pages (about, contact, projects)
		api/         # API routes (customers, test-sheet)
		font/        # Custom fonts
	components/
		layout/      # Layout components (Navbar, Footer, Hero)
		ui/          # UI elements (Button, Card, Form, Toast, etc.)
	constant/      # App constants
	database/      # DB connection and models
	interfaces/    # TypeScript interfaces
	lib/           # Utility functions
	services/      # Service layer (API calls)
	types/         # Type definitions
	utils/         # Utility modules (notifications, etc.)
public/
	images/        # Project images
	...            # SVGs and assets
```

---

## ✨ Features

- Responsive design for all devices
- Animated hero section with background particles
- Custom toast notifications
- Project showcase with images and descriptions
- Contact form with validation
- Modular and scalable codebase

---

## 🖥️ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/ProgramaConPid/Personal-portfolio-app-next.git
   cd Personal-portfolio-app-next
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

---

## 📝 Usage

- Edit your personal info in `src/app/pages/about/page.tsx`
- Add or update projects in `src/app/pages/projects/page.tsx` and `public/images/`
- Customize skills in `src/utils/utils.ts`
- Update contact details in `src/app/pages/contact/page.tsx`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

For questions, feedback, or collaboration:

- **GitHub:** [ProgramaConPid](https://github.com/ProgramaConPid)
- **Email:** programaconpid@gmail.com

---

## 🌐 Live Demo

Check out the deployed portfolio at: [https://your-portfolio-url.com](https://your-portfolio-url.com)
