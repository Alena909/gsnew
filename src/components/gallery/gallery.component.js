import { ImageCard, GalleryContainer } from "./gallery.styles";
import { imageLayouts } from "./imageLayouts";
const Gallery = ({ images, date }) => {
  return (
    <GalleryContainer>
      {images.map((eImage, idx) => (
        <ImageCard
          key={idx}
          bg={eImage.name}
          caption={date}
          angle={imageLayouts[idx].angle}
          x={imageLayouts[idx].x}
          y={imageLayouts[idx].y}
          size={eImage.size}
        />
      ))}
    </GalleryContainer>
  );
};
export default Gallery;
