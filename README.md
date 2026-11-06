# Portfolio

My personal portfolio website built with React and Vite.

## About the Project

This project is a personal portfolio website created to showcase my frontend development skills, projects, and information about me.

The website includes a homepage with several sections and separate pages with detailed information about each project.

## Technologies

- **React** – building the user interface.
- **JavaScript** – application logic.
- **Vite** – development environment and build tool.
- **React Router** – navigation between pages.
- **CSS Modules** – component-based styling.
- **HTML5 and CSS3** – page structure and styling.

## Features

- Personal introduction section.
- About Me section.
- Projects showcase.
- Individual project details pages.
- Navigation between pages using React Router.
- Reusable React components.
- Responsive and custom styling.

## Project Structure

```text
Portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProjectDetailsPage.jsx
│   │   └── ProjectDetails.module.css
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── index.html
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd Portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the website

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Navigation

The application uses React Router for page navigation.

- `/` – Homepage.
- `/projects/:projectId` – Individual project details page.

## Author

Personal portfolio project developed as part of my frontend development learning journey.
