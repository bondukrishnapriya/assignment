import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const GamingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const GamingThumbNailImage = styled.img`
  width: 100v;
  height: 300px;
  align-self: center;
`

export const GamingContentSection = styled.div`
  display: felx;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`
export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 0px;
`
export const GamingViewsAndDate = styled.p`
  font-family: 'Robotp';
  font-size: 12px;
  color: ${props => props.color};
`
