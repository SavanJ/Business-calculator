import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MenuButton from '../components/MenuButton';
export default class Screen2 extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        {/* <MenuButton navigation={this.props.navigation}/> */}
        <Text style={{ fontSize: 23 }}> Screen 2 </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});