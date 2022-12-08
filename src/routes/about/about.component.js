import Member from "../../components/member/member.component";
import { AboutContainer, GroupContainer } from "./about.styles";
const About = () => {
  return (
    <AboutContainer>
      <GroupContainer>
        <h2>Troup Leaders</h2>
        <Member name="Cindy" />
        <Member name="Laura" />
      </GroupContainer>
      <GroupContainer>
        <h2>Troup members</h2>
        <Member name="Abbi" />
        <Member name="Isabel" />
        <Member name="Gabrielle" />
        <Member name="Miriam" />
        <Member name="Nicole" />
        <Member name="Sahar" />
        <Member name="Sophia" />
        <Member name="Valerie" />
        <Member name="Yasmin" />
      </GroupContainer>
    </AboutContainer>
  );
};
export default About;
