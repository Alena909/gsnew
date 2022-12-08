import { CookieInfoContainer, Cookies } from "./cookie-info.styles";
import Cookie from "../../components/cookie/cookie.component";
import COOKIE_DATA from "../../cookie-data";
import Animation from "../../components/animation/animation.components";
import cookieLottie from "../../assets/lotties/34674-cookie-policy.json";

const CookieInfo = () => {
  return (
    <CookieInfoContainer>
      <h1>Cookie season 2023</h1>
      <p style={{ color: "red" }}>Deliveries will be done after January, 13</p>
      <Animation animationLottie={cookieLottie} />
      <Cookies>
        {COOKIE_DATA.map((item) => {
          return <Cookie key={item.id} cookieInfo={item} />;
        })}
      </Cookies>
      <div>
        <h4>All our cookies have...</h4>
        <ul>
          <li>NO High-Fructose Corn Syrup</li>
          <li>NO Partially Hydrogenated Oils (PHOs)</li>
          <li>Zero Grams Trans Fat per Serving</li>
          <li>RSPO Certified (Mass Balance) Palm Oil</li>
          <li>Halal Certification</li>
          <li>
            <a href="https://www.gsnetx.org/content/dam/NE_Texas/documents/product-sales/cookies/2023_Cookie_Program_Flavor_and_Nutrition_English.pdf">
              Product information
            </a>
          </li>
          <li>
            <a href="https://www.gsnetx.org/en/Cookies/cookie-resources.html">
              sale info
            </a>
          </li>
        </ul>
      </div>
    </CookieInfoContainer>
  );
};
export default CookieInfo;
