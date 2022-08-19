import { useState } from "react";
import Quiz from "./Quiz";
import "../assets/css/styles.css";
function App() {
	const [quizStarted, setQuizStarted] = useState(false);
	return (
		<>
			<Quiz quizStarted={quizStarted} setQuizStarted={setQuizStarted}/>
		</>
	);
}

export default App;
