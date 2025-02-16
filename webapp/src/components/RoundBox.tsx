interface RoundBoxType {
  activityName: string;
  roundTitle: string;
}

const RoundBox = ({ activityName, roundTitle }: RoundBoxType) => {
  return (
    <>
      <div className="bg-white flex flex-col m-auto w-lg border border-gray-200 pt-6 h-[288px]">
        <div className="text-sm mb-8 font-bold pl-6">
          {activityName.toUpperCase()}
        </div>

        <div className="text-2xl mb-8 font-bold pl-6">{roundTitle}</div>
      </div>
    </>
  );
};

export default RoundBox;
