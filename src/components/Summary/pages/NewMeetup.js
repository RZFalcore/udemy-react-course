import React from "react";
import { useNavigate } from "react-router-dom";

import NewMeetups from "../components/meetups/NewMeetups";

const NewMeetup = () => {
  const navigate = useNavigate();

  const sendNewMeetupHandler = (newMeetup) => {
    fetch(
      "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(newMeetup),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => navigate("/", { replace: true }));
  };
  return (
    <section>
      <h1 style={{ textTransform: "uppercase", textAlign: "center" }}>
        Add new meetup
      </h1>
      <NewMeetups onSendData={sendNewMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
