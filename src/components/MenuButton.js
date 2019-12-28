
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MenuButton extends React.Component {

    constructor(props){
        super(props);
    }

  render(){
  return(
    <Ionicons
            name="md-menu"
            color="red"
            size={32}
            style={styles.menuIcon}
            onPress={()=> this.props.navigation.toggleDrawer()}
    >

    </Ionicons>
  );
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    zIndex : 9,
    position:'absolute',
    top:0,
    left:20
  }
});
