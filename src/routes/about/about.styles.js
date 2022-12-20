import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AboutImage = styled.img`
  margin-top: 30px;
  width: 40%;
  height: auto;
  border: 5px solid green;
  border-radius: 5px;
  box-shadow: 5px 2px 15px grey;
`;

export const Circle = styled.div`
  width: 20rem;
  height: 20rem;
  border: 1px solid green;
  z-index: -1;
  border-radius: 50%;
  margin-bottom: 20px;

  position: relative;
`;

export const MemberName = styled.h3`
  position: absolute;
  background-color: white;
  padding: 10px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  //transform: translate(${(props) => props.x}, ${(props) => props.y});
  color: green;
  animation: show ${(props) => props.time}s ease-in;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
