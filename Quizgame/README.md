# Quiz Game

A simple command-line quiz game built with JavaScript and Node.js. Answer each question by entering the number of your choice before the 20-second timer runs out.

## Features

- Multiple-choice questions
- Four questions covering math, geography, mythology, and science
- 20-second timer for each question
- Live score tracking
- Final score displayed when the game ends

## Requirements

- [Node.js](https://nodejs.org/) installed on your computer

## How to Run

1. Clone the repository and open a terminal in the project directory:

   ```bash
   cd JavaScript-Projects/Quizgame
   ```

2. Start the game:

   ```bash
   node quizGame.js
   ```

3. Enter the number of your answer when prompted.

## How to Play

- Read the question and its four answer choices.
- Enter an option number from `1` to `4`.
- Answer before the 20-second timer expires.
- Your final score is shown after all questions have been completed.

## Project Structure

```text
Quizgame/
├── quizGame.js   # Main game logic and questions
└── README.md     # Project documentation
```

## Customizing the Quiz

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

## License

This project is available for personal and educational use.
