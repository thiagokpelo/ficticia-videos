import * as React from 'react';
import { withStyles } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: '#fff',
      main: '#a8395c',
    },
    secondary: {
      contrastText: '#FFFFFF',
      main: '#EBAC12'
    }
  },
  typography: {
    fontFamily:
    '-apple-system,system-ui,BlinkMacSystemFont,' +
    '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    useNextVariants: true,
  }
});

const rootStyles = {
  wrapper: {
    display: 'flex',
    width: '100vw',
  },
}

const rootMuiStyles = withStyles(rootStyles);

const RootComponent: React.FC<{
  children: React.ReactNode | React.ReactNodeArray
  classes?: { [k in keyof typeof rootStyles]: string }
}> = ({ children, classes }): JSX.Element => (
  <MuiThemeProvider theme={theme}>
    <div className={classes.wrapper}>{children}</div>
  </MuiThemeProvider>
)

export const Root = rootMuiStyles(RootComponent)
