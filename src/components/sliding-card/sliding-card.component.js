import { CardContainer, SlidingImage } from "./sliding-card.styles";
import coffee from "../../assets/images/coffee.jpg";
const SlidingCard = () => {
  return (
    <CardContainer>
      <div id="main">
        <SlidingImage src={coffee} alt="coffee"></SlidingImage>
      </div>
      <div id="textbois">
        <h2>TBD</h2>

        <p>Work in progress</p>
      </div>
    </CardContainer>
  );
};
export default SlidingCard;
