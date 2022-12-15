import styled from "styled-components";

export const CookieContainer = styled.div`
  width: 50%;
  margin: 20px;
  padding: 10px;
  border: 2px solid grey;

  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CookieImage = styled.img`
  z-index: -1;
  width: 70px;
`;
export const CookiePrice = styled.div`
  background-color: #e6f3e7;
  margin: 15px;
  padding: 15px;
  font-weight: bold;
  border-radius: 50%;
`;

export const CookieInfo = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
`;
