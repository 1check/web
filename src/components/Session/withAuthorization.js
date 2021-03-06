import React from 'react';
import * as ROUTES from '../../constants/routes';

import AuthUserContext from './context';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
                if (!condition(authUser)) {
                    this.props.history.push(ROUTES.SIGN_IN);
                }
            });
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    { authUser => condition(authUser) ? <Component {...this.props} authUser={authUser} /> : null }
                </AuthUserContext.Consumer>
            );
        }
    }
    return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;
