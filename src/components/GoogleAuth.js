import React, { useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = props => {
  const auth = useRef('');
  const { signIn, signOut } = props;
  const onAuthChange = useCallback(
    isSignedIn => {
      if (isSignedIn) {
        signIn(auth.current.currentUser.get().getId());
      } else {
        signOut();
      }
    },
    [signIn, signOut]
  );
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '123074671077-5cn55vmvft307obdb3fab7eovs9o95dq.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, [onAuthChange]);

  const onSignInClick = () => {
    auth.current.signIn();
  };

  const onSignOutClick = () => {
    auth.current.signOut();
  };

  const renderAuthButton = () => {
    if (props.isSignedIn === null) {
      return '';
    }

    if (props.isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui button">
          <i className="google icon" />
          sign out
        </button>
      );
    }

    return (
      <button onClick={onSignInClick} className="ui button">
        <i className="google icon" />
        sign in
      </button>
    );
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
