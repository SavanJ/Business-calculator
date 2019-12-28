import React, { Component } from 'react';
import { View, StyleSheet  , Text} from 'react-native';
import Constants from 'expo-constants';
import { Button , CheckBox , Input } from 'react-native-elements';

import '@expo/vector-icons';

export default class Spdetails extends Component {

  render() {
    return (
      <View style={styles.container}  >

            <Text style={styles.textStyle} > 
                Lets understand both terms by taking one example.
            </Text>
            {/* <Text style={styles.textStyle} > 
                Let's assume the Cost price ( C.P ) of any item is ₹80 and Selling price ( S.P ) is ₹100.
            </Text> */}
            <Text style={styles.textStyle} > 
                Let's assume your CP of one item is 80 and profit of 25%. So eventually your SP will be of
                100. But w.r.t SP the profit is 20% .
            </Text>
            <Text style={styles.stextStyle} > 
                Now there is a profit of 25% [ (S.P - C.P) * 100 / CP ] w.r.t C.P. 
            </Text>
            <Text style={styles.stextStyle} > 
                This is called MARKUP PROFIT.
            </Text>
            <Text style={styles.stextStyle} > 
                Now there is a profit of 20% [ (S.P - C.P) * 100 / SP ] w.r.t S.P.
            </Text>
            <Text style={styles.stextStyle} > 
                This is called GROSS PROFIT.
            </Text>
            

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'left',
    // justifyContent: 'left',
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
  },
  textStyle: {
    padding:10,
    fontSize:18
  },
  stextStyle: {
      fontWeight:'bold',
    padding:10,
    fontSize:18
  }
});