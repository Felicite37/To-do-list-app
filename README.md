# My To-Do List App

A modern, interactive to-do list application built with React, Vite, and Tailwind CSS. Features drag-and-drop functionality, local storage persistence, and a clean, responsive design.

## Features

- ✅ Add new tasks with a simple form interface
- 🗑️ Delete tasks with a single click
- ✔️ Mark tasks as complete/incomplete
- 🎯 Drag and drop to reorder tasks
- 💾 Automatic local storage persistence
- 📱 Responsive design with Tailwind CSS
- 🎨 Clean UI with Heroicons

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Beautiful DnD** - Drag and drop functionality
- **Heroicons** - Beautiful SVG icons
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd my-to-dolist
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── AddTask.jsx     # Task input form component
│   └── TaskList.jsx    # Task list with drag-drop functionality
├── App.jsx             # Main application component
├── App.css             # Application styles
├── index.css           # Global styles
└── main.jsx            # Application entry point
```

## How to Use

1. **Add a task**: Type your task in the input field and click the plus button or press Enter
2. **Complete a task**: Click on the task text to mark it as complete
3. **Delete a task**: Click the trash icon to remove a task
4. **Reorder tasks**: Drag and drop tasks to change their order
5. **Persistence**: Your tasks are automatically saved to local storage

## Contributing

Feel free to submit issues and enhancement requests!
