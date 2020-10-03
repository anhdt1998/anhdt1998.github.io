import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import DashBoard from './../../../components/DashBoard';
import PropTypes from 'prop-types';
export default class AdminLayoutRoute extends Component {
  render() {
      const { component: YourComponent, ...remainProps} = this.props;
    return (
      <Route {...remainProps} render={
          routerProps => {
              return (
                <DashBoard>
                    <YourComponent {...routerProps}/>
                </DashBoard>
              );
          }
      } />
    );
  }
}
AdminLayoutRoute.propTypes = {
   path: PropTypes.string,
   exact: PropTypes.bool,
   component:PropTypes.oneOfType([PropTypes.object,PropTypes.func]),
   name:PropTypes.string,
}
