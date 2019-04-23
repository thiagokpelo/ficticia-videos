import * as React from 'react'
import { CardMedia, CardContent, Typography, Card, withStyles, WithStyles } from '@material-ui/core';
import { IVideo } from '../../helpers'
import { styles } from './styles';

type CardVideoProps = {
  data: IVideo
  onCardClick?: (videoId: string) => any
} & WithStyles<typeof styles>

const CardVideoComponent: React.FC<CardVideoProps> = (props): JSX.Element => {

  function handleClick() {
    if (props.onCardClick) {
      props.onCardClick(props.data.id.videoId)
    }
  }

  return (
    <div
      role="button"
      onClick={handleClick}
    >
      <Card className={props.classes.card}>
        <CardMedia
          className={props.classes.cover}
          image={props.data.snippet.thumbnails.high.url}
          title={props.data.snippet.title}
        />
        <div className={props.classes.details}>
          <CardContent className={props.classes.content}>
            <Typography
              className={props.classes.title}
              component="h5"
              variant="h5"
              color="primary"
            >
              {props.data.snippet.title}
            </Typography>
          </CardContent>
        </div>
      </Card>

    </div>
  )
}

export const CardVideo = withStyles(styles)(CardVideoComponent)
