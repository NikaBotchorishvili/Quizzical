import React, { useContext } from "react";
// 	Components
import StartQuiz from "./StartQuiz";
import Questions from "./Questions";
import { PacmanLoader } from "react-spinners";

//	Contexts

import { MainContext } from "./context/MainContext";
//Images
import topBlob from "../assets/images/top-blob.png";
import bottomBlob from "../assets/images/bottom-blob.png";

const override = {
	margin: "0 auto",
  };
  
export default function Quiz(props) {
	const { quizStarted, isLoading } = useContext(MainContext);
	return (
		<div className="container">
			<div className="top">
				<img src={topBlob} />
			</div>

			<div className="middle">
				{!quizStarted ? <StartQuiz /> : !isLoading ? <Questions />: <PacmanLoader color={"#9013FE"} cssOverride={override} loading={isLoading} size={50} />}
			</div>

			<div className="bottom">
				<img src={bottomBlob} />
			</div>
		</div>
	);
}
