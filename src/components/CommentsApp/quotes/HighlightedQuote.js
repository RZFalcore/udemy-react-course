import { useParams } from "react-router";
import styles from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  const params = useParams();
  console.log(params.quoteId);
  return (
    <figure className={styles.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
