import axios from 'axios'

const YOUTUBE_URL         = 'https://www.googleapis.com/youtube/v3'
const YOUTUBE_KEY         = 'AIzaSyBxBYzTqQKFmW82B69dm0V9SUw_B4YnPPk'
const YOUTUBE_ID          = 'UC0f866RMRdL5mSVnipiOHxg'
const YOUTUBE_MAX_RESULTS = 12;
const YOUTUBE_ORDER       = 'viewCount'
const YOUTUBE_PARTS       = 'snippet'
const YOUTUBE_SAFE        = 'none'

export default axios.create({
  baseURL: YOUTUBE_URL,
  params: {
    channelId: YOUTUBE_ID,
    key: YOUTUBE_KEY,
    maxResults: YOUTUBE_MAX_RESULTS,
    order: YOUTUBE_ORDER,
    part: YOUTUBE_PARTS,
    safeSearch: YOUTUBE_SAFE,
  }
})

interface IThumbDetails {
  url: string;
  width: number;
  height: number;
}

interface IThumbnail {
  default: IThumbDetails;
  high: IThumbDetails;
  medium: IThumbDetails;
}

interface ISnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishedAt: string;
  title: string;
  thumbnails: IThumbnail;
}

interface IVideoId {
  kind: string;
  videoId: string;
}

export interface IVideo {
  etag: string;
  id: IVideoId;
  kind: string;
  snippet: ISnippet;
}
