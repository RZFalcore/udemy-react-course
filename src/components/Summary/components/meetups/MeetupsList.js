import React from "react";

import MeetupsListItem from "./MeetupsListItem";
import styles from "./MeetupsList.module.css";

const MeetupsList = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map(({ id, image, title, address, description }) => (
        <MeetupsListItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
          description={description}
        />
      ))}
    </ul>
  );
};

export default MeetupsList;
