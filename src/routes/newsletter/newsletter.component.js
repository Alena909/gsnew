import Animation from "../../components/animation/animation.components";
import { NewsletterContainer, NewsletterArticle } from "./newsletter.styles";

import newsLottie from "../../assets/lotties/45734-cinema-news-animation.json";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <h2>Our Newsletter</h2>
      <Animation animationLottie={newsLottie} height={200} width={320} />
      <NewsletterArticle>
        <h3>
          <a href="https://smore.com/rw736"> Mudleaf Cafe</a>
        </h3>
        <p>5-26-2022</p>
      </NewsletterArticle>
    </NewsletterContainer>
  );
};
export default Newsletter;
