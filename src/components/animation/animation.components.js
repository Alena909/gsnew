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
    <div>
      <LottieContainer options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default Animation;
