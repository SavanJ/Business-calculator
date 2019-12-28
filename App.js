import React, { Component } from 'react';
import { View, Image, TouchableOpacity , Platform , Dimensions } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { StatusBar } from 'react-native';
import findsp from './src/screens/findsp';
import findcp from './src/screens/findcp';
import Breakeven from './src/screens/breakeven';
import Compoundinterest from './src/screens/compoundinterest';
import discount from './src/screens/discount';
import Emi from './src/screens/emi';
import Spdetails from './src/screens/sp_detail';
import pl from './src/screens/pl';
import saving from './src/screens/saving';
import Screen2 from './src/screens/Screen2';
import simpleinterest from './src/screens/simpleinterest';
import MenuDrawer from './src/components/MenuDrawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen1';
import inquiry from './src/screens/inquiry';

const WIDTH = Dimensions.get('window').width;

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return ( 
    <View style={{ flexDirection: 'row',marginBottom:20 , marginLeft:15 }}>
      <StatusBar hidden/>
        <TouchableOpacity onPress={this.toggleDrawer}>
            <Ionicons
                name="md-menu"
                color="white"
                size={40}
                // style={styles.menuIcon}
                // onPress={this.toggleDrawer}
            />
        </TouchableOpacity>
      </View>
    );
  }
}
const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  },
  findsp: {
    screen: findsp,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  },
  findcp: {
    screen: findcp,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  },
  emi: {
    screen: Emi,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  },
  discount: {
    screen: discount,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  },
  compoundinterest: {
    screen: Compoundinterest,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  },
  breakeven: {
    screen: Breakeven,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  },
  pl: {
    screen: pl,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  },
  simpleinterest: {
    screen: simpleinterest,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  },
  saving: {
    screen: saving,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  },
  Spdetails : {
    screen : Spdetails
  }

});

const secondActivity_StackNavigator = createStackNavigator({
  Screen2: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  }
})

const inquiry_related = createStackNavigator({
  inquiry: {
    screen: inquiry,
    navigationOptions: ({ navigation }) => ({
      title: 'Business Calculator',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#29abe2',
        height:25,
      },
      headerTitleStyle:{
        color:'white',
        marginBottom:25,
      },
      headerTintColor: 'White',
    }),
  }
})
 
const DrawerConfig = {
  drawerWidth : WIDTH*0.83,
  contentComponent:({navigation}) => {
    return ( <MenuDrawer navigation={navigation}/> )
  }
}
const Drawer = createDrawerNavigator({
  Screen1: {
    screen: FirstActivity_StackNavigator, 
  },
  Screen2: {
    screen: secondActivity_StackNavigator, 
  },
  Screen3: {
    screen: inquiry_related 
  },

  
},
DrawerConfig
);
 
const DrawerNavigatorExample = createStackNavigator({
  Drawer: { screen: Drawer, navigationOptions: { title : null } },
});
export default createAppContainer(Drawer);