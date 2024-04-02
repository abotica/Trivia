import BooleanChoice from "../BooleanChoice/BooleanChoice"
import MultipleChoice from "../MultipleChoice/MultipleChoice"
import style from "./Question.module.css"

function Question({type, difficulty, category, question, correctAnswer, incorrectAnswers}){
    return (
        <div className={style.mainDiv}>
            <h3>---Category: <i>{category}</i>/Difficulty: <i>{difficulty}</i></h3>
            <h1>Q: <i>{question}</i></h1>
            <br/>
            <h1>A:</h1>
            {type == "boolean" && <BooleanChoice correctAnswer={correctAnswer} incorrectAnswer={incorrectAnswers[0]}></BooleanChoice>}
            {type == "multiple" && <MultipleChoice correctAnswer={correctAnswer} incorrectAnswers={incorrectAnswers}></MultipleChoice>}

        </div>
    )
}

export default Question