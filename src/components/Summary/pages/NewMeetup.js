import React from "react";
import NewMeetups from "../components/meetups/NewMeetups";

const NewMeetup = () => {
  return (
    <section>
      <h1 style={{ textTransform: "uppercase", textAlign: "center" }}>
        New meetups
      </h1>
      <NewMeetups />
    </section>
  );
};

export default NewMeetup;
