import { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import { GameResponse, Activity } from "../types/data";
import { useNavigate } from "react-router-dom";

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

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleActivityClick = (activity: Activity) => {
    navigate("/question", { state: { activity } });
  };

  return (
    data && (
      <div className="bg-white flex flex-col m-auto items-center w-xs border border-gray-200">
        <h3 className="my-12">CAE</h3>
        <h1 className="font-bold mb-10">{data.name}</h1>

        <ul className="w-full flex flex-col items-center text-center divide-y divide-gray-300 border-y border-gray-300">
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

        <div className="py-8">Results</div>
      </div>
    )
  );
};

export default Home;
