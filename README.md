# Interactive Task Manager

## Overview

An interactive Task Manager application built using JavaScript, jQuery, DOM Manipulation, Tailwind CSS, and LocalStorage.

The application allows users to add, edit, complete, delete, search, and filter tasks. Tasks are stored in LocalStorage so that they remain available even after refreshing the page.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Undo completed tasks
- Delete tasks
- Search tasks by text
- Filter tasks:
  - All
  - Active
  - Completed
- Task statistics
- Empty-state message when no tasks are available
- No-match message when search returns no results
- Persistent data using LocalStorage
- Dynamic task rendering using jQuery
- Event delegation for dynamically created elements
- Responsive user interface
- Tailwind CSS styling

## Tech Stack

- HTML5
- CSS3
- JavaScript
- jQuery
- DOM Manipulation
- Tailwind CSS
- LocalStorage

## How It Works

### Add Task

Users can enter a task and click the Add button to create a new task.

### Complete Task

Users can mark a task as completed. Completed tasks are visually displayed with a line-through effect and reduced opacity.

### Edit Task

Users can edit an existing task and update its text.

### Undo Task

Completed tasks can be restored to the active state using the Undo option.

### Delete Task

Users can permanently remove a task from the task list.

### Search

The search feature allows users to find tasks by entering text in the search input.

### Filter

Tasks can be filtered based on their status:

- **All** — Shows all tasks
- **Active** — Shows incomplete tasks
- **Completed** — Shows completed tasks

### LocalStorage

Tasks are stored as an array of objects in the browser's LocalStorage.

Each task contains:

```js
{
    text: "Learn JavaScript",
    completed: false
}
```


## Project Structure
Interactive Task Manager/
│
├── src/
│   ├── index.html
│   ├── input.css
│   ├── jQuery.js
│   └── output.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


## Key Concepts Used
# JavaScript

Used for application logic, task management, filtering, searching, and LocalStorage operations.

# jQuery

Used for:

- DOM selection
- Event handling
- Dynamic element creation
- Updating the UI
- Event delegation

  
# DOM Manipulation

The task list is dynamically created and updated based on user actions.

# LocalStorage

Used to save tasks in the browser and restore them when the page is loaded again.

# Tailwind CSS

Used to create a responsive and user-friendly interface.

# Application Flow

User Action
     ↓
jQuery Event Handler
     ↓
Update Task Data
     ↓
Save to LocalStorage
     ↓
Render Updated Tasks


# Learning Outcomes

Through this project, I practiced:

- JavaScript problem solving
- DOM manipulation
- jQuery selectors and events
- Event delegation
- Dynamic UI rendering
- Array of objects
- LocalStorage
- JSON.stringify()
- JSON.parse()
- Search and filtering logic
- CRUD-like task operations
- Responsive UI development


# Future Improvements

Possible future improvements include:

- Task categories
- Due dates
- Priority levels
- Dark mode
- Drag and drop task ordering
- Task sorting
- Backend database integration


## Author
  # Neha
