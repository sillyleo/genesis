import React from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView
} from 'react-native';

const Verse = ({ children }) => {
  return (
    <Text>{children}</Text>
  );
};


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>
          <Text>Hello</Text>
          <Verse>123</Verse>
          <Verse>456</Verse>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
