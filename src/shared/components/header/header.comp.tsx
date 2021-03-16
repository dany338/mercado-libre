import React from 'react'
import { Container, HeaderSearch, HeaderLeft, HeaderRight, Search, Footer } from './header.styles';
export interface ICardProps {}

const Header: React.FC<ICardProps> = ({ }) => {
  return (
    <Container>
      <HeaderLeft>

      </HeaderLeft>
      <HeaderSearch>
      
      </HeaderSearch>
      <HeaderRight>
        
      </HeaderRight>
    </Container>
  )
}

export default Header;
