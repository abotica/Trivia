import { useRef, useState } from "react"
import Question from "../Question/Question"
import he from "he"
import style from "./QuestionsDisplay.module.css"
// HTML Entities Ecoder/Decoder (he) is used to decode the text gotten from API

function QuestionsDisplay({questions, currentQuestion, setCurrentQuestion, maxQuestions, correctPoints, incorrectPoints}){
    const type = useRef("")
    const difficulty = useRef("")
    const category = useRef("")
    const question = useRef("")
    const correctAnswer = useRef("")
    const incorrectAnswers = useRef([])
    const questionComponents = useRef([])
    

questionComponents.current = questions.map((questionElement, index) => {
                type.current = questionElement.type
                difficulty.current = questionElement.difficulty
                category.current = he.decode(questionElement.category)
                question.current = he.decode(questionElement.question)
                correctAnswer.current = he.decode(questionElement.correct_answer)
                incorrectAnswers.current = questionElement.incorrect_answers.map(text => he.decode(text))
                return <Question key={index} type={type.current} difficulty={difficulty.current} category={category.current} question={question.current} correctAnswer={correctAnswer.current} incorrectAnswers={incorrectAnswers.current}></Question>
                
            })
console.log(questionComponents.current)

function displayQuestions(){
    if(currentQuestion < maxQuestions){
        return questionComponents.current[currentQuestion]
    } 
    else if(currentQuestion == maxQuestions){
        return (
            <div className={style.exitDiv}>
            <p className={style.triviaOver}>Your score: {correctPoints}</p>
            <p className={style.playAgainText}>Do you want to play again?</p>
            <button onClick={() => window.location.reload()}>Play again!</button>
            </div>
        )
    }
}
    return (
        <>
        
            {displayQuestions()}
    
        </>
    )
}

export default QuestionsDisplay