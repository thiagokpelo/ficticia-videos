import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
createStyles({
  logo: {
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    lineHeight: 1,
    fontSize: 20,
  },
  svg: {
    fill: '#fff',
    height: 'auto',
    marginRight: 10,
    width: 50,
  },
})
