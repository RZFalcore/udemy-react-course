import React, { useState, useEffect } from "react";
import MeetupsList from "../components/meetups/MeetupsList";

const Meetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const refacMeetups = [];
        for (let key in data) {
          refacMeetups.push({ id: key, ...data[key] });
        }
        setMeetups(refacMeetups);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <h1>All meetups page</h1>
      {isLoading ? <p>Loading...</p> : <MeetupsList meetups={meetups} />}
    </section>
  );
};

export default Meetups;
