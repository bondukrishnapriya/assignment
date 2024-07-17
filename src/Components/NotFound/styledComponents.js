import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  min-height: 92vh;
  margin-top: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
`
export const NotFoundVideoImage = styled.img`
  width: 200px;
`
export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  text-align: center;
`
export const NotFoundVideosNote = styled.p`
  font-familt: 'Roboto';
  font-size: 18px;
`
