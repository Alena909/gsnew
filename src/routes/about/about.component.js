import {
  AboutContainer,
  GroupContainer,
  AboutImage,
  MemberName,
  Circle,
} from "./about.styles";
import concert2 from "../../assets/images/thumbnails/concert2_t.jpg";

const About = () => {
  return (
    <AboutContainer>
      <GroupContainer>
        <AboutImage src={concert2} alt="troop members" />
        <h2>Troup Leaders</h2>
        <div
          style={{
            padding: "5%",
            position: "relative",
          }}
        >
          <MemberName top={0} left={-50}>
            Cindy
          </MemberName>
          <MemberName top={0} left={60}>
            Laura
          </MemberName>
        </div>
      </GroupContainer>
      <GroupContainer style={{ width: "-webkit-fill-available" }}>
        <h2>Troup members</h2>
        <Circle>
          <MemberName top={-40} left={135} time={1}>
            Abbi
          </MemberName>
          <MemberName top={20} left={220} time={3}>
            Gabrielle
          </MemberName>
          <MemberName top={100} left={275} time={2}>
            Isabel
          </MemberName>
          <MemberName top={190} left={250} time={1}>
            Miriam
          </MemberName>
          <MemberName top={260} left={200} time={2}>
            Nicole
          </MemberName>
          <MemberName top={260} left={50} time={3}>
            Sahar
          </MemberName>
          <MemberName top={190} left={-10} time={1}>
            Sophia
          </MemberName>
          <MemberName top={100} left={-20} time={2}>
            Valerie
          </MemberName>
          <MemberName top={20} left={20} time={3}>
            Yasmin
          </MemberName>
          <MemberName
            top={110}
            left={130}
            time={1}
            style={{ color: " rgb(56, 162, 149" }}
          >
            #6789
          </MemberName>
        </Circle>
      </GroupContainer>
    </AboutContainer>
  );
};
export default About;
