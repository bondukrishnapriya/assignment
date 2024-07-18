import styled from 'styled-components'

export const TitleContainer = styled.div``
export const TrendingVideoTitle = styled.h1``
export const TrendingContainer = styled.div`
  background-color: ${props => props.color};
  min-height: 100vh;
  margin-top: 60px;
  overflow-y: auto;
`
export const TrendingThumbnailImage = styled.img`
  width: 100%;
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const TrendingProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
`
export const TrendingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`

export const TrendingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const LoaderContainer = styled.div`
  display: flex;
  font-size: 25px;
  color: ${props => props.color};
`
export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-szie: 25px;
  color: ${props => props.color};
`
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 8px;
  paddin: 8px;
`
