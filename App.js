/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {View} from 'react-native';
import React from 'react';
import Reanimated, {useAnimatedStyle} from 'react-native-reanimated';

const App = () => {
  const style = useAnimatedStyle(() => ({
    width: 200,
    height: 200,
    backgroundColor: 'red',
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Reanimated.View style={style} />
    </View>
  );
};

export default App;
