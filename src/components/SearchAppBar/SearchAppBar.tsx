import AppBar from '@material-ui/core/AppBar'
import InputBase from '@material-ui/core/InputBase'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import * as React from 'react'
import { Logo } from '../Logo/Logo'
import { styles } from 'src/components/SearchAppBar/styles'

type SearchAppBarProps = {
  onSubmit?: (value: string) => any
} & WithStyles<typeof styles>

const SearchAppBarComponent: React.FC<SearchAppBarProps> = ({ classes, onSubmit }): JSX.Element => {

  const handleSubmit: React.FormEventHandler<any> = event => {
    event.preventDefault()
    if (onSubmit) {
      onSubmit(event.currentTarget.elements!.search!.value)
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <form onSubmit={handleSubmit}>
            <InputBase
              name="search"
              placeholder="Pesquisa..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </form>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export const SearchAppBar = withStyles(styles)(SearchAppBarComponent)
