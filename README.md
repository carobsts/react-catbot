# Chatbot 😽 (Dev. 2020)

A simple React-based chatbot application with typing animation and Lottie animations.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Available Scripts](#available-scripts)
5. [Project Structure](#project-structure)
6. [Testing](#testing)
7. [Linting & Formatting](#linting--formatting)
8. [Deployment](#deployment)
9. [Browsers Support](#browsers-support)
10. [License](#license)

## Project Overview

This project is a chatbot built with React, featuring typing animation and integrated Lottie animations for an engaging user interface.

## Tech Stack

- **React** (v16.13.1)
- **React Scripts** (Create React App) (v3.4.1)
- **React Lottie** for animation playback
- **React Reveal** for reveal animations
- **React Typing Animation** for typing effect
- **Jest** and **React Testing Library** for testing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/carobsts/react-catbot.git
   cd chatbot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Demo
https://catbot.now.sh/

## Mobile version 📱
<img src="https://i.ibb.co/8sp3gPD/Catbot.png" alt="Catbot" />

## Available Scripts

In the project directory, you can run:

- `npm start`  
  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run build`  
  Builds the app for production to the `build` folder.

- `npm test`  
  Launches the test runner in interactive watch mode.

- `npm run eject`  
  Ejects Create React App configuration. **Note: This is a one-way operation.**

## Project Structure

```
chatbot/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/       # Reusable React components
│   ├── animations/       # Lottie animation JSON files
│   ├── App.js            # Main application component
│   ├── index.js          # Application entry point
│   └── ...
├── package.json
└── README.md
```

## Testing

This project uses **Jest** and **React Testing Library**. To run tests:

```bash
npm test
```

For more information, refer to the [React Testing Library documentation](https://testing-library.com/docs/react-testing-library/intro).

## Linting & Formatting

Create React App includes ESLint configuration out of the box with `react-app` rules.

## Deployment

After building the project with:

```bash
npm run build
```

Serve the contents of the `build` folder using any static server or hosting provider (e.g., GitHub Pages, Netlify, Vercel).

## Browsers Support

The application supports modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is licensed under the MIT License.
