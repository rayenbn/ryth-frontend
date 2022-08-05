import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setUserData } from "../redux/actions/UserActions";
import jwtAuthService from "../services/jwtAuthService";
import localStorageService from "../services/localStorageService";
import firebaseAuthService from "../services/firebase/firebaseAuthService";

class Auth extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.props.setUserData(localStorageService.getItem("auth_user"));
    this.checkJwtAuth(this.props);
    // this.checkFirebaseAuth();
  }

  checkJwtAuth = (props) => {

    // const { location, history } = props;
    // const pathname = location;

    jwtAuthService.loginWithToken().then(user => {
      this.props.setUserData(user);
    }).catch(err => {
      console.log('err from babababab', err);
      // history.push({
      //   pathname: "/session/signin",
      //   state: { redirectUrl: pathname }
      // });
    });
  };

  // checkFirebaseAuth = () => {
  //   firebaseAuthService.checkAuthStatus(user => {
  //     if (user) {
  //       console.log(user.uid);
  //       console.log(user.email);
  //       console.log(user.emailVerified);
  //     } else {
  //       console.log("not logged in");
  //     }
  //   });
  // };

  render() {
    const { children } = this.props;
    return <Fragment>{children}</Fragment>;
  }
}

const mapStateToProps = state => ({
  setUserData: PropTypes.func.isRequired,
  login: state.login
});

export default connect(mapStateToProps, { setUserData })(Auth);
