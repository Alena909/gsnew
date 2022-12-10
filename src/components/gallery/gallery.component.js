import college from "../../assets/images/college.jpg";
import amazon from "../../assets/images/amazon.jpg";
import concert from "../../assets/images/concert.jpg";
import ericsson from "../../assets/images/ericsson.jpg";

import { ImageCard, GalleryContainer } from "./gallery.styles";
const imageLayout = [
  {
    angle: "10deg",
    x: "5%",
    y: "15%",
  },
  {
    angle: "-10deg",
    x: "-10%",
    y: "-20%",
  },
  {
    angle: "-20deg",
    x: "-20%",
    y: "5%",
  },
  {
    angle: "4deg",
    x: "12%",
    y: "-5%",
  },
];
const Gallery = () => {
  return (
    <GalleryContainer>
      <ImageCard bg={college} caption="college" angle="10deg" x="5%" y="15%" />
      <ImageCard
        bg={amazon}
        caption="amazon"
        angle="-10deg"
        x="-10%"
        y="-20%"
      />
      <ImageCard
        bg={concert}
        caption="concert"
        angle="-20deg"
        x="-20%"
        y="5%"
      />
      <ImageCard
        bg={ericsson}
        caption="ericsson"
        angle="4deg"
        x="12%"
        y="-5%"
      />
    </GalleryContainer>
  );
};
export default Gallery;
