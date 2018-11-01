import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BackButtonHandler from '../BackButtonHandler';

class HomeScreen extends Component {
  componentDidMount() {
    BackButtonHandler.mount(false, this.props.navigation);
  }

  componentWillUnmount() {
    BackButtonHandler.unmount();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button
          title={'Go to Next Screen'}
          onPress={() => {
            this.props.navigation.navigate('Next');
          }}
        />
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
