import React from 'react';

import { View, StatusBar } from 'react-native';

import AppProvider from './hooks';
import Routes from './routes';

const AppIndex: React.FC = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#E5e5e5' }}>
        <AppProvider>
          <StatusBar barStyle="light-content" backgroundColor="#312e38" />
          <Routes />
        </AppProvider>
      </View>
    </>
  );
};

export default AppIndex;
