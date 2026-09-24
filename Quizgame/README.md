# 🧠 Quiz Game
[![Node.js Version](https://img.shields.io/badge/Node.js-v18.0.0%2B-green?logo=nodedotjs)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) 

A simple command-line quiz game built with JavaScript and Node.js. Answer each question by entering the number of your choice before the 20-second timer runs out.

## ✨ Features

- **Interactive CLI Interface:** Leverages Node.js `readline` module for real-time user input.
- **Per-Question Timer:** Built-in countdown clock using `setInterval` to challenge players.
- **Score Tracking:** Real-time feedback on answers and final score summary.
- **Zero Dependencies:** Runs natively with plain Node.js.
  
---
## 🛠️ Concepts Learned

This project was built as a junior-level developer milestone to practice core JavaScript principles:
- Asynchronous programming & timers (`setInterval`, `clearInterval`, `setTimeout`).
- Array & object state manipulation.
- Node.js built-in modules (`readline`, `process.stdin`, `process.stdout`).
- Event-driven CLI interactions.

---
## 🚀 Getting Started
### 📋 Requirements

- [Node.js](https://nodejs.org/) installed on your computer

### 🏃 How to Run

1. Clone the repository and open a terminal in the project directory:

   ```bash
   cd JavaScript-Projects/Quizgame
   ```

2. Start the game:

   ```bash
   node quizGame.js
   ```

3. Enter the number of your answer when prompted.

### 🎮 How to Play

- Read the question and its four answer choices.
- Enter an option number from `1` to `4`.
- Answer before the 20-second timer expires.
- Your final score is shown after all questions have been completed.

### 🧬 Project Structure

```text
Quizgame/
├── quizGame.js   # Main game logic and questions
└── README.md     # Project documentation
```

### ⚙️ Customizing the Quiz

To add or change questions, edit the `questions` array in `quizGame.js`. Each question should include:

- `question`: The question text
- `options`: An array of four answer choices
- `answer`: The number of the correct option

Example:

```javascript
{
    question: "What is the largest planet in our solar system?",
    options: ["1) Earth", "2) Mars", "3) Jupiter", "4) Venus"],
    answer: 3
}
```
---
## 📄 License

This project is available for personal and educational use.
