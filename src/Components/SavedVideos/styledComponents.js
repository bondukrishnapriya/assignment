import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.color};
  min-height: 100vh;
  margin-toop: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
`
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const SavedTitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SavedText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const SavedVideosList = styled.ul`
  list-style-type: none;
  disply: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  background: none;
`
export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoSavedVideoImage = styled.img`
  width: 200px;
`
export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  text-align: center;
`
export const NoSavedVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  text-align: center;
`
