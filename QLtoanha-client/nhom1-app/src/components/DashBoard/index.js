import React, { Component } from 'react';
import  PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
class DashBoard extends Component {
  render() {
    const{children, name, classes} = this.props;
    return (
      <div> 
        <Header name={name} />
        <div className={classes.wrapper}>
            <SideBar />
            <div className={classes.wrapperContent}>{children} </div>
        </div>
      </div>
    );
  }
}

DashBoard.propTypes = {
  children: PropTypes.object,
  name : PropTypes.string
}
export default withStyles(styles)(DashBoard);