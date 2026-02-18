# Simple Todo App

This is a modern, interactive todo list application that helps users organize and track their daily tasks.

## Functionality

Task Management:

- Add new todos with a name and optional due date
- Mark todos as completed/uncompleted with checkboxes
- Delete todos when they're no longer needed
- Real-time counter showing completed vs total tasks

User Interface:

- Modal popup form for adding new todos
- Form validation to ensure proper input
- Responsive design with clean styling
- Visual feedback for completed tasks

## Technology

Features:

1. Class Inheritance:
   javascript
   class PopupWithForm extends Popup // Inheritance pattern

2. UUID Generation:
   javascript
   import { v4 as uuidv4 } from "https://jspm.dev/uuid";

3. Date Handling:
   javascript
   const date = new Date(dateInput);
   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

4. DOM Manipulation:

- Template cloning with cloneNode(true)
- Dynamic element creation and removal
- Event delegation and handling

5. Form Validation:

- Custom FormValidator class
- Real-time input validation
- Error message display

## Deployment

This project is deployed on GitHub Pages:

- [https://nwneel.github.io/se_project_todo-app/]
