import { useState, useRef } from "react";
import { Prompt } from "react-router";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  const onFormFocusHandler = () => {
    setOnFocus(true);
  };

  const finishingEnteringHandler = () => {
    setOnFocus(false);
  };

  return (
    <>
      <Prompt
        when={onFocus}
        message={() => "You want to leave? All your data will be lost!"}
      />
      <Card>
        <form
          className={styles.form}
          onSubmit={submitFormHandler}
          onFocus={onFormFocusHandler}
        >
          {props.isLoading && (
            <div className={styles.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button className="btn" onClick={finishingEnteringHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
