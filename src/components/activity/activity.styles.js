import styled from "styled-components";

export const ActivityContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const ActivityImage = styled.img`
  width: 250px;
  height: 250px;
  background-color: white;
  padding: 5px;
  border: 3px solid green;
  border-radius: 5px;
  box-shadow: 2px 2px 10px grey;
`;
