import { useState } from "react";
import Quiz from "./Quiz";
import "../assets/css/styles.css";
import MainContextProvider from "./context/MainContext";

function App() {
	return (
		<MainContextProvider>
			<Quiz />
		</MainContextProvider>
	);
}

export default App;
