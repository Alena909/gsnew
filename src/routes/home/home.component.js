import "./home.styles.css";
import branch from "../../assets/images/flowers/branch_w.png";
import yellowFlower from "../../assets/images/flowers/yellowFlower_w.png";
import darkFlower from "../../assets/images/flowers/darkFlower_w.png";
import lightFlower from "../../assets/images/flowers/lightFlower_w.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-canvas">
        <h1>Welcome</h1>
        <img className="yellowBL" src={yellowFlower} alt="yellow flower" />
        <img className="yellowTR" src={yellowFlower} alt="yellow flower" />
        <img className="yellowBR1" src={yellowFlower} alt="yellow flower" />
        <img className="yellowBR2" src={yellowFlower} alt="yellow flower" />
        <img className="yellowTL" src={yellowFlower} alt="yellow flower" />
        <img className="darkTL" src={darkFlower} alt="dark flower" />
        <img className="darkBR" src={darkFlower} alt="dark flower" />
        <img className="darkTR" src={darkFlower} alt="dark flower" />
        <img className="lightTL" src={lightFlower} alt="light flower" />
        <img className="lightBL" src={lightFlower} alt="light flower" />
        <img className="branchTL" src={branch} alt="branch" />
        <img className="branchTR" src={branch} alt="branch" />
        <img className="branchBL" src={branch} alt="branch" />
      </div>
    </div>
  );
};

export default Home;
