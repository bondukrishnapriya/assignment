import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
  }
`
export const ConfirmButton = styled.button``
export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
`
export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`
export const LogOutButton = styled.button`
  background: none;
  border: 1px solid;
  font-family: 'Roboto';
  paading-top: 5px;
  padding-right: 10px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px){
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  @media screen and (min-width: 768px){
    display: none;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const CloseButton = styled.button``

export const ModalContainer = styled.div``
export const ProfileImage = styled.img``
