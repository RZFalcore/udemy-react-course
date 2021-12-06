import { useState } from 'react';
import { useParams } from "react-router";
import useHttp from "../hooks/use-http";
import { getAllComments } from "../lib/api";

import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./Comments.module.css";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  const { quoteId } = useParams();

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = () => {};

  let comments;
  if (status === "pending")
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (status === "completed" && loadedComments && loadedComments.length > 0)
    comments = <CommentsList comments={loadedComments} />;

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  )
    <p className="centered">No comments...</p>;

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          onAddingComment={addedCommentHandler}
          quoteId={quoteId}
        />
      )}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
