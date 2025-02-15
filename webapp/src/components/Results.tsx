import { useNavigate } from "react-router-dom";
import { ResultsState } from "../types/result";

const Results = ({ resultsData }: { resultsData: ResultsState }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col m-auto items-center w-xs border border-gray-200 p-6">
      <div className="text-sm mb-8">{resultsData.activityName}</div>

      <div className="text-2xl mb-8">Results</div>

      <div className="w-full space-y-4 mb-8">
        {resultsData.rounds.map((round) => (
          <div key={round.roundNumber}>
            {round.results.map((result) => (
              <div key={result.order} className="flex justify-between">
                <span>Q{result.order}</span>
                <span className="text-coralblue">
                  {result.isAnswerCorrect ? "CORRECT" : "FALSE"}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button className="bg-skyblue px-8 py-2" onClick={() => navigate("/")}>
        HOME
      </button>
    </div>
  );
};

export default Results;
