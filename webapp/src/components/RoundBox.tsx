interface RoundBoxType {
  activityName: string;
  roundTitle: string;
}

const RoundBox = ({ activityName, roundTitle }: RoundBoxType) => {
  return (
    <>
      <div className="container h-[288px]">
        <div className="text-subheading pl-6 mb-8">
          {activityName.toUpperCase()}
        </div>

        <div className="text-heading pl-6 mb-8">{roundTitle}</div>
      </div>
    </>
  );
};

export default RoundBox;
