import styled from 'styled-components';

const Title = styled.h1`
  font-size: 32px;
  color: ${({theme}) => theme.colors.black}
`;


export default function Home() {
  return (
    <div>
     <Title>Heloow WLprogramador</Title>
    </div>
  )
}
