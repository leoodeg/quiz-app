# WebApp: Quiz App

## Overview

This is a Quiz App built with React, TypeScript, and Vite. The application allows users to participate in quizzes, providing instant feedback on their answers. It features multiple activities, each containing a series of questions, and displays results at the end of each activity.

## Features

- **Home Screen**: The home screen contains 2 buttons. Each button starts one of the two activities
- **Activity One Screen**: Activity one's flow includes a series of flat questions.
- **Activity Two Screen**: Activity two's flow includes a series of rounds with questions.
- **Result Screen**: Displays the score to the user after each eactivity, and also includes a button to link to the home screen

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Location State**: Utilizes React Router’s useLocation().state to pass data between routes.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/quiz-app.git
   cd quiz-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- Navigate to the homepage to select a quiz activity.
- Click on an activity to start answering questions.
- After completing the quiz, view your results.

## Folder Structure

Here's the folder structure of the project:

```
webapp/
├── public/                  # Static files
├── src/                     # Source files
│   ├── assets/              # Asset files, images, etc.
│   ├── components/          # Reusable components
│   ├── constants/           # Constant variables
│   ├── pages/               # Page/Layout components
│   ├── services/            # API services and functions
│   ├── types/               # Typescripts types and interfaces
│   ├── App.tsx              # Main application component, Routing is located here
│   ├── main.tsx             # Entry point
│   └── ...                  # Other source files
├── package.json             # Project metadata and dependencies
├── README.md                # Documentation
├── ts.config.ts             # Typescript configuration
├── vite.config.ts           # Vite configuration
└── ...                      # Other source files
```

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Create a pull request.
