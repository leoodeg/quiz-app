interface QuestionBoxType {
  activityName: string;
  roundTitle: string | null;
  stimulus: string;
  setAnswer: (answer: string) => void;
  order: number;
}

const QuestionBox = ({
  activityName,
  roundTitle,
  stimulus,
  setAnswer,
  order,
}: QuestionBoxType) => {
  return (
    <>
      <div className="bg-white flex flex-col m-auto items-center w-xs border border-gray-200 p-6">
        <div className="text-sm mb-8">
          {activityName} | {roundTitle}
        </div>

        <div className="text-2xl mb-8">Q{order}.</div>

        <div className="text-center mb-12">{stimulus}</div>

        <div className="flex gap-4">
          <button
            className="px-8 py-2"
            onClick={() => {
              setAnswer("correct");
            }}
          >
            CORRECT
          </button>
          <button
            className="px-8 py-"
            onClick={() => {
              setAnswer("incorrect");
            }}
          >
            INCORRECT
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionBox;
