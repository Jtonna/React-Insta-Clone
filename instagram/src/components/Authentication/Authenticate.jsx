import React from 'react';
import LoginPage from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        signedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ signedIn: false });
      } else {
        this.setState({ signedIn: true });
      }
    }
    render() {
      if (this.state.signedIn) return <App />;
      return <LoginPage />;
    }
  };

export default Authenticate;
