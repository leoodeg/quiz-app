import React from "react";

const FormattedText = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  const parts = text.split("*");
  return (
    <span className={className}>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-bold">
            {part}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};

export default FormattedText;
