import "./Trend.css";

// props is an object which combines all the parameters.

function Trend(props) {
  const data = props.content;
  return (
    <div className="trend">
      <p className="header">{data.header}</p>
      <p className="trend-text">{data.text}</p>
      <p className="reTweets">{data.retweets}</p>
    </div>
  );
}

export default Trend;
