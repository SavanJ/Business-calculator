import React , {Component} from 'react';
import { View , Text, StyleSheet , Image , Button , TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={cp:0,result:0,pl:'',checked:'mprofit',mp:'',pr:0,q:''};
    }
      render(){
      return (
      <View style={styles.outerlayer} >
            <View style={styles.innerleftlayer} >
                <View style={styles.textStyle} >
                    <Button title={this.props.name}  
                    onPress={() => this.props.navigation.navigate(this.props.nav , {
                      heading:this.props.name
                    })} >  </Button>
                </View>
            </View>
            <View style={styles.innerrightlayer} >
                <Image source={require('../../assets/images.png')} style={styles.imageStyle} ></Image>
            </View>
        </View>
      );    
    }	
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

// export default Homepage;
export default withNavigation(Homepage);
