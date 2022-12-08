import { ActivityContainer, ActivityImage } from "./activity.styles";

const Activity = ({ eventDetails }) => {
  const { title, eventImage, eventDescription, date } = eventDetails;
  return (
    <ActivityContainer>
      <h3>{title}</h3>
      <ActivityImage alt={title} src={eventImage} />
      <p>{date}</p>
      <p>{eventDescription}</p>
      <hr style={{ width: "10%" }} />
    </ActivityContainer>
  );
};

export default Activity;
