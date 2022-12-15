import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "yup-phone";

import { Typography } from "@material-ui/core";
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

  useEffect(() => {}, [startDate]);

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

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().phone().required("Phone number is required"),
    message: Yup.string()
      .required("Message is required")
      .min(3, "Message can not be empty")
      .max(150, "Message must not exceed 150 characters"),
    requestedDate: Yup.date().default(() => startDate),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(startDate);
    console.log(JSON.stringify(data, null, 2));
  };

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

      <FormContainer onSubmit={() => handleSubmit}>
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

        <TextField
          required
          id="firstname"
          name="firstname"
          label="First Name"
          fullWidth
          variant="standard"
          margin="dense"
          {...register("firstname")}
          error={errors.firstname ? true : false}
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.firstname?.message}
        </Typography>

        <TextField
          required
          id="lastname"
          name="lastname"
          label="Last Name"
          fullWidth
          variant="standard"
          margin="dense"
          {...register("lastname")}
          error={errors.lastname ? true : false}
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.lastname?.message}
        </Typography>

        <TextField
          required
          id="email"
          name="email"
          label="Email"
          fullWidth
          variant="standard"
          margin="dense"
          {...register("email")}
          error={errors.email ? true : false}
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.email?.message}
        </Typography>
        <TextField
          required={true}
          id="phone"
          name="phone"
          label="Phone Number"
          fullWidth
          variant="standard"
          margin="dense"
          {...register("phone")}
          error={errors.phone ? true : false}
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.phone?.message}
        </Typography>
        <TextField
          required={true}
          id="message"
          name="message"
          label="Message"
          fullWidth
          margin="dense"
          variant="outlined"
          multiline
          rows={4}
          {...register("message")}
          error={errors.message ? true : false}
          style={{ marginBottom: 30, marginTop: 30 }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </FormContainer>
    </VolunteerContainer>
  );
};
export default Volunteer;
