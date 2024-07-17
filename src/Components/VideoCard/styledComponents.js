import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const TrendingContentSection = styled.div`
  background-color: ${props => props.bgcolor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  width: 100%;
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const TrendingChannelName = styled.p`
  font-famliy: 'Roboto';
`
export const TitleProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
`
export const TrendingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
`
export const TrendingViewsAndDate = styled.p``
export const TrendingListItem = styled.li`
  list-style-type: none;
`
export const TrendingThumbNailImage = styled.img``
export const TrendingProfileImage = styled.img`
  height: 200px;
  width: 200px;
`
