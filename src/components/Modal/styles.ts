import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    overlay: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: 'rgba(255, 255, 255, 0.9)',

      visibility: 'hidden',
      opacity: 0,
      zIndex: 3,

      transition: 'opacity 0.32s ease-in-out, visibility 0.32s ease-in-out',
    },

    overlayActive: {
      visibility: 'visible',
      opacity: 1,
      transition: 'opacity 0.16s ease-in, visibility 0.16s ease-in',
    },

    modal: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FFF',
      maxWidth: '56.2rem',
      width: '100vw',
      minHeight: '30rem',
      maxHeight: '100vh',

      padding: '1rem 2rem 2rem',

      border: '1px solid #E3E9ED',

      [theme.breakpoints.down('sm')]: {
        height: '100vh',
      },
    },

    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
      height: '3rem',
      marginBottom: '1rem',
    },
  })
