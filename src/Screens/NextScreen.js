import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButtonHandler from '../BackButtonHandler';

class NextScreen extends Component {
  componentDidMount() {
    BackButtonHandler.mount(true, this.props.navigation);
  }

  componentWillUnmount() {
    BackButtonHandler.unmount();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>NextScreen</Text>
      </View>
    );
  }
}
export default NextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
