import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import VideoCard from '../VideoCard'

import {
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedVideosList,
  SavedText,
  NoSavedVideosHeading,
  NoSavedVideosView,
  NoSavedVideoImage,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>

              {savedVideos.length > 0 ? (
                <SavedVideosList>
                  {savedVideos.map(eachVideo => (
                    <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                  ))}
                </SavedVideosList>
              ) : (
                <NoSavedVideosView>
                  <NoSavedVideoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading headingColor={headingColor}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosNote>
                    You can save your videos while watching them
                  </NoSavedVideosNote>
                </NoSavedVideosView>
              )}
            </SavedVideoTitle>
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default SavedVideos
