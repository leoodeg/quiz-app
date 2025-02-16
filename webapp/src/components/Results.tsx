import { useNavigate } from "react-router-dom";
import { ResultsState } from "../types/result";

const Results = ({ resultsData }: { resultsData: ResultsState }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col m-auto items-center w-xs border border-gray-200 pt-6">
      <div className="text-sm mb-12 font-bold">
        {resultsData.activityName.toLocaleUpperCase()}
      </div>

      <h2 className="text-4xl mb-12 font-bold">Results</h2>

      <div className="w-full flex flex-col items-center text-center divide-y divide-gray-300 border-y border-gray-300">
        {resultsData.rounds.map((round) => (
          <div
            key={round.roundNumber}
            className="w-full divide-y divide-gray-300"
          >
            {round.results.map((result) => (
              <div
                key={result.order}
                className="flex px-6 justify-between bg-skyblue w-full py-3 cursor-pointer"
              >
                <span>Q{result.order}</span>
                <span className="text-coralblue font-bold">
                  {result.isAnswerCorrect ? "CORRECT" : "FALSE"}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        className="bg-skyblue px-8 py-8 text-sm"
        onClick={() => navigate("/")}
      >
        HOME
      </button>
    </div>
  );
};

export default Results;
