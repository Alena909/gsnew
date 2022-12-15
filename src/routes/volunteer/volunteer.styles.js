import styled, { createGlobalStyle } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { GlobalStyles } from "@mui/styled-engine";

export const VolunteerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  padding-bottom: 10px;
`;

export const VolunteerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 400px;
  margin-bottom: 20px;
`;

export const CustomButton = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  border: 0;
  border-radius: 4px;
  background-color: #216ba5;
  font: inherit;
  color: #fff;
`;

export const CustomDatePicker = styled(DatePicker)`
  cursor: pointer;
  padding: 5px 15px;
  border: 0;
  border-radius: 4px;
  background-color: #216ba5;
  font: inherit;
  color: #fff;
`;
