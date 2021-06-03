import React, { useEffect, useState, useRef } from 'react';

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const auth = useRef('');

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
          setIsSignedIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = () => {
    setIsSignedIn(auth.current.isSignedIn.get());
  };

  const onSignInClick = () => {
    auth.current.signIn();
  };

  const onSignOutClick = () => {
    auth.current.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    }

    if (isSignedIn) {
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

export default GoogleAuth;
