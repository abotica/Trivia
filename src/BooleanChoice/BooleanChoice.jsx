import { useEffect, useContext, useRef, useState, createRef } from "react"
import Context from "../Context"
import style from "./BooleanChoice.module.css"

function BooleanChoice({correctAnswer, incorrectAnswer}){
    const options = useRef([<button key={correctAnswer} value={correctAnswer} onClick={event => {handleOnClick(event); setNextQuestion()}}>{correctAnswer}</button>, <button key={incorrectAnswer} value={incorrectAnswer} onClick={event => {handleOnClick(event); setNextQuestion()}}>{incorrectAnswer}</button>])
    const {setNextQuestion, setCorrectPoints, setIncorrectPoints} = useContext(Context)


    function renderQuestions(){
        options.current.sort((a,b) => {
        const valueA = a.props.value;
        const valueB = b.props.value;
    
        if (valueA === "True") return -1;
        if (valueB === "True") return 1;
        return 0;
        })

        return options.current.map(question => { return question})
    }

    function handleOnClick(event){
        if(event.target.value === correctAnswer){
            setCorrectPoints()
        }
        else if(event.target.value === incorrectAnswer){
            setIncorrectPoints()
        }

    }
    return (
        <div className={style.mainDiv}>
            {renderQuestions()} 
        </div>
    )
}

export default BooleanChoice