import React from 'react';

interface GuardRoutesProps {
  children?: React.ReactNode
}

//TODO: should accepts only gaurded routesrs
const GuardRoutes: React.FC<GuardRoutesProps> = ({ children }: GuardRoutesProps) => {

  return (
    <>
      {children}
    </>
  );
};

export default GuardRoutes;
