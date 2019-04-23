import * as React from 'react'
import YouTubePlayer from 'react-youtube'
import { Typography, IconButton, Tooltip, withStyles, WithStyles } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Modal from '../Modal/Modal'
import { IModalType } from '../Modal/ModalContext';
import { styles } from 'src/components/ModalVideo/styles';

type ModalVideoProps = {
  selectedVideo: any
  modalProps: IModalType
} & WithStyles<typeof styles>

const ModalVideoComponent: React.FC<ModalVideoProps> = (props): JSX.Element => (props.selectedVideo)
  ? (
    <Modal modalProps={props.modalProps}>
      <React.Fragment>
        <YouTubePlayer className={props.classes!.player} videoId={props.selectedVideo.id} opts={{ width: '100%' }} />
        <div className={props.classes!.content}>
          <div className={props.classes!.header}>
            <Typography className={props.classes!.title} variant="h5">{props.selectedVideo.snippet.title}</Typography>
            <Tooltip disableHoverListener title={props.selectedVideo.statistics.viewCount}>
              <IconButton aria-label="Visibility">
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Typography variant="body1">{props.selectedVideo.snippet.description}</Typography>
        </div>
      </React.Fragment>
    </Modal>
  ) : null

export const ModalVideo = withStyles(styles)(ModalVideoComponent)
