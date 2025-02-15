import { useState, useEffect } from "react";
import {
  //  useNavigate,
  useLocation,
} from "react-router-dom";
import { type ActivityOne } from "../types/data";
import { ACTIVITY_ONE } from "../constants/common";
import QuestionBox from "../components/QuestionBox";
import Results from "../components/Results";
import { ResultsState, QuestionResult } from "../types/result";

const ActivityOne = () => {
  const [currentActivity, setCurrentActivity] = useState<ActivityOne | null>(
    null
  );
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [totalNoQuestions, setTotalNoQuestions] = useState<number>(0);
  const [isActivityDone, setIsActivityDone] = useState<boolean>(false);
  const [resultsData, setResultsData] = useState<ResultsState>({
    activityName: ACTIVITY_ONE,
    rounds: [],
  });

  // const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.activity) {
      setCurrentActivity(location.state.activity);
      setTotalNoQuestions(location.state.activity.questions.length);
      addNewRound();
    }
  }, [location]);

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

  //   const handleAnswer = () => {
  //     // TODO: Save answer logic here
  //     navigate("/results", {
  //       state: {
  //         activity: currentActivity,
  //         answers: [selectedAnswer],
  //       },
  //     });
  //   };

  if (!currentActivity) return <div>Loading...</div>;

  const handleSetAnswer = (answer: boolean) => {
    const newQuestionIndex = questionIndex + 1;
    addResultToLatestRound({
      order: newQuestionIndex,
      isAnswerCorrect:
        currentActivity.questions[questionIndex].is_correct === answer,
    });
    setQuestionIndex(newQuestionIndex);

    if (newQuestionIndex === totalNoQuestions) {
      setIsActivityDone(true);
    }
  };

  return (
    <>
      {isActivityDone ? (
        <Results resultsData={resultsData} />
      ) : (
        <QuestionBox
          activityName={currentActivity.activity_name}
          roundTitle={null}
          stimulus={currentActivity.questions[questionIndex].stimulus}
          setAnswer={handleSetAnswer}
          order={currentActivity.questions[questionIndex].order}
        />
      )}
    </>
  );
};

export default ActivityOne;
