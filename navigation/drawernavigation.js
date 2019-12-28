import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator} from 'react-navigation-drawer';
 import  {createAppContainer } from 'react-navigation';
import  Homescreen from '../src/screens/Homescreen';
import  listscreen from '../src/screens/listscreen';
// import  listscreen from '../src/screens/listscreen';
// import  listscreen from '../src/screens/listscreen';
// import  listscreen from '../src/screens/listscreen';
const DrawerNavigator = createDrawerNavigator({
    Home : {
        screen : Homescreen
    },  
    List : {
        screen : listscreen
    },
});

export default createAppContainer(DrawerNavigator);