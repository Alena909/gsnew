import styled from "styled-components";

export const GalleryContainer = styled.div`
  //background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 65vmin;
  height: 80vmin;
  margin: 0 auto;
`;

export const ImageCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 5px 3px 15px grey;
  transition: transform 0.35s ease-out;
  transform: translate(${(props) => props.x}, ${(props) => props.y}) scale(0.35)
    rotate(${(props) => props.angle});
  will-change: transform;

  :hover {
    transform: scale(1) rotate(0deg);
    z-index: 1;

    :before {
      opacity: 1;
    }
  }
  :before {
    content: "";
    display: block;
    width: 90%;
    height: 80%;
    margin: 5%;
    background: url(${(props) => props.bg}) center center no-repeat;
    background-size: cover;
    box-shadow: inset 0 0 5px rgba(#222, 0.35);
    border-radius: 2px;
    filter: sepia(0.2) brightness(0.9) contrast(1.2);
    transition: opacity 0.35s ease-out;
    opacity: 0.5;
    will-change: opacity;
  }
  &:after {
    display: block;
    content: "${(props) => props.caption}";
    font-weight: 500;
    color: #555;
    font-size: 3vmin;
    opacity: 0.75;
    text-align: center;
  }
`;
