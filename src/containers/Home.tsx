import * as React from 'react'
import { Button, Grid } from '@material-ui/core';
import { CardVideo, Layout, ModalVideo } from '../components'
import ModalContext from '../components/Modal/ModalContext'
import youtubeApi, { IVideo } from '../helpers/youtubeApi'

interface IState {

  nextPage?: string | null
  searchValue?: string
  selectedVideo: any | null
  videos: IVideo[],
}

export class Home extends React.Component<any, IState> {

  state: IState = {
    nextPage: null,
    searchValue: '',
    selectedVideo: null,
    videos: [],
  }

  getVideos(search: string = '') {

    return youtubeApi.get('/search', {

      params: {
        pageToken: this.state.nextPage || '',
        q: search,
        type: 'video',
      }
    })
  }

  async componentDidMount() {

    this.updateVideos()
  }

  updateSearchText = async (searchValue: string = '') => {

    this.setState(prevState => ({
      ...prevState,
      searchValue,
      videos: [],
    }), () => { this.updateVideos() })
  }

  updateVideos = async () => {

    const response = await this.getVideos(this.state.searchValue)
    const { items, nextPageToken } = response.data

    this.setState(prevState => ({
      ...prevState,
      nextPage: nextPageToken,
      videos: prevState.videos.concat(items)
    }))
  }

  handleCardClick = async (vId: string, callbackHandleShowModal: () => void) => {

    const response = await youtubeApi.get('/videos', {
      params: {
        id: vId,
        part: 'snippet,contentDetails,statistics',
      }
    })

    this.setState(prevState => ({
      ...prevState,
      selectedVideo: response.data.items[0]
    }), () => callbackHandleShowModal && callbackHandleShowModal())
  }

  renderButton = () => (this.state.nextPage !== undefined)
    ? <Button style={{
      margin: '0 auto',
    }} variant="contained" color="primary" size="large" onClick={this.updateVideos}>Carregar mais vídeos</Button>
    : null

  renderCards = (handleShowModal: () => any): React.ReactNodeArray => this.state.videos
    .map((video: IVideo) =>
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        key={video.id.videoId}
      >
        <CardVideo
          data={video}
          onCardClick={(vId: string) => this.handleCardClick(vId, handleShowModal)} // tslint:disable-line
        />
      </Grid>)

  render() {

    return (
      <Layout
        title={this.state.searchValue ? `Resultados para "${this.state.searchValue}"` : 'Todos os vídeos do canal'}
        onSearchSubmit={this.updateSearchText}
      >
        <ModalContext.Consumer>
          {
            (modalProps: any) => (
              <React.Fragment>
                {this.renderCards(modalProps.showModal)}
                <ModalVideo modalProps={modalProps} selectedVideo={this.state.selectedVideo} />
              </React.Fragment>
            )
          }
        </ModalContext.Consumer>
        {this.renderButton()}
      </Layout>
    )
  }
}
