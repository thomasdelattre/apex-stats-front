import React from 'react';
import './Header.css';
import logo from './logo.png';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


const styles = theme => ({search: {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing.unit * 2,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing.unit * 3,
    width: 'auto',
  },
},
inputRoot: {
  color: 'inherit',
  width: '100%',
},
inputInput: {
  paddingTop: theme.spacing.unit,
  paddingRight: theme.spacing.unit,
  paddingBottom: theme.spacing.unit,
  paddingLeft: theme.spacing.unit * 10,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: 200,
  },
},
searchIcon: {
  width: theme.spacing.unit * 9,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}});

class Header extends React.Component {
  render() {
    const { classes } = this.props;   
    
    return (
      <div className="Header" id="Header">
        <img src={logo} id="logo" alt="logo" />
        <div id="searchUser" className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Pseudo…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);