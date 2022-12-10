import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { FormContainer } from "../login/login.styles";
import {
  VolunteerContainer,
  CustomDatePicker,
  VolunteerInfo,
} from "./volunteer.styles";
import volunteerImage from "../../assets/images/volunteer.png";
const Volunteer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  const minTime = new Date();
  const maxTime = new Date();
  const excludedTimes = () => {
    minTime.setMinutes(0);
    minTime.setHours(9);

    maxTime.setMinutes(0);
    maxTime.setHours(20);

    return [minTime, maxTime];
  };
  excludedTimes();

  return (
    <VolunteerContainer>
      <VolunteerInfo>
        <h1>Volunteer</h1>
        <img
          src={volunteerImage}
          alt="helping hands"
          style={{ width: "100%" }}
        />
        <p>
          We are a group of fun, energetic and goal-oriented girls looking for
          opportunities to give back to our community.
        </p>
        <p>Please, submit the form to request date and time.</p>
        <p>Form submission does not guarantee the volunteer service</p>
        <p>
          All requests will be processed and considered based on availability
          and qualifications of our troop members
        </p>
      </VolunteerInfo>

      <FormContainer>
        <FormLabel component="legend" style={{ marginBottom: "10px" }}>
          Select Date and Time
        </FormLabel>
        <CustomDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeSelect
          filterTime={filterPassedTime}
          minTime={minTime}
          maxTime={maxTime}
          excludeTimes={[excludedTimes()]}
        />
        <TextField id="outlined-basic" label="Name" variant="standard" />
        <TextField id="outlined-basic" label="Email" variant="standard" />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="standard"
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          margin="normal"
        />

        <Button variant="contained">Submit</Button>
      </FormContainer>
    </VolunteerContainer>
  );
};
export default Volunteer;
