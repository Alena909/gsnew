import styled from "styled-components";

export const CardContainer = styled.div`
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 300;
  display: flex;

  height: 180px;
  width: 180px;
  border-radius: 100px;
  background: rgb(0, 159, 255);
  background: linear-gradient(
    121deg,
    rgba(255, 255, 255, 0) 13%,
    rgba(0, 159, 255, 1) 100%
  );
  transition: all 500ms ease-in;
  transition-delay: 1s;
  margin: auto;
  margin-top: 100px;
  --margin-top: 100px;
  margin-bottom: 100px;

  @media only screen and (min-width: 768px) {
    :hover {
      width: 500px;
      border-radius: 100px 10px 100px 100px;
      transition: all 1s ease-out;
    }
  }
`;

export const SlidingContainer = styled.div``;

export const SlidingImage = styled.img`
  height: 180px;
  width: 180px;
  transition: none;
  display: float;
  position: relative;
  border: 3px solid grey;
  border-radius: 5px;
  box-shadow: 2px 2px 10px grey;
`;
// .infocardContainer * {
//     font-family: 'Fira Sans Condensed', sans-serif;
//     font-weight: 300;
//   }
//   h2 {
//     font-weight: 600; font-style: italic; font-family: "Fira Sans Condensed", sans-serif;
//   }
//   header {
//     height: 2em;
//     background-color: #111122;
//     margin: 0 0 0 0;
//     padding: auto;
//     font-size: 2em;
//     text-align: center;
//     line-height: 2em;
//     color: white;
//   }
//   a {
//     text-decoration: none;
//   }
//   a:visited {
//     color: #555566;
//   }
//   a:hover {
//     text-decoration: underline;
//   }
//   .infocardContainer {
//     display: flex;
//     height: 200px;
//     width: 200px;
//     border-radius: 100px;
//     background: rgb(0,159,255);
//     background: linear-gradient(121deg, rgba(255,255,255,0) 13%, rgba(0,159,255,1) 100%);
//     transition: all 500ms ease-in;
//     transition-delay: 1s;
//     margin: auto;
//     margin-top: 100px;
//     --margin-top: 100px;
//   }
//   .infocardContainer:hover {
//     width: 500px;
//     border-radius: 100px 10px 100px 100px;
//     transition: all 1s ease-out;
//   }

//   .infocardContainer div {
//     text-color: white;
//     flex-shrink: 1;
//     width: 100%;
//     --background-color: green;
//   }
//   .infocardContainer div * {
//     display: flex;
//     --flex: inherit;
//     overflow: hidden;
//     text-overflow: hidden;
//     --background-color: yellow;
//     color: white;
//     white-space: nowrap;
//     width: 0;
//     height: auto;
//     transition: all 450ms ease-in;
//     transition-delay: 1s;
//   }
//   .infocardContainer:hover div *{
//     --background-color: purple;
//     display: flex;
//     visibility: visible;
//     transition: all 1s ease-out;
//     transition-delay: 500ms;
//     width: 100%;
//     height: auto;
//   }

//   .infocardContainer #main, .infocardContainer #main img{
//     --background-color: red;
//     height: 200px;
//     width: 200px;
//     padding-right: 10px;
//     border-radius: 100%;
//     flex-shrink: 0;
//     object-fit: cover;
//   }
//   .infocardContainer #main img{
//     height: 180px;
//     width: 180px;
//     transition: none;
//     display: float;
//     position: relative;
//     border: 10px solid white;
//     margin: 0 0 0 0; padding: 0 0 0 0;
//   }
//   .infocardContainer #textbois {
//     position: relative;
//   }
//   .infocardContainer #textbois #hotlinks {
//     max-width: 60%;
//     max-height: 30px;

//     --background-color: white;
//     position:absolute;
//     bottom: 5px;
//     display: flex;
//     justify-content: space-between;
//     border-radius: 13px;
//   }
//   .infocardContainer #textbois #hotlinks * {
//     background-color: white;
//     max-width: 30px;
//     --margin: 0 1px 0 1px;
//     border-radius: 25px;
//   }
//   /*TODO: animate copy main transition style for info*/
//   .infocardContainer #textbois #hotlinks *:hover {

//   }
