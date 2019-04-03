import React from 'react';

const authContext =  React.createContext({
  authentication: false,
  login: () => {}
});

export default authContext;
