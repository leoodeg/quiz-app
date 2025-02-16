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
    <div className="container">
      <div className="text-subheading pl-6 mb-8 ">
        {activityName.toUpperCase()}{" "}
        {roundTitle ? `/ ${roundTitle?.toUpperCase()}` : ""}
      </div>

      <div className="text-heading pl-6 mb-8">Q{order}.</div>

      <FormattedText
        className="bg-skyblue w-full border-y py-5 pl-6 border-gray-300"
        text={stimulus}
      />

      <div className="flex gap-24 self-center py-6">
        <button className="btn" onClick={() => setAnswer(true)}>
          CORRECT
        </button>
        <button className="btn" onClick={() => setAnswer(false)}>
          INCORRECT
        </button>
      </div>
    </div>
  );
};

export default QuestionBox;
