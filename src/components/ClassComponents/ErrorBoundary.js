import { Component } from "react";

class ErrorBoundary extends Component {
  state = { error: null };

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ error: error });
  }

  render() {
    if (this.state.error) {
      return <p>Some error happend...</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
