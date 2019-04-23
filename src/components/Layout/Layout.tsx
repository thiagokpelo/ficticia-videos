import * as React from 'react'
import { Typography, withStyles, Grid, WithStyles } from '@material-ui/core'
import { SearchAppBar } from '../SearchAppBar/SearchAppBar'
import { styles } from '../Layout/styles';

type LayoutProps = {
  children: React.ReactNode | React.ReactNodeArray
  title: string
  onSearchSubmit?: (value: string) => any
} & WithStyles<typeof styles>

const LayoutComponent: React.FC<LayoutProps> = (props): JSX.Element => (
  <div className={props.classes!.root}>
    <SearchAppBar onSubmit={props.onSearchSubmit && props.onSearchSubmit}/>
    <Grid className={props.classes!.container} container spacing={24}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">{props.title}</Typography>
      </Grid>
      {props.children}
    </Grid>
  </div>
)

export const Layout = withStyles(styles)(LayoutComponent);
