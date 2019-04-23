import { Theme, createStyles } from '@material-ui/core';

export const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      cursor: 'pointer',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      overflow: 'hidden',
      display: '-webkit-box',
      ['-webkitLineClamp']: 3,
      ['-webkitBoxOrient']: 'vertical',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      flex: '0 0 170px',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });
