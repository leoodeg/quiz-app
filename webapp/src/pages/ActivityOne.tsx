import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
    rounds: [{ roundNumber: 1, results: [] }],
  });

  const location = useLocation();

  useEffect(() => {
    if (location.state?.activity) {
      setCurrentActivity(location.state.activity);
      setTotalNoQuestions(location.state.activity.questions.length);
    }
  }, [location]);

  const addResultToLatestRound = (newResult: QuestionResult) => {
    setResultsData((prevState) => {
      const updatedRounds = [...prevState.rounds];
      if (updatedRounds.length > 0) {
        updatedRounds[updatedRounds.length - 1].results.push(newResult);
      }
      return { ...prevState, rounds: updatedRounds };
    });
  };

  /* Because the principle for this implmentation
  is a one fetch API, that is only located in the home page to initialize */
  if (!currentActivity)
    return (
      <div className="flex-center w-full">
        Please go to homepage to register..
      </div>
    );

  const handleSetAnswer = (answer: boolean) => {
    const newQuestionIndex = questionIndex + 1;
    const isCorrect =
      currentActivity.questions[questionIndex].is_correct === answer;

    addResultToLatestRound({
      order: newQuestionIndex,
      isAnswerCorrect: isCorrect,
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
