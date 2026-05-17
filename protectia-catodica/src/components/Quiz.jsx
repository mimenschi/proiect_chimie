import React, { useState, useEffect, useRef } from "react"
import "./QuizStyle.css"
import Footer from "../site/Footer"

function Quiz() {
    const questionsData = [
        {
            question: "Care este principiul fundamental al protecției catodice cu anozi de sacrificiu?",
            options: [
                { text: "Acoperirea metalului cu un strat izolator care să împiedice contactul cu oxigenul", isCorrect: false },
                { text: "Creșterea potențialului de coroziune spre valori pozitive pentru a stabiliza metalul", isCorrect: false },
                { text: "Folosirea unui curent extern pentru a neutraliza ionii de hidrogen din mediu", isCorrect: false },
                { text: "Modificarea potențialului de coroziune spre valori negative astfel încât coroziunea să nu mai aibă loc", isCorrect: true }
            ],
            correctAnswer: 3,
        },
        {
            question: "În coroziunea cu depolarizare de oxigen în mediu neutru sau alcalin, care este produsul rezultat din reacția globală?",
            options: [
                { text: "H₂0", isCorrect: true },
                { text: "H₂", isCorrect: false },
                { text: "M(OH)ₓ", isCorrect: true },
                { text: "săruri", isCorrect: false }
            ],
            correctAnswer: 2,
        },
        {
            question: "Ce trebuie făcut cu plăcuțele de metal înainte de fiecare măsurătoare?",
            options: [
                { text: "Trebuie curățate cu hârtie de șmirghel", isCorrect: true },
                { text: "Nimic", isCorrect: false },
                { text: "Trebuie curățate cu apă", isCorrect: false },
                { text: "Trebuie vopsite", isCorrect: false }
            ],
            correctAnswer: 0,
        },
        {
            question: "Când este un metal considerat anod de sacrificiu?",
            options: [
                { text: "Când potențialul sistemului metalic este mai negativ decât potențialul fierului", isCorrect: true },
                { text: "Când metalul nu reacționează în mediul acid", isCorrect: false },
                { text: "Când potențialul său este mai pozitiv decât al fierului", isCorrect: false },
                { text: "Când are mai mulți electroni de valență", isCorrect: false }
            ],
            correctAnswer: 0,
        },
        {
            question: "Care este rolul anozilor de sacrificiu într-un sistem de protecție?",
            options: [
                { text: "Să se coordoneze ei înșiși pentru a proteja metalul principal", isCorrect: true },
                { text: "Să mărească viteza de coroziune a fierului", isCorrect: false },
                { text: "Să schimbe culoarea soluției de electrolit", isCorrect: false },
                { text: "Să respingă ionii de oxigen", isCorrect: false }
            ],
            correctAnswer: 0,
        },
        {
            question: "În ce stare trebuie să fie suprafața metalelor pentru a asigura un contact electric bun?",
            options: [
                { text: "Curată, fără impurități", isCorrect: true },
                { text: "Acoperită cu un strat de rugină", isCorrect: false },
                { text: "Unsă cu ulei", isCorrect: false },
                { text: "Nu contează", isCorrect: false }
            ],
            correctAnswer: 0,
        },
    ];

    const [questions, setQuestions] = useState(questionsData);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [finish, setFinish] = useState(false);
    // fade state: "in" | "out"
    const [fadeState, setFadeState] = useState("in");

    const shuffle = (array) => {
        const newarray = [...array];
        for (let i = newarray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newarray[i], newarray[j]] = [newarray[j], newarray[i]];
        }
        return newarray;
    };

    const handleRestart = () => {
        const afterQuestions = questionsData.map((question) => ({
            ...question,
            options: shuffle(question.options)
        }));
        setQuestions(shuffle(afterQuestions));
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setAnswered(false);
        setScore(0);
        setFinish(false);
        setFadeState("in");
    };

    useEffect(() => {
        handleRestart();
    }, []);

    const handleAnswer = (isCorrect, index) => {
        if (answered) return;
        setSelectedAnswer(index);
        setAnswered(true);
        if (isCorrect) setScore(prev => prev + 1);
    };

    // Fade out → update state → fade in
    const nextQuestion = () => {
        setFadeState("out");

        setTimeout(() => {
            const next = currentQuestion + 1;
            if (next < questions.length) {
                setCurrentQuestion(next);
                setAnswered(false);
                setSelectedAnswer(null);
            } else {
                setFinish(true);
            }
            setFadeState("in");
        }, 350); // matches CSS transition duration
    };

    return (
        <div className="quiz">
            {finish ? (
                <div className={`finishedQuiz fade-transition fade-${fadeState}`}>
                    <div className="cutie-rezultate">
                        <h2>Test finalizat!</h2>
                        <div className="score">
                            <p className="score-text">
                                Ai obținut {score}/{questionsData.length}!
                            </p>
                        </div>
                        <button className="restart-quiz-button" onClick={handleRestart}>
                            Repetă testul
                        </button>
                    </div>
                </div>
            ) : (
                <div className="quiz-inprogress">
                    <div className={`cutie-quiz fade-transition fade-${fadeState}`}>
                        <div className="question-counter">
                            <h3>Întrebarea {currentQuestion + 1}:</h3>
                            <h2>{questions[currentQuestion].question}</h2>
                            <div>
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button
                                        className={`quiz-options ${answered ? (index === selectedAnswer ? "selected" : "dimmed") : ""}`}
                                        key={index}
                                        onClick={() => handleAnswer(option.isCorrect, index)}
                                        disabled={answered}>
                                        <span className="options-quiz">{option.text}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            className="button-next"
                            onClick={nextQuestion}
                            disabled={!answered}>
                            {currentQuestion === (questions.length - 1) ? "Vezi rezultatul" : "Următoarea întrebare"}
                        </button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Quiz;
