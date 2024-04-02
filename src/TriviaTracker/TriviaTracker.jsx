import { useContext, useEffect, useState } from "react"
import style from "./TriviaTracker.module.css"
import Context from "../Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function TriviaTracker({currentQuestion, maxQuestions}){
    const {correctPoints, incorrectPoints} = useContext(Context)

    return (
        <div className={style.tracker}>
            <p>Question: {currentQuestion}/{maxQuestions}</p>
            <p>Correct: {correctPoints}</p>
            <p>Incorrect: {incorrectPoints}</p>
        </div>
    )
}

export default TriviaTracker