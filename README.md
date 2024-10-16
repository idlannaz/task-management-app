# Task Management System

## Overview

This project is a **Task Management System** built using **React** and **TypeScript**. It allows users to create, manage, and track tasks with parent-child relationships. The application supports task creation, editing, deletion, and dynamically updating the status of tasks based on their completion.

## Features

- Create tasks with unique IDs, names, and optional parent task IDs.
- View tasks in a hierarchical format, displaying parent-child relationships.
- Toggle task statuses between **In Progress**, **Done**, and **Completed**.
- Automatically update parent task statuses based on child task completion.
- Local storage support to persist tasks between sessions.

## Requirements

- **Node.js** and **npm** installed on your machine.
- Basic knowledge of React and TypeScript.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## Usage

- To create a new task, enter the task name in the input field and, optionally, select a parent task.
- Click the **Add New Task** button to save the task.
- Tasks are displayed in a list format, and you can toggle their statuses by clicking the checkbox next to each task.
- Child tasks will be displayed under their parent tasks in a nested format.

## Code Structure

- **`src/`**: Contains the source code for the application.
  - **`App.jsx`**: Main application component that manages the task list and user interactions.
  - **`AddNew.jsx`**: Component for adding new tasks to the system.
  - **`style.css`**: Basic styles for the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or bug fixes, please create a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by various task management applications.
- Special thanks to the React community for their resources and documentation.

