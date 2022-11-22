import './Home.css';
import Logo from '../../components/Home/Logo/Logo';
import Feed from '../../components/Home/Feed/Feed';
import LoginOption from '../../components/Home/LoginOption/LoginOption';
import { useState } from 'react';

function Home(){

    const [tweets, setTweets]=useState([]);

    function newTweetReceived(newTweet) {
        console.log("This is home component.");
        tweets.push(newTweet);
        setTweets(tweets);
        console.log(newTweet);
    }    

    return(
        <div className="home">
            <div className="leftContainer">
                <Logo notifyNewTweet={newTweetReceived} />
            </div>
            <div className="centerContainer">
                <Feed tweets={tweets} />
            </div>
            <div className="rightContainer">
                <LoginOption />
            </div>
        </div>
    );
}

export default Home;