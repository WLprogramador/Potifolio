import styled  from 'styled-components';

export const Content = styled.header`
  width: 100%;

  background-color: ${({theme})=> theme.colors.blue_dark_250};
`;

export const ContentNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.4rem;

`;

export const ContentLogo = styled.div`
  flex: 50%;
`;

export const Logo = styled.h1`
  padding-left:12rem;
  color:${({ theme }) => theme.colors.primary};
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  :hover{
    color: #D8D8D8;
    font-size: 32px;
    text-transform: uppercase;
    transition-duration: 5s;
    cursor:pointer;
  }
`;

export const ContentLinks = styled.div`
  flex: 50%;

  width: 100%;
  display: flex;
`;

export const ContentUl = styled.ul`
  flex: 50%;

  width: 100%;
  display: flex;
`;

export const ContentLI = styled.li`
  flex: 50%;

  width: 100%;
  display: flex;
`;

export const Link = styled.a`
  text-decoration:none;
  color: ${({ theme }) => theme.colors.primary};

  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: medium;

  :hover{
    color: #D8D8D8;
    font-size: 23px;
    text-transform: uppercase;
    transition-duration: 5s;
  }
`;
