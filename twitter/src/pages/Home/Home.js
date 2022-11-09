import './Home.css';
import Logo from '../../components/Home/Logo/Logo';
import Feed from '../../components/Home/Feed/Feed';
import LoginOption from '../../components/Home/LoginOption/LoginOption';

function Home(){
    return(
        <div className="home">
            <div className="leftContainer">
                <Logo />
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