import "./Trend.css";

// props is an object which combines multiple parameters.

function Trend(props) {
  return (
    <div className="trend">
      <p className="header">Header{props.header}</p>
      <p className="trend-text">{props.text}</p>
      <p className="reTweets">{props.retweets}</p>
    </div>
  );
}

export default Trend;
