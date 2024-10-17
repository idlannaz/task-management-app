# Task Management System

A Task Management System built with **Vite**, **React (JS + SWC)** that allows users to add, manage, and edit tasks. It also supports parent-child relationships for tasks, so tasks can have subtasks.

## Features

- Add new tasks with optional parent task selection (for subtasks).
- Mark tasks as completed.
- Automatically manage task statuses based on completion of subtasks.
- Edit existing tasks.
- Delete tasks.
- Task data is saved in **localStorage** for persistence.

## Getting Started

### Prerequisites

To run this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/task-management-system.git
cd task-management-system
```

2. Install dependencies:

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### Running the Project

Start the development server:

```bash
npm run dev
```

This will open the app at `http://localhost:5173` (or another port as specified by Vite).

### Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

### Linting

You can run ESLint to check for code issues:

```bash
npm run lint
```

## Project Structure

- **App.jsx**: The main component that renders the list of tasks, manages state, and handles adding, editing, and deleting tasks.
- **AddNew.jsx**: The component that handles the form to add new tasks or subtasks.
- **style.css**: Basic styling for the app.

## Local Storage

The task data is stored in the browser's `localStorage`, so tasks will persist even after the page is refreshed.

## Future Improvements

- Add task due dates.
- Add priority levels for tasks.
- Implement search and filter functionalities.
- Use a database or API for persistent data storage.

## Contributing

Contributions are welcome! Feel free to fork this project, make improvements, and open a pull request.

## License

This project is licensed under the MIT License.