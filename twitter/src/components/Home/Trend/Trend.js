import "./Trend.css";

// props is an object which combines multiple parameters.

function Trend(props) {
  return (
    <div className="trend">
      <p className="header">Header</p>
      <p className="trend-text">Text</p>
      <p className="reTweets">Tweets</p>
    </div>
  );
}

export default Trend;
