import { useState } from "react";
import Activity from "../../components/activity/activity.component";
import { PAST_EVENT_DATA } from "../../event-data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

import Animation from "../../components/animation/animation.components";
import comingSoon from "../../assets/lotties/87843-coming-soon.json";

import { ActivitiesContainer, CalendarContainer } from "./activities.styles";

const Activities = () => {
  const [date, setDate] = useState(new Date());

  return (
    <ActivitiesContainer>
      <CalendarContainer>
        <h2>Upcoming events</h2>
        <DatePicker selected={date} onChange={(date) => setDate(date)} inline />
      </CalendarContainer>
      <Animation animationLottie={comingSoon} />

      <h2>Past events</h2>

      {PAST_EVENT_DATA.map((event) => {
        return <Activity key={event.id} eventDetails={event} />;
      })}
    </ActivitiesContainer>
  );
};
export default Activities;
