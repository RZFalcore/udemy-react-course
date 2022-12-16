import React from "react";
import Card from "../ui/Card";
import styles from "./NewMeetups.module.css";

const NewMeetups = () => {
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows={5} />
        </div>
        <div className={styles.actions}>
          <button type="submit">Add meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetups;
