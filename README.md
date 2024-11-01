# Employee Hierarchy Application

This is a React and TypeScript-based application that visualizes an organization’s employee hierarchy in a table format. It dynamically renders employee-manager relationships, showing hierarchical levels and displaying employees without subordinates in a separate column.

## Table of Contents

  - [Employee Hierarchy Application](#employee-hierarchy-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)

## Features

- **Organizational Hierarchy Table**: Displays employees in hierarchical levels with each level represented in a separate column. Employees without subordinates appear in the last column.
- **Dynamic Hierarchical Levels**: Supports any depth of hierarchy based on the provided employee-manager data.
- **Responsive Design**: Uses styled-components to create a flexible and responsive layout.

## Technologies Used

- **React** with **TypeScript**: For building a robust, type-safe UI.
- **Styled-Components**: For scoped and dynamic CSS within components.
- **GitHub CLI**: For creating and managing the repository directly from the command line.

## Project Structure

The main components and files are structured as follows:

src/
├── components/
│   ├── Table.data.tsx
│   └── Table.component.tsx
└── App.tsx
