import { useContext, useRef, useState } from "react"
import style from "./MultipleChoice.module.css"
import Context from "../Context"

function MultipleChoice({correctAnswer, incorrectAnswers}){
    const { setNextQuestion, setCorrectPoints, setIncorrectPoints } = useContext(Context)
    const question1 = correctAnswer
    const question2 = incorrectAnswers[0]
    const question3 = incorrectAnswers[1]
    const question4 = incorrectAnswers[2]
    const options = useRef([<button key={question1} value={question1} onClick={event => {handleOnClick(event); setNextQuestion()}}>{question1}</button>, <button key={question2} value={question2} onClick={event => {handleOnClick(event); setNextQuestion()}}>{question2}</button>, <button key={question3} value={question3} onClick={event => {handleOnClick(event); setNextQuestion()}}>{question3}</button>, <button key={question4} value={question4} onClick={event => {handleOnClick(event); setNextQuestion()}}>{question4}</button>])

    function handleOnClick(event){
        if(event.target.value === correctAnswer){
            setCorrectPoints()
        }
        else if(event.target.value !== correctAnswer){
            setIncorrectPoints()
        }
    }

    function renderQuestions(){
        options.current.sort((a, b) => {
            if (a.key > b.key){
                return -1
            }
            else{
                return 1
            }
        })
    
            return options.current.map(question => { return question})
    }

    return (
        <div className={style.mainDiv}>
           {renderQuestions()}
        </div>
    )
}

export default MultipleChoice