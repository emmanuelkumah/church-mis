import React from "react";
import { useNavigate } from "react-router";
import { RiArrowGoBackFill } from "react-icons/ri";

type GoBackProps = {
  className?: string;
};
const GoBack: React.FC<GoBackProps> = ({ className }) => {
  let navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button onClick={handleGoBack} className={`flex items-center ${className}`}>
      <RiArrowGoBackFill />
    </button>
  );
};

export default GoBack;
