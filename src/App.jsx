import { useState } from 'react'
import style from './App.module.css'
import GameOptions from './GameOptions/GameOptions'
import Greeting from './Greeting/Greeting'
import QuestionsDisplay from './QuestionsDisplay/QuestionsDisplay'
import TriviaTracker from './TriviaTracker/TriviaTracker'
import Context from './Context'

function App() {
	const [questions, setQuestions] = useState([])
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [correctPoints, setCorrectPoints] = useState(0)
	const [incorrectPoints, setIncorrectPoints] = useState(0)

	return (
		<div className={style.gridDiv}>
			<Context.Provider
				value={{
					setNextQuestion: () => setCurrentQuestion(currentQuestion + 1),
					correctPoints: correctPoints,
					setCorrectPoints: () => setCorrectPoints(correctPoints + 1),
					incorrectPoints: incorrectPoints,
					setIncorrectPoints: () => setIncorrectPoints(incorrectPoints + 1),
				}}
			>
				<div className={style.alignmentDiv}>
					{questions.length == 0 && <Greeting></Greeting>}
					{questions.length == 0 && (
						<GameOptions setQuestions={setQuestions}></GameOptions>
					)}
				
				</div>
				<div className={style.questionsDiv}>
				{questions.length != 0 && (
						<QuestionsDisplay
							questions={questions}
							currentQuestion={currentQuestion}
							setCurrentQuestion={setCurrentQuestion}
							maxQuestions={questions.length}
							correctPoints={correctPoints}
							incorrectPoints={incorrectPoints}
						></QuestionsDisplay>
					)}
				</div>
				{questions.length != 0 && (
					<TriviaTracker
						currentQuestion={currentQuestion}
						maxQuestions={questions.length}
					></TriviaTracker>
				)}
			</Context.Provider>
		</div>
	)
}

export default App
