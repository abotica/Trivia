import { useRef, useState } from 'react'
import style from './GameOptions.module.css'

function GameOptions({ setQuestions }) {
	const [numOfQuestions, setNumOfQuestions] = useState(5)
	const [category, setCategory] = useState('any')
	const [difficulty, setDifficulty] = useState('any')
	const [questionType, setQuestionType] = useState('any')
	const url = useRef('https://opentdb.com/api.php?amount=')

	function handleSubmit(event) {
		event.preventDefault()
		url.current = 'https://opentdb.com/api.php?amount=' + numOfQuestions

		if (category !== 'any') {
			url.current = url.current + '&category=' + category.toString()
		}

		if (difficulty !== 'any') {
			url.current = url.current + '&difficulty=' + difficulty
		}

		if (questionType !== 'any') {
			url.current = url.current + '&type=' + questionType
		}

		fetch(url.current)
			.then((result) => result.json())
			.then((data) => {
				console.log(data.results)
				setQuestions(data.results)
			})
	}

	return (
		<div className={style.mainDiv}>
			<form
				className={style.gameOptionsForm}
				onSubmit={handleSubmit}
			>
				<label className={style.label} htmlFor="trivia_amount">Number of Questions:</label>
				<input
					type="number"
					name="trivia_amount"
					id="trivia_amount"
					min="1"
					max="50"
					className={style.input}
					onChange={(event) => setNumOfQuestions(event.target.value)}
					value={numOfQuestions}
				></input>
				<br />
				<label className={style.label} htmlFor="trivia_category">Select Category:</label>
				<select
					name="trivia_category"
					id="trivia_category"
					className={style.input}
					onChange={(event) => setCategory(event.target.value)}
					value={category}
					
				>
					<option value="any">Any Category</option>
					<option value="9">General Knowledge</option>
					<option value="10">Entertainment: Books</option>
					<option value="11">Entertainment: Film</option>
					<option value="12">Entertainment: Music</option>
					<option value="13">Entertainment: Musicals &amp; Theatres</option>
					<option value="14">Entertainment: Television</option>
					<option value="15">Entertainment: Video Games</option>
					<option value="16">Entertainment: Board Games</option>
					<option value="17">Science &amp; Nature</option>
					<option value="18">Science: Computers</option>
					<option value="19">Science: Mathematics</option>
					<option value="20">Mythology</option>
					<option value="21">Sports</option>
					<option value="22">Geography</option>
					<option value="23">History</option>
					<option value="24">Politics</option>
					<option value="25">Art</option>
					<option value="26">Celebrities</option>
					<option value="27">Animals</option>
					<option value="28">Vehicles</option>
					<option value="29">Entertainment: Comics</option>
					<option value="30">Science: Gadgets</option>
					<option value="31">Entertainment: Japanese Anime &amp; Manga</option>
					<option value="32">Entertainment: Cartoon &amp; Animations</option>
				</select>
				<br />
				<label className={style.label} htmlFor="trivia_difficulty">Select Difficulty:</label>
				<select
					name="trivia_difficulty"
					className={style.input}
					onChange={(event) => setDifficulty(event.target.value)}
					value={difficulty}
					id="trivia_difficulty"
				>
					<option value="any">Any Difficulty</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
				<br />
				<label className={style.label} htmlFor="trivia_type">Select Type:</label>
				<select
					name="trivia_type"
					className={style.input}
					onChange={(event) => setQuestionType(event.target.value)}
					value={questionType}
					id="trivia_type"
				>
					&gt;
					<option value="any">Any Type</option>
					<option value="multiple">Multiple Choice</option>
					<option value="boolean">True / False</option>
				</select>
				<br />
				<div className={style.buttonDiv}>
				<button className={style.startButton}>START TRIVIA!</button>
				</div>
			</form>
		</div>
	)
}

export default GameOptions
