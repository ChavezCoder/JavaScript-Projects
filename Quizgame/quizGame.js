const readline = require('readline');

const questions = [
    {
        question: "What's 9 + 10?",
        options: ["1) 21", "2) 14", "3) 19", "4) 3360"],
        answer: 3
    },
    {
        question: "What's the capital of France?",
        options: ["1) Berlin", "2) Madrid", "3) Paris", "4) Rome"],
        answer: 3
    },
    {
        question: "Who was the Ancient Greek God of the Sun?",
        options: ["1) Zeus", "2 Apollo", "3) Ares", "4) Hermes"],
        answer: 2
    },
    {
        question: "Which is the only sea without any coastlines?",
        options: ["1) Red Sea", "2) Dead Sea", "3) Arabian Sea", "4) Sargasso Sea"],
        answer: 4
    },
];

let currentQuestionIndex = 0;
let score = 0; 
let timer = null;
let timeLeft = 20; // 20 seconds for each question

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(){
    if (currentQuestionIndex >= questions.length){
        endGame();
        return;
    }

    const q = questions[currentQuestionIndex];
    timeLeft = 20;

    console.clear();
    console.log(`=== QUESSTION ${currentQuestionIndex + 1} of ${questions.length} ===`);
    console.log(q.question);
    console.log("---------------------------------------");
    q.options.forEach((opt) => console.log(opt));
    console.log("---------------------------------------");

    // Start live tick timer
    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0){
            clearInterval(timer);
            console.log("\n⏰ Time's up! The next question is... ")
            setTimeout(() => {
                currentQuestionIndex++;
                askQuestion();
            }, 1500);
        }
    }, 1000);

    rl.question("\n Enter option number (Time left: 20 seconds): ", (input) => {
        clearInterval(timer); //Stop timer once immediately once answered 
        const userAnswer = parseInt(input.trim(), 10);

        if(userAnswer === q.answer){
            console.log("✅ Correct!");
            score++;
        } else {
            console.log(`❌ Incorrect! The correct option was: ${q.answer}. Better luck next time!`)
        }

        currentQuestionIndex++;
        setTimeout(askQuestion, 1500); // Wait 1.5 seconds before showing next question.
    });
}

function endGame() {
    console.clear();
    console.log("=======================================");
    console.log("               GAME OVER               ");
    console.log("=======================================");
    console.log(`Your final score is: ${score} / ${questions.length}`);
    console.log("=======================================\n");
    rl.close();
}

askQuestion();

