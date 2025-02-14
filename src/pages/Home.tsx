// import { useEffect, useState } from "react";

const Home = () => {
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetch("https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json")
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setData(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error);
  //         setLoading(false);
  //       });
  //   }, []);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;

  //   console.log(data);

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
