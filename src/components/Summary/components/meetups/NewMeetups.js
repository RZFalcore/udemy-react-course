import React, { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewMeetups.module.css";

const NewMeetups = ({ onSendData }) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    let title = titleRef.current.value;
    let image = imageRef.current.value;
    let address = addressRef.current.value;
    let description = descriptionRef.current.value;

    const formData = { title, image, address, description };

    onSendData(formData);

    title = "";
    image = "";
    address = "";
    description = "";
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows={5} ref={descriptionRef} />
        </div>
        <div className={styles.actions}>
          <button type="submit">Add meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetups;
