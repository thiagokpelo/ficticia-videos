import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    player: {
      flex: '0 0 auto',
    },

    content: {
      flex: '1 1 auto',
      overflowY: 'auto',
    },

    title: {
      margin: '1.6rem 0',
    },
  })
