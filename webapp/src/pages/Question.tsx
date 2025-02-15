import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { Activity, Question as QuestionType, Round } from "../types/data";

const Question = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get activity data from location state
    if (location.state?.activity) {
      setCurrentActivity(location.state.activity);
    }
  }, [location]);

  const handleAnswer = () => {
    // TODO: Save answer logic here
    navigate("/results", {
      state: {
        activity: currentActivity,
        answers: [selectedAnswer],
      },
    });
  };

  const isQuestion = (
    question: QuestionType | Round
  ): question is QuestionType => {
    return "stimulus" in question;
  };

  if (!currentActivity) return <div>Loading...</div>;

  return (
    <div className="bg-white flex flex-col m-auto items-center w-xs border border-gray-200 p-6">
      <div className="text-sm mb-8">{currentActivity.activity_name}</div>

      <div className="text-2xl mb-8">Q1.</div>

      <div className="text-center mb-12">
        {isQuestion(currentActivity.questions[0]) ? (
          currentActivity.questions[0].stimulus
        ) : (
          <>fdsfs</>
        )}
      </div>

      <div className="flex gap-4">
        <button
          className={`px-8 py-2 ${
            selectedAnswer === "correct"
              ? "bg-coralblue text-white"
              : "bg-skyblue"
          }`}
          onClick={() => setSelectedAnswer("correct")}
        >
          CORRECT
        </button>
        <button
          className={`px-8 py-2 ${
            selectedAnswer === "incorrect"
              ? "bg-coralblue text-white"
              : "bg-skyblue"
          }`}
          onClick={() => setSelectedAnswer("incorrect")}
        >
          INCORRECT
        </button>
      </div>

      {selectedAnswer && (
        <button
          className="mt-8 bg-coralblue text-white px-8 py-2"
          onClick={handleAnswer}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Question;
