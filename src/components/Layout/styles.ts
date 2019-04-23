import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    container: {
      padding: theme.spacing.unit,
      width: '100%',
      margin: '0 auto',
      [theme.breakpoints.up('md')]: {
        width: 720,
      },
      [theme.breakpoints.up('lg')]: {
        width: 1140,
      },
    },
  })
