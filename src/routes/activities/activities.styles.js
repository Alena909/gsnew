import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div > .react-datepicker {
    margin-top: 20px;
    border: 2px solid #38a295;
    box-shadow: 4px 2px 15px grey;
  }

  > div > div .react-datepicker__header {
    background-color: #38a295;
  }
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    color: #38a295;
  }
`;
