import './Home.css';
import Logo from '../../components/Home/Logo/Logo';
import Feed from '../../components/Home/Feed/Feed';
import LoginOption from '../../components/Home/LoginOption/LoginOption';

function Home(){

    function newTweetReceived(newTweet) {
        console.log("This is home component.");
        console.log(newTweet);
    }    

    return(
        <div className="home">
            <div className="leftContainer">
                <Logo notifyNewTweet={newTweetReceived} />
            </div>
            <div className="centerContainer">
                <Feed />
            </div>
            <div className="rightContainer">
                <LoginOption />
            </div>
        </div>
    );
}

export default Home;