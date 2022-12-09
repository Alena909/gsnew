import { LottieContainer } from "./animation.styles";

const Animation = ({ animationLottie, width = 300, height = 300 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <LottieContainer options={defaultOptions} height={height} width={width} />
  );
};

export default Animation;
