# Assembly: Endgame

A small React word-guessing game where you try to save the programming world from Assembly.

## Gameplay

- You must guess the hidden word letter by letter.
- Each wrong guess knocks out one programming language.
- You win by revealing every letter before you run out of attempts.
- You lose if you make too many wrong guesses.

## Features

- Random word selection each game
- On-screen keyboard with correct/wrong key states
- Win/lose game states
- Farewell messages after wrong guesses
- New Game reset button
- Basic accessibility support (`aria-live`, keyboard button labels)
- Confetti celebration on win

## Tech Stack

- React 18
- Vite
- clsx
- react-confetti

## Project Structure

- `App.jsx` - main game logic and UI
- `languages.js` - language chip data and colors
- `words.js` - list of possible words
- `utils.js` - helper functions (random word + farewell text)
- `index.jsx` - app entry point
- `index.css` - styling

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Notes

This project is part of a React learning track and focuses on state management, derived state, and conditional rendering.
