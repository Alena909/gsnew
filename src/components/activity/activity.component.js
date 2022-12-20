import { Suspense, lazy } from "react";

import { ActivityContainer, ActivityDescription } from "./activity.styles";

const GalleryLoading = lazy(() => import("../gallery/gallery.component"));

const Activity = ({ eventDetails }) => {
  const { title, eventImages, eventDescription, date } = eventDetails;
  return (
    <ActivityContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <h3 style={{ color: "green" }}>{title}</h3>
        <GalleryLoading images={eventImages} date={date} />

        <ActivityDescription>{eventDescription}</ActivityDescription>
        <hr style={{ width: "15%", marginBottom: 25 }} />
      </Suspense>
    </ActivityContainer>
  );
};

export default Activity;
