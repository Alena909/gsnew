import { HomeContainer } from "./home.styles";
import Animation from "../../components/animation/animation.components";
import floralLottie from "../../assets/lotties/57197-floral-border.json";

const Home = () => {
  const viewport = window.visualViewport;
  const viewDementions =
    viewport.width < 450 ? 250 : viewport.width < 760 ? 400 : 500;

  return (
    <HomeContainer>
      <Animation
        animationLottie={floralLottie}
        width={viewDementions}
        height={viewDementions}
        style={{ position: "realtive", scale: "1.3", zindex: 5 }}
      />
      <h1
        style={{
          zIndex: 0,
          position: "absolute",
        }}
      >
        Welcome
      </h1>
    </HomeContainer>
  );
};

export default Home;
