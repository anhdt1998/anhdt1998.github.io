import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import {ADMIN_ROUTES} from '../../../containers/constants';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import {NavLink} from 'react-router-dom';
class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
    }
  }
  toggleDrawer = value => {
    this.setState({
      open: value
    });
  }
  renderList () {
    const {classes} = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}> 
        <List component="nav">
          {ADMIN_ROUTES.map(item => {
            return(
              <NavLink
                key={item.path}
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
              >
                    <ListItem key = {item.path} className={classes.menuItem} button>
                      {item.name}
                    </ListItem>
              </NavLink>
            
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  }
  render() {
    const {open} = this.state;
    const {classes} = this.props;
    return (
      <Drawer
        variant='persistent'
        open={open}
        onClose={() => this.toggleDrawer(false)}
        classes= {{
          paper: classes.drawerPaper,
        }}
      > 
          {this.renderList()}
      </Drawer>
    );
  }
}
export default withStyles(styles)(SideBar);