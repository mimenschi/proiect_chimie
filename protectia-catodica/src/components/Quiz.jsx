import React, { useState, useEffect } from "react"
import "./QuizStyle.css"

function Quiz() {
    //intrebarile
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

    //amestecarea vectorului - fisher-yates
    const shuffle = (array) => {
        const newarray = [...array];
        for (let i = newarray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newarray[i], newarray[j]] = [newarray[j], newarray[i]];
        }
        return newarray;
    };

    //restart quiz
    const handleRestart = () => {
        //se amesteca optiunile si inrebarile
        const afterQuestions = questionsData.map((question) => ({
            ...question,
            options: shuffle(question.options)
        }));
        setQuestions(shuffle(afterQuestions));

        //se reseteaza starile
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setAnswered(false);
        setScore(0);
        setFinish(false);
    };

    //amestecarea intrebarilor si a raspunsurilor la inceput de quiz
    //+setarea starilor caracteristice inceputului de quiz
    useEffect(() => {
        handleRestart();
    }, []);

    //cand se apasa un raspuns
    const handleAnswer = (isCorrect, index) => {
        //pentru a evita trisatul
        if(answered) 
            return;
        //se inregistreaza inputul
        setSelectedAnswer(index);
        setAnswered(true);

        //se verifica daca inputul este corect
        if (isCorrect) {
            //daca inputul este cel corect, se incrementeaza score-ul
            setScore(score + 1);
        }

    };

    //mergi la urmatoarea intrebare
    const nextQuestion = () => {
        const nextQuestion = currentQuestion + 1;

        //daca mai sunt intrebari, se muta la urmatoarea
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setAnswered(false);
            setSelectedAnswer(null);
        }
        //daca nu mai sunt intrebari, se afiseaza score-ul (s-a terminat quizul)
        else {
            setFinish(true);
        }
    }

    return (
        <div className="quiz">
            {/*afisarea rezultatelor:output rezultate:intrebarea curenta*/}
            {finish ? (
                <div className="finishedQuiz">
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
            ) : (
                < div className="quiz-inprogress">
                    <div className="question-counter">
                        <h3>Întrebarea {currentQuestion + 1}:</h3>
                        <h2>{questions[currentQuestion].question}</h2>
                        <div className="quiz-options">
                            {questions[currentQuestion].options.map((option, index) =>
                            (<button
                                key={index}
                                onClick={() => handleAnswer(option.isCorrect, index)}
                                disabled={answered}>
                                <span className="options-quiz">{option.text}</span>
                            </button>
                            ))}
                        </div>
                    </div>

                    {answered && (
                        <button className="button-next" onClick={nextQuestion}>
                            {currentQuestion === (questions.length - 1) ? "Vezi rezultatul" : "Următoarea întrebare"}
                        </button>)}
                </div >
            )}
        </div>
    );
};
export default Quiz;