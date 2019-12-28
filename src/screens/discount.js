import React , {Component,useState} from 'react';
import { View ,TextInput , Text, StyleSheet , Button , TouchableWithoutFeedback , Keyboard} from 'react-native';


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class discount extends Component{
    constructor(props){
        super(props);
        this.state={mpr:0,d:0,result:0,pl:''};
    }

    calculate=()=>
    {
        var mrp1 = parseFloat(this.state.mrp);
        var d1 = parseFloat(this.state.d);
        // var sp1 = this.state.sp;
        // var cp1 = cp1.toFixed(2);
        // var sp1 = sp1.toFixed(2);

        ans = mrp1 - ((mrp1)*(d1)/100);
        result = mrp1-ans;
        result = result.toFixed(3);
        this.setState({total : result});
        this.setState({pl : 'price with profit'});
        Keyboard.dismiss();
        // alert(this.state.total);
    }

    // check=()=>{
    //     if(this.state.cp == 0 && this.state.p == 0){
    //         return '';
    //     }   
    //     else{
    //         return `The selling price ( S.P) will be ${this.state.total}%`;
            
    //     }
    // }

    render(){
        const user_name = this.props.navigation.getParam('heading');  
      return(
        
        <View style={styles.viewStyle}>

<Text style={styles.m_h} >
                <Text style={styles.between_h} > {user_name}  </Text>
            </Text>

            <View style={styles.innerStyle} >
                <View style={styles.childStyle1}>
                    <Text style={styles.textStyle}> Market Retail Price ( M.R.P ) </Text>
                </View>
                <View style={styles.childStyle2}>
                    <TextInput 
                        keyboardType="numeric"
                        style={styles.input}  
                        placeholder="Enter a value"
                        // value={cp}
                        onChangeText={mrp => this.setState({mrp}) }
                    />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                
            </View>
            <View style={styles.innerStyle} >
                <View style={styles.childStyle1}>
                    <Text style={styles.textStyle}> Discount ( in % ) </Text>
                </View>
                <View style={styles.childStyle2}>
                    <TextInput 
                        keyboardType="numeric"
                        style={styles.input}  
                        placeholder="Enter a value"
                        // value={sp}
                        onChangeText={d => this.setState({d})}
                    />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                
            </View>
            <View style={styles.button} >  
                <View style={styles.leftbutton} >
                    <Button title="Find discounted amount" onPress={this.calculate}></Button>
                </View>
                {/* <View style={styles.rightbutton} >
                    <Button title="Find cost price for profit" onPress={this.pcalculate}></Button>
                </View> */}
            </View>
            

            <View> 
                <Text style={ (this.state.pl == 'price with profit') ? styles.profit : styles.loss} > 
                    { (this.state.pl == '') ? '' : `The discounted amount will be ${this.state.total}` } 
                </Text>
            </View>
        </View>
        
        

        );
    }
};

const styles = StyleSheet.create({ 
    m_h:{
        fontSize:20,
        marginTop:10,
        marginBottom:10,
        textAlign:'center'
    },
    heading:{

    },
    between_h:{
        fontWeight:'bold',
        textAlign:'center'
    },
    profit:{
        color:'green',
        fontSize:18,
        marginTop:20,
        marginBottom:30,
        alignSelf:'center',
        textAlign:'center'
        
    },
    loss:{
        color:'#ee4444',
        fontSize:18,
        marginTop:20,
        marginBottom:30,
        alignSelf:'center',
        textAlign:'center'
    },
  viewStyle: {
      borderWidth:1,
      borderColor:'grey',
      flexDirection:'column',
      margin:5
  },
  innerStyle:{
    // borderColor:'orange',
    // borderWidth:2
    flexDirection:'row'
  },    
  childStyle1 : {
    //   borderColor:'blue',
    //   borderWidth:2,
      flex:1,
      height:100
  },
  childStyle2 : {
    // borderColor:'black',
    // borderWidth:2,
    flex:2,
    height:100
    },
//   childStyle3 : {
//     borderColor:'green',
//     borderWidth:2,
//     flex:1,
//     height:100
//     }
textStyle:{
    fontSize:18,
    marginTop:25,
    textAlign:'center'
},
input: {
    marginTop:40,
    // borderColor:'black',
    borderLeftColor:'white',
    borderTopColor:'white',
    borderRightColor:'white',
    borderWidth:1,
    fontSize:18,
    textAlign:'center',
    marginRight:5   
  },
  button:{
      margin:10,
      marginTop:10,
      flexDirection:'row'
  },
  rightbutton:{
    flex:1,
    
  },    
  leftbutton:{
    flex:1,
    marginRight:10
  }
});


