import Lottie from "react-lottie";

const Animation = ({ animationLottie, width = 300, height = 300 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default Animation;
