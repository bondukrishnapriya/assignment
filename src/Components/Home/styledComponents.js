import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 100vh;
  margin-bottom: 60px;
  overflow-y: auto;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
`
export const BannerRightPart = styled.div``
export const SearchContainer = styled.div``
export const BannerLeftPart = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerImage = styled.img`
  padding-left: 10px;
  padding-right: 10px;
  paddding-top: 5px;
  padding-bottom: 5px;
  width:800px;
  height: 30px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
`
export const BannerButton = styled.button``
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
`
export const searchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 60%;
  height: 40px;
`
export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
`
export const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  background-color: #909090;
  width: 100%;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
