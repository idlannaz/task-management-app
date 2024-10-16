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
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
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

```

### Customization

- Replace `<repository-url>` with the actual URL of your GitHub repository.
- Update `<project-directory>` with the directory name where your project is cloned.
- Modify any sections to better fit your project's specifics or features.

### Adding the README File

1. Create a new file in your project directory and name it `README.md`.
2. Copy and paste the template above into the `README.md` file.
3. Save the file.

### Why a README is Important
- Provides users and contributors with an understanding of your project.
- Guides users on how to install and use the application.
- Helps potential collaborators understand how they can contribute.

Feel free to let me know if you want to add anything specific or need further assistance!
