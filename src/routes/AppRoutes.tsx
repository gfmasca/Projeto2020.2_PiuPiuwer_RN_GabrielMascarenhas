import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import TabsRoutes from './TabsRoutes';
import Feed from '../pages/Feed/index';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Feed" component={Feed} />
    </Navigator>
  );
}

export default AppRoutes;