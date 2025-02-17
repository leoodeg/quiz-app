import { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import { GameResponse, ActivityOne, ActivityTwo } from "../types/data";
import { useNavigate } from "react-router-dom";
import { ACTIVITY_ONE, ACTIVITY_TWO } from "../constants/common";

const Home = () => {
  const [data, setData] = useState<GameResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error("An error occurred")
        );
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div className="flex-center w-full">Loading...</div>;
  if (error) return <p>Error: {error.message}</p>;

  const handleActivityClick = (activity: ActivityOne | ActivityTwo) => {
    if (activity.activity_name === ACTIVITY_ONE) {
      navigate("/activityone", { state: { activity } });
    } else if (activity.activity_name === ACTIVITY_TWO) {
      navigate("/activitytwo", { state: { activity } });
    }
  };

  return (
    data && (
      <div className="flex-center bg-white flex-col m-auto w-xs border border-gray-200">
        <h3 className="my-12">CAE</h3>
        <h2 className="title">{data.name}</h2>

        <ul className=" flex-center w-full flex-col text-center divide-y divide-gray-300 border-y border-gray-300">
          {data.activities.map((activity) => (
            <li
              key={activity.order}
              className="bg-skyblue w-full py-2 cursor-pointer"
              onClick={() => handleActivityClick(activity)}
            >
              {activity.activity_name}
            </li>
          ))}
        </ul>

        <div className="py-8 text-gray-300">Results</div>
      </div>
    )
  );
};

export default Home;
