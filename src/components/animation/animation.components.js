import Lottie from "lottie-react";

const Animation = ({ animationLottie, width = 300, height = 300 }) => {
  return <Lottie animationData={animationLottie} style={{ width, height }} />;
};

export default Animation;
