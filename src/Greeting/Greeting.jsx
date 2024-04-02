import style from "./Greeting.module.css"

function Greeting(){
    return(
        <div className={style.mainDiv}>
            <h1>Welcome to Trivia!</h1>
            <p>Please choose your game options...</p>
        </div>
    )
}

export default Greeting