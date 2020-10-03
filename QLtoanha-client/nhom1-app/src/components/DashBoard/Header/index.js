import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import PropTypes from 'prop-types';
const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';

 class Header extends Component {

  constructor(props){
    super(props);
    this.state= {
     
      anchorEl:null,
    }
  }

  handleProfileMenuOpen = e => {
    this.setState({
      anchorEl: e.currentTarget,
    })
  }
   handleMenuClose = () => {
     this.setState({
       anchorEl: null,
     })
   }
   renderMenu = () => {
     const {anchorEl} = this.state;
     const isMenuOpen = Boolean(anchorEl);
     return(
      <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={this.handleMenuClose}
    >
      <MenuItem onClick={this.handleMenuClose}>Log out</MenuItem>
    </Menu>
     );
   }

  render() {
    const {classes ,name} = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton

              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
             Quản Lý Toà Nhà
            </Typography>
           
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderMenu()}
      </div>
    );
  }
}
export default withStyles(styles)(Header);

Header.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.object
}