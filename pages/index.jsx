import { Navbar } from '../src/components/Navbar';
import { Content, ContentImage, ContentBox,  ContentDescription, Title, SubTitle, TitleSpan } from '../src/styles/styles.Home';
import Profile from '../src/assets/Union (1).png';
import Image from 'next/image';
export default function Home() {
  return (
    <Content>
        <Navbar />
          <ContentBox>
          <ContentImage>
            <Image
              src={Profile}
              alt="Picture of the author"
              />
           </ContentImage>

            <ContentDescription>
              <Title>Weverson Luan De Sousa</Title>
              <TitleSpan>#Desenvolvedor FullStack.</TitleSpan>
              <SubTitle>
              Olá, meu nome é weverson luan de soua, apaixonado por tecnologias, gosto de eventos open source, que envolvem programação.
              Venho trilhando esse caminho de programação há mais de 3 anos com o objetivo
              de me tornar um desenvolvedor #FullStack profissional, adoro trabalhar com as seguintes tecnologias JavaScript, TypeScript, Node, Html5, Css3, React Js, React Native
              </SubTitle>
            </ ContentDescription>
          </ContentBox>

          <h1 style={{textAlign: "center"}}>Projects</h1>
    </Content>
  )
}
