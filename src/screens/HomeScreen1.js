import React , {Component} from 'react';
import { View , Image , Text, StyleSheet , Button , TouchableOpacity,FlatList} from 'react-native';
import Homepage from '../components/Homepage';

	const HomeScreen = ({navigation})  => {

		const friends = [
			{ name : 'Profit and loss' , navigation: 'pl'},
			{ name : 'Find markup and gross selling price'  , navigation: 'findsp'},
			{ name : 'Find cost price'  , navigation: 'findcp'},
			{ name : 'Find discounted amount'  , navigation: 'discount'},
			{ name : 'Find simple interest'  , navigation: 'simpleinterest'},
			{ name : 'Find compound interest'  , navigation: 'compoundinterest'},
			{ name : 'Find EMI'  , navigation: 'emi'},
			{ name : 'Break-Even point'  , navigation: 'breakeven'},
			{ name : 'Saving account calculation'  , navigation: 'saving'},
			
			];

  return (


  	<View style={styles.mainlayer} >
		<FlatList 	
			keyExtractor={friend => friend.name}
			data={friends} 
			renderItem={(value) => {
		return (

				<Homepage name={value.item.name} nav={value.item.navigation} />
			);
		}}
	/>
		
  	</View>

  	);
};

const styles = StyleSheet.create({
	textStyle:{
		textAlign:'center',
		// borderWidth:2,
		// borderColor:'red',
		fontSize:30,
		// alignItems:'center'
		marginRight:10,
		marginTop:8
	},
	imageStyle:{
		height:70,
		width:70,
		// marginTop:5,
		// borderWidth:1,
		// borderColor:'orange',
		// marginLeft:2.5
	},	
  text: {
    fontSize: 30
  },
  mainlayer:{
	  flexDirection:'column',
	  borderColor:'lightgrey',
	  borderWidth:1
  },
  outerlayer:{
	//    borderWidth:3,
	//    borderColor:'black',
	   flexDirection:'row',
	   height:70
  },
  innerleftlayer:{
		// borderWidth:2,
		// borderColor:'green',
		flex:4,
		padding:10,
		paddingRight:0
  },
  innerrightlayer:{
		// borderWidth:2,
		// borderColor:'blue',
		flex:1
  },
});

export default HomeScreen;

