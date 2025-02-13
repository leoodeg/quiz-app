const Home = () => {
  return (
    <div className="bg-white flex flex-col m-auto items-center w-xs">
      <h1 className="text-coralblue font-bold my-10">Error Find</h1>

      <ul className="text-coralblue w-full flex flex-col items-center text-center">
        <li className="bg-skyblue w-full py-2 border-t border-x border-gray-200">
          ACTIVITY ONE
        </li>
        <li className="bg-skyblue w-full py-2 border-t border-x border-gray-200">
          ACTIVITY TWO
        </li>
        <li className="bg-skyblue w-full py-2 border-t border-x border-gray-200">
          ACTIVITY THREE
        </li>
        <li className="bg-skyblue w-full py-2 border-t border-x border-gray-200">
          ACTIVITY FOUR
        </li>
        <li className="bg-skyblue w-full py-2 border-t border-x border-gray-200">
          ACTIVITY FIVE
        </li>
      </ul>

      <button>Result</button>
    </div>
  );
};

export default Home;
