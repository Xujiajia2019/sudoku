import React, { Component } from 'react';

import { 
  StyleSheet,
  StatusBar,
  UIManager,
  View 
} from 'react-native';

import Main from './components/Containers';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <StatusBar backgroundColor='transparent' animated={true} translucent={true} barStyle="light-content"/>
        <Main />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App