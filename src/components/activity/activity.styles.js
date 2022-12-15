import styled from "styled-components";

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const ActivityDescription = styled.p`
  margin: 20px auto;
  padding: 10px 20px;
  text-align: center;

`;
