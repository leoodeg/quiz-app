import { useNavigate, useLocation } from "react-router-dom";
import { Activity } from "../types/data";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activity = location.state?.activity as Activity;

  if (!activity) return <div>No results available</div>;

  console.log(location.state?.answers);

  return (
    <div className="bg-white flex flex-col m-auto items-center w-xs border border-gray-200 p-6">
      <div className="text-sm mb-8">{activity.activity_name}</div>

      <div className="text-2xl mb-8">Results</div>

      <div className="w-full space-y-4 mb-8">
        {activity.questions.map((question) => (
          <div key={question.order} className="flex justify-between">
            <span>Q{question.order}</span>
            <span className="text-coralblue">
              {location.state?.answers?.[question.order - 1]?.toUpperCase() ||
                "NOT ANSWERED"}
            </span>
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
