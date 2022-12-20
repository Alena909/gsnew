import "./home.styles.css";
import branch from "../../assets/images/flowers/branch_w.png";
import yellowFlower from "../../assets/images/flowers/yellowFlower_w.png";
import darkFlower from "../../assets/images/flowers/darkFlower_w.png";
import lightFlower from "../../assets/images/flowers/lightFlower_w.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-canvas">
        <h1 className="flowerTitle">Welcome</h1>
        <img className="yellowBL flower" src={yellowFlower} alt="yellow flower" />
        <img className="yellowTR flower" src={yellowFlower} alt="yellow flower" />
        <img className="yellowBR1 flower" src={yellowFlower} alt="yellow flower" />
        <img className="yellowBR2 flower" src={yellowFlower} alt="yellow flower" />
        <img className="yellowTL flower" src={yellowFlower} alt="yellow flower" />
        <img className="darkTL flower" src={darkFlower} alt="dark flower" />
        <img className="darkBR flower" src={darkFlower} alt="dark flower" />
        <img className="darkTR flower" src={darkFlower} alt="dark flower" />
        <img className="lightTL flower" src={lightFlower} alt="light flower" />
        <img className="lightBL flower" src={lightFlower} alt="light flower" />
        <img className="branchTL flower" src={branch} alt="branch" />
        <img className="branchTR flower" src={branch} alt="branch" />
        <img className="branchBL flower" src={branch} alt="branch" />
      </div>
    </div>
  );
};

export default Home;
