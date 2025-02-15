import { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import { GameResponse } from "../types/data";

const Home = () => {
  const [data, setData] = useState<GameResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

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

  return (
    <div className="bg-white flex flex-col m-auto items-center w-xs border border-gray-200">
      <h3 className="my-12">CAE</h3>
      <h1 className="font-bold mb-10">Error Find</h1>

      <ul className="w-full flex flex-col items-center text-center divide-y divide-gray-300 border-y border-gray-300">
        <li className="bg-skyblue w-full py-2">ACTIVITY ONE</li>
        <li className="bg-skyblue w-full py-2">ACTIVITY TWO</li>
        <li className="bg-skyblue w-full py-2">ACTIVITY THREE</li>
        <li className="bg-skyblue w-full py-2">ACTIVITY FOUR</li>
        <li className="bg-skyblue w-full py-2">ACTIVITY FIVE</li>
      </ul>

      <div className="py-8">Results</div>
    </div>
  );
};

export default Home;
