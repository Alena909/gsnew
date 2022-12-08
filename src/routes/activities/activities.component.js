import { useState } from "react";
import Activity from "../../components/activity/activity.component";
import { PAST_EVENT_DATA } from "../../event-data";

import Animation from "../../components/animation/animation.components";
import comingSoon from "../../assets/lotties/87843-coming-soon.json";

import {
  ActivitiesContainer,
  CalendarPageContainer,
  CalendarStyles,
} from "./activities.styles";

const Activities = () => {
  const [date, setDate] = useState(new Date());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currMonth = date.getMonth();
  return (
    <ActivitiesContainer>
      <CalendarPageContainer>
        <h2>{months[currMonth]} Calendar</h2>
        <CalendarStyles onChange={setDate} value={date} />
      </CalendarPageContainer>
      <h2>Upcoming events</h2>
      <Animation animationLottie={comingSoon} />
      <h2>Past events</h2>
      {PAST_EVENT_DATA.map((event) => {
        return <Activity key={event.id} eventDetails={event} />;
      })}
    </ActivitiesContainer>
  );
};
export default Activities;
