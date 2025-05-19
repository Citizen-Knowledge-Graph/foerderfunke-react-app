import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserExistsStatus } from './hooks/useUserExistsStatus';

const InfoPageRouter = () => {
  const userExists = useUserExistsStatus();

  // once we know, render a <Navigate> to the right path
  return (
    <Navigate
      to={userExists
        ? "/returning-user"
        : "/privacy-info"
      }
      replace
    />
  );
};

export default InfoPageRouter;