import React , {Component,useState} from 'react';
import { View ,TextInput , Text, StyleSheet , Button , TouchableWithoutFeedback , Keyboard} from 'react-native';
import Constants from 'expo-constants';
import { CheckBox } from 'react-native-elements';
import '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { Input } from 'react-native-elements';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class findcp extends Component{
    constructor(props){
        super(props);
        this.state={sp:0,p:0,result:0,pl:'',checked:'ngst',g:0};
    }

    // state = {
    //     checked: false,
    //   };
    clear = () =>{
        this.setState({ sp:0 , p:0 , result:0,pl:'' ,checked:'ngst' ,g:0})
    }
    pcalculate=()=>
    {
        var sp1 = parseFloat(this.state.sp);
        var p1 = parseFloat(this.state.p);
        var g1 = parseFloat(this.state.g);
        temp = 100+p1;
        result = ((sp1)*100)/(temp);
        // if(this.state.checked == 'gst'){
            result = result + (result*g1/100);
        // }   
        result = result.toFixed(3);
        this.setState({total : result});
        this.setState({pl : 'price with profit'});
        Keyboard.dismiss();

        
    }
    lcalculate=()=>
    {
        var sp1 = parseFloat(this.state.sp);
        var p1 = parseFloat(this.state.p);
        var g1 = parseFloat(this.state.g);
        temp = 100-p1;
        result = ((sp1)*100)/(temp);
        // if(this.state.checked == 'gst'){
            result = result + (result*g1/temp);
        // }
        result = result.toFixed(3);
        this.setState({total : result});
        this.setState({pl : 'price with loss'});
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
                    <Text style={styles.textStyle}> Selling Price ( S.P ) </Text>
                </View>
                <View style={styles.childStyle2}>
                    <TextInput 
                        keyboardType="numeric"
                        style={styles.input}  
                        placeholder="Enter a value"
                        // value={cp}
                        onChangeText={sp => this.setState({sp}) }
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
                
            </View>
            {/* <View style={styles.radiobutton} >
                <View style={styles.leftradio}>
                <Text style={styles.label}> Without GST </Text>
                <RadioButton
                    value="ngst"
                    status={checked === 'ngst' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'ngst' }); }}
                />
                </View>
                <View style={styles.leftradio}>
                <Text style={styles.label}> GST </Text>
                <RadioButton
                label="GST"
                    value="gst"
                    status={checked === 'gst' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'gst' }); }}
                />
                </View>
                {this.state.checked=='gst' ? (
                <View style={styles.inputright} >
                <Input 
                label='GST value ( in % )' 
                keyboardType="numeric"  
                onChangeText={g => this.setState({g})}
                />
                </View>
                ) : null }

            </View> */}
            <View style={styles.button} >  
                <View style={styles.leftbutton} >
                    <Button title="Find cost price for loss"  onPress={this.lcalculate}></Button>
                </View>
                <View style={styles.rightbutton} >
                    <Button title="Find cost price for profit" onPress={this.pcalculate}></Button>
                </View>
            </View>
    

            <View> 
                <Text style={ (this.state.pl == 'price with profit') ? styles.profit : styles.loss} > 
                    { (this.state.pl == '') ? '' : `The cost ${this.state.pl} will be ${this.state.total}` } 
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


