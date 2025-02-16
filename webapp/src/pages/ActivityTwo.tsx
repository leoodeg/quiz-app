import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { type ActivityTwo, Round } from "../types/data";
import { ACTIVITY_TWO } from "../constants/common";
import QuestionBox from "../components/QuestionBox";
import Results from "../components/Results";
import { ResultsState, QuestionResult } from "../types/result";

const ActivityTwo = () => {
  const [currentActivity, setCurrentActivity] = useState<ActivityTwo | null>(
    null
  );

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [totalNoQuestions, setTotalNoQuestions] = useState<number>(0);
  const [totalNoRounds, setTotalNoRounds] = useState<number>(0);
  const [isActivityDone, setIsActivityDone] = useState<boolean>(false);
  const [resultsData, setResultsData] = useState<ResultsState>({
    activityName: ACTIVITY_TWO,
    rounds: [{ roundNumber: 1, results: [] }],
  });

  const [roundIndex, setRoundIndex] = useState<number>(0);
  const [currentRound, setCurrentRound] = useState<Round | null>(null);
  const [showRound, setShowRound] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.activity) {
      setCurrentActivity(location.state.activity);
      setTotalNoQuestions(
        location.state.activity.questions[0].questions.length
      );
      displayRound();
      setTotalNoRounds(location.state.activity.questions.length);
      setCurrentRound(location.state.activity.questions[0]);
    }
  }, [location]);

  const addNewRoundToResult = () => {
    setResultsData((prevState) => ({
      ...prevState,
      rounds: [
        ...prevState.rounds,
        { roundNumber: prevState.rounds.length + 1, results: [] },
      ],
    }));
  };

  const displayRound = () => {
    setShowRound(true);
    setTimeout(() => {
      setShowRound(false);
    }, 1000);
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

  if (!currentActivity || !currentRound) return <div>Loading...</div>;

  const handleSetAnswer = (answer: boolean) => {
    const newQuestionIndex = questionIndex + 1;
    addResultToLatestRound({
      order: newQuestionIndex,
      isAnswerCorrect:
        currentRound.questions[questionIndex].is_correct === answer,
    });
    setQuestionIndex(newQuestionIndex);

    if (newQuestionIndex === totalNoQuestions) {
      const newRoundIndex = roundIndex + 1;
      if (newRoundIndex === totalNoRounds) {
        setIsActivityDone(true);
      } else {
        // TODO: make this better

        addNewRoundToResult();
        displayRound();
        setRoundIndex(newRoundIndex);
        setTotalNoQuestions(currentRound.questions.length);
        setCurrentRound(currentActivity.questions[newRoundIndex]);
        setQuestionIndex(0);
      }
    }
  };

  return (
    <>
      {showRound ? (
        <>HI</>
      ) : isActivityDone ? (
        <Results resultsData={resultsData} />
      ) : (
        <QuestionBox
          activityName={currentActivity.activity_name}
          roundTitle={currentRound.round_title}
          stimulus={currentRound.questions[questionIndex].stimulus}
          setAnswer={handleSetAnswer}
          order={currentRound.questions[questionIndex].order}
        />
      )}
    </>
  );
};

export default ActivityTwo;
