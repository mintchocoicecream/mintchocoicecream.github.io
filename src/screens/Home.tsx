import {styled} from "styled-components";

export default function Home() {
  return (
    <HomeWrapper>
      <Title>Hello, I'm <Accent>Angela</Accent>.</Title>
      <Subtitle>프론트엔드 개발자</Subtitle>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  max-width: 900px;
  margin: 80px auto 0;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Accent = styled.span`
  color: ${(props) => props.theme.accentColor};
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
`;