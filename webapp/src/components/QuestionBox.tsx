import FormattedText from "./FormattedText";

interface QuestionBoxType {
  activityName: string;
  roundTitle: string | null;
  stimulus: string;
  setAnswer: (answer: boolean) => void;
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
      <div className="bg-white flex flex-col m-auto w-lg border border-gray-200 pt-6">
        <div className="text-sm mb-8 font-bold pl-6">
          {activityName.toUpperCase()} {roundTitle && "ROUND HERE"}
        </div>

        <div className="text-2xl mb-8 font-bold pl-6">Q{order}.</div>

        <FormattedText
          className="bg-skyblue w-full border-y py-5 pl-6 border-gray-300"
          text={stimulus}
        />

        <div className="flex gap-24 self-center py-6">
          <button
            className="px-8 py-2 text-xs font-bold"
            onClick={() => {
              setAnswer(true);
            }}
          >
            CORRECT
          </button>
          <button
            className="px-8 py-2 text-xs font-bold"
            onClick={() => {
              setAnswer(false);
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
