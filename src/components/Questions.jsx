import React, {useEffect} from "react";

export default function Questions() {

    useEffect(() =>{
        fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple")
            .then((res) => res.json())
            .then((data) => console.log(data))
    })


	return (
		<div className="questions">
			<div className="questions-container">
				<div className="question-container">
					<div className="question">
						<h1>How would one say goodbye in Spanish?</h1>
					</div>

					<div className="possible-answers">
						<button className="answer">Adiós</button>
						<button className="answer">Hola</button>
						<button className="answer">Au Revoir</button>
						<button className="answer">Salir</button>
					</div>
				</div>
				<div className="question-container">
					<div className="question">
						<h1>How would one say goodbye in Spanish?</h1>
					</div>

					<div className="possible-answers">
						<button className="answer">Adiós</button>
						<button className="answer">Hola</button>
						<button className="answer">Au Revoir</button>
						<button className="answer">Salir</button>
					</div>
				</div>
				<div className="question-container">
					<div className="question">
						<h1>How would one say goodbye in Spanish?</h1>
					</div>

					<div className="possible-answers">
						<button className="answer">Adiós</button>
						<button className="answer">Hola</button>
						<button className="answer">Au Revoir</button>
						<button className="answer">Salir</button>
					</div>
				</div>
				<div className="question-container">
					<div className="question">
						<h1>How would one say goodbye in Spanish?</h1>
					</div>

					<div className="possible-answers">
						<button className="answer">Adiós</button>
						<button className="answer">Hola</button>
						<button className="answer">Au Revoir</button>
						<button className="answer">Salir</button>
					</div>
				</div>
			</div>

            <button className="btn">Check Answers</button>
		</div>
	);
}
