import { 
  Content, 
  ContentNav, 
  ContentLogo, 
  Logo, 
  ContentLinks, 
  ContentUl, 
  ContentLI,
  Link,
} from './styles';
export function Navbar() {
  return (
    <Content>
        <ContentNav>
            <ContentLogo>
              <Logo>WLTECH</Logo>
            </ContentLogo>

            <ContentLinks>
              <ContentUl>
                <ContentLI>
                  <Link href="home#">About</Link>
                </ContentLI>
                <ContentLI>
                  <Link href="home#">Projects</Link>
                </ContentLI>
                <ContentLI>
                  <Link href="home#">Contacts</Link>
                </ContentLI>
              </ContentUl>
            </ContentLinks>
        </ContentNav>
    </Content>
  )
}