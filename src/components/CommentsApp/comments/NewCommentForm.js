import { useRef, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { addComment } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import styles from "./NewCommentForm.module.css";

const NewCommentForm = ({ onAddingComment, quoteId }) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed" && !error) onAddingComment();
  }, [onAddingComment, status, error]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const text = commentTextRef.current.value;

    sendRequest({ commentData: { text }, quoteId });
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={styles.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
