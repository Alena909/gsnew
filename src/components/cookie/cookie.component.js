
import { CookieContainer } from "./cookie.styles";
const Cookie = ({ cookieInfo }) => {
  const { name, description, count, price, image, color } = cookieInfo;

  return (
    <CookieContainer style={{ backgroundColor: color }}>
      <h3>{name}</h3>
      <img alt={name} />
      <div>
        <p>{description}</p>
        <p>{count}</p>
        <p>{price}</p>
      </div>
    </CookieContainer>
  );
};
export default Cookie;
