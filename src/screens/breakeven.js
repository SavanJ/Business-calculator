import React , {Component,useState} from 'react';
import { View ,TextInput , Text, StyleSheet , Button , TouchableWithoutFeedback , Keyboard} from 'react-native';
import Constants from 'expo-constants';
import { CheckBox } from 'react-native-elements';
import '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { Input } from 'react-native-elements';
// import NumberFormat from 'react-number-format';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class Breakeven extends Component{
    constructor(props){
        super(props);
        this.state={fc:'',vc:'',result:'',sp:'',checked:'margin',m:'',flag:0,pr:''};
    }
    clear = () =>{
        this.setState={fc:'',vc:'',result:'',sp:'',checked:'margin',m:'',flag:0,pr:0};
    }
    calculate=()=>
    {
        var sp1 = parseFloat(this.state.sp);
        var fc1 = parseFloat(this.state.fc);
        var vc1 = parseFloat(this.state.vc);
        var m1 = parseFloat(this.state.m);

        if(this.state.checked == 'spvc'){
            temp = sp1-vc1;
            total = (fc1/temp).toFixed(2);
            temp1 = total * sp1;
            // alert(temp1)
            temp1 = 'of worth ' + temp1 ;
            this.setState({result : total , pr:temp1, flag:1})
        }
        else{
            total = fc1/m1.toFixed(2);
            // alert(total)
            // temp1 = total * sp1;
            // alert(this.state.sp)
            this.setState({result : total , pr:'',flag:1})
        }

        Keyboard.dismiss();        
    }
    render(){

        const { checked } = this.state;
        const user_name = this.props.navigation.getParam('heading');  
        
      return(
        
        <View style={styles.viewStyle}>

<Text style={styles.m_h} >
                <Text style={styles.between_h} > {user_name}  </Text>
            </Text>

            <View style={styles.innerStyle} >
                <View style={styles.childStyle1}>
                    <Text style={styles.textStyle}> Total fixed costs </Text>
                </View>
                <View style={styles.childStyle2}>
                    <TextInput 
                        keyboardType="numeric"
                        style={styles.input}  
                        placeholder="Enter a value"
                        // value={cp}
                        onChangeText={fc => this.setState({fc}) }
                    />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                
            </View>
            
            {/* <View style={styles.innerStyle} >
                <View style={styles.childStyle1}>
                    <Text style={styles.textStyle}> Profit or Loss ( in % ) </Text>
                </View>
                
                <View style={styles.childStyle2}>
                    <TextInput 
                        keyboardType="numeric"
                        style={styles.input}  
                        placeholder="Enter a value"
                        // value={sp}
                        onChangeText={p => this.setState({p})}
                    />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                
            </View> */}
            <View style={styles.radiobutton} >
                
                <View style={styles.leftradio}>
                    <Text style={styles.label}> Margin </Text>
                    <RadioButton
                    label="margin"
                        value="margin"
                        status={checked === 'margin' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'margin' }); }}
                    />
                </View>
                <View style={styles.leftradio}>
                    <Text style={styles.label}> Selling price and variable cost </Text>
                    <RadioButton
                        value="spvc"
                        status={checked === 'spvc' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'spvc' }); }}
                    />
                </View>

            </View>
            {this.state.checked=='spvc' ? (
                <View style={{flexDirection:'row' , marginVertical:10}} >
                    <View>
                        <Input 
                        label='Selling price per unit' 
                        keyboardType="numeric"  
                        onChangeText={sp => this.setState({sp})}
                        />
                    </View>
                    <View>
                        <Input 
                        label='Variable Cost per unit' 
                        keyboardType="numeric"  
                        onChangeText={vc => this.setState({vc})}
                        />
                    </View>
                </View>
            ) : 
            (
                <View style={{flexDirection:'row' , marginVertical:10}} >
                    <Input 
                    label='Net margin per unit' 
                    keyboardType="numeric"  
                    onChangeText={m => this.setState({m})}
                    />
                </View>
            )
            }
            <View style={styles.button} >  
                <View style={styles.leftbutton} >
                    <Button title="Break even point"  onPress={this.calculate}></Button>
                </View>
                {/* <View style={styles.rightbutton} >
                    <Button title="Find cost price for profit" onPress={this.pcalculate}></Button>
                </View>${this.state.result*parseFloat(this.state.sp)} */}
            </View>
    

            <View> 
                <Text style={ styles.profit} > 
                    { (this.state.flag == 0) ?  
                    '' : 
                    `Break-even point will be at selling ${this.state.result} units ${this.state.pr}` 
                    } 
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
  },    
  label:{
    fontWeight:'bold',
    // borderWidth:2,
    padding:8
  },
  radiobutton:{
    // borderColor:'red',
    // borderWidth:2
    flexDirection:'row'
  },
  leftradio:{
    flex:1
    // borderColor:'blue',
    // borderWidth:2
  },
  rightradio:{
    flex:1
    // borderColor:'green',
    // borderWidth:2
  },
  inputright:{
    flex:2
  }
});


