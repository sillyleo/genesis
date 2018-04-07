import React from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView
} from 'react-native';
// redux

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';


const Verse = ({ children }) => {
  return (
    <Text>{children}</Text>
  );
};


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView>
        <ScrollView>
          <View>
          <Text>
            <Text>Hello</Text>
            <Verse>123</Verse>
            <Verse>456</Verse>
          </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
