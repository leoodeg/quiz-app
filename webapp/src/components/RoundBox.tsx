interface RoundBoxType {
  activityName: string;
  roundTitle: string;
}

const RoundBox = ({ activityName, roundTitle }: RoundBoxType) => {
  return (
    <>
      <div className="container h-[288px]">
        <div className="text-subheading">{activityName.toUpperCase()}</div>

        <div className="text-heading">{roundTitle}</div>
      </div>
    </>
  );
};

export default RoundBox;
