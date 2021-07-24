import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
`;
export const ContentBox = styled.div`
  display: flex;
  width: 100%;
`;

export const ContentImage = styled.div`
  width: 80%;

  padding-left:8rem;
  padding-top:3rem;
`;
export const ContentDescription = styled.div`
  width: 100%;
`; 
export const Title = styled.h1`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  margin-top:6rem;
  margin-left: -8rem;
`;
export const TitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  margin-left: -8rem;
`;
export const SubTitle = styled.p`
  width: 656px;

  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;

  margin-top:2rem;
  margin-left: -8rem;
`;