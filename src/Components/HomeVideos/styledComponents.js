import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items:
  background: none;

`
export const NoVideosImage = styled.img`
  width: 200px;
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
`
export const NoVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.noteColor};
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  paading-left: 10px;
  padding-right: 10px;
  font-family: 'Roboto';
  font-size: 15px;
`
export const NovideosCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
export const VideoCardList = styled.ul``
