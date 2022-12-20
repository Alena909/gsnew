import { CardContainer, SlidingImage } from "./sliding-card.styles";
import college from "../../assets/images/thumbnails/cafe_t.jpg";
const SlidingCard = () => {
  return (
    <CardContainer>
      <div id="main">
        <SlidingImage src={college} alt="coffee"></SlidingImage>
      </div>
      <div id="textbois">
        <h2>TBD</h2>

        <p>Work in progress</p>
      </div>
    </CardContainer>
  );
};
export default SlidingCard;
