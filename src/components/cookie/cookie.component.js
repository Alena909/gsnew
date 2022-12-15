import cookiesImage from "../../assets/images/thumbnails/cookie_t.png";
import {
  CookieContainer,
  CookieImage,
  CookiePrice,
  CookieInfo,
} from "./cookie.styles";
const Cookie = ({ cookieInfo }) => {
  const { name, description, count, price, color } = cookieInfo;

  return (
    <CookieContainer style={{ backgroundColor: color }}>
      <h3>{name}</h3>
      {/*   <CookieImage src={cookiesImage} alt={name} />*/}
      <CookiePrice>{price}</CookiePrice>
      <CookieInfo>
        <p>{description}</p>
        <p>{count}</p>
      </CookieInfo>
    </CookieContainer>
  );
};
export default Cookie;
