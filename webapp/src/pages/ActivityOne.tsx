import { useState, useEffect } from "react";
import {
  //  useNavigate,
  useLocation,
} from "react-router-dom";
import { type ActivityOne } from "../types/data";
import { ACTIVITY_ONE } from "../constants/common";
import QuestionBox from "../components/QuestionBox";
import { ResultsState, QuestionResult } from "../types/result";

const ActivityOne = () => {
  const [currentActivity, setCurrentActivity] = useState<ActivityOne | null>(
    null
  );
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [resultsData, setResultsData] = useState<ResultsState>({
    activityName: ACTIVITY_ONE,
    rounds: [],
  });

  // const navigate = useNavigate();
  const location = useLocation();

  const addNewRound = () => {
    setResultsData((prevState) => ({
      ...prevState,
      rounds: [
        ...prevState.rounds,
        { roundNumber: prevState.rounds.length + 1, results: [] },
      ],
    }));
  };

  const addResultToLatestRound = (newResult: QuestionResult) => {
    setResultsData((prevState) => {
      const updatedRounds = [...prevState.rounds];
      if (updatedRounds.length > 0) {
        updatedRounds[updatedRounds.length - 1].results.push(newResult);
      }
      return { ...prevState, rounds: updatedRounds };
    });
  };

  useEffect(() => {
    if (location.state?.activity) {
      setCurrentActivity(location.state.activity);
      addNewRound();
    }
  }, [location]);

  //   const handleAnswer = () => {
  //     // TODO: Save answer logic here
  //     navigate("/results", {
  //       state: {
  //         activity: currentActivity,
  //         answers: [selectedAnswer],
  //       },
  //     });
  //   };

  console.log(resultsData);

  if (!currentActivity) return <div>Loading...</div>;

  const handleSetAnswer = (answer: string) => {
    addResultToLatestRound({ order: 1, result: answer });
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <>
      <QuestionBox
        activityName={currentActivity.activity_name}
        roundTitle={null}
        stimulus={currentActivity.questions[questionNumber].stimulus}
        setAnswer={handleSetAnswer}
        order={currentActivity.questions[questionNumber].order}
      />
    </>
  );
};

export default ActivityOne;
