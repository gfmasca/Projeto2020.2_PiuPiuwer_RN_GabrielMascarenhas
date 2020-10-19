import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

const Routes: React.FC = () => {

  const { token } = useAuth();

  return (
    <NavigationContainer>
      {
        !token 
          ? <AuthRoutes />
          : <AppRoutes />
      }
    </NavigationContainer>
  );
}

export default Routes;