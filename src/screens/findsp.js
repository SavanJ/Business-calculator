import React , {Component,useState} from 'react';
import { View ,TextInput , Text, StyleSheet , Button , TouchableWithoutFeedback , Keyboard} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class findsp extends Component{
    constructor(props){
        super(props);
        this.state={cp:0,result:0,pl:'',checked:'mprofit',mp:'',pr:0,q:''};
    }

    pcalculate=()=>
    {
        var cp1 = parseFloat(this.state.cp);
        var p1 = parseFloat(this.state.mp);
        if(this.state.checked == 'mprofit'){
            
            p = ((cp1)*(p1)/100);
            s = 'price with markup profit of';
        }
        if(this.state.checked == 'gprofit'){
            
            p = (cp1*p1)/(100-p1);
            s = 'price with gross profit of';
        }

        result = cp1 + p;
        result = result.toFixed(3);
        p = p.toFixed(3);
        this.setState({total : result});
        this.setState({pl : s,pr:p,q:'profit'});
        Keyboard.dismiss();
    }
    lcalculate=()=>
    {
        var cp1 = parseFloat(this.state.cp);
        var p1 = parseFloat(this.state.mp);
        if(this.state.checked == 'mprofit'){
            
            p = ((cp1)*(p1)/100);
            s = 'price with markup loss of';
        }
        if(this.state.checked == 'gprofit'){
            
            p = (cp1*p1)/(100+p1);
            s = 'price with gross loss of';
        }

        result = cp1 - p;
        result = result.toFixed(3);
        p = p.toFixed(3);
        this.setState({total : result});
        this.setState({pl : s,pr:p,q:'loss'});
        Keyboard.dismiss();
        // alert(this.state.total);
    }


    render(){
        const { checked } = this.state;
        const user_name = this.props.navigation.getParam('heading');  
      return(
        
        <View style={styles.viewStyle}>
            {/* <StatusBar hidden/> */}
            <Text style={styles.m_h} >
                <Text style={styles.between_h} > {user_name}  </Text>
            </Text>

            <View style={styles.innerStyle} >
                <View style={styles.childStyle1}>
                    <Text style={styles.textStyle}> Cost Price ( C.P ) </Text>
                </View>
                <View style={styles.childStyle2}>
                    <TextInput 
                        keyboardType="numeric"
                        style={styles.input}  
                        placeholder="Enter a value"
                        // value={cp}
                        onChangeText={cp => this.setState({cp}) }
                    />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                
            </View>
            <View style={styles.radiobutton} >
                <View style={styles.leftradio}>
                <Text style={styles.label}> Markup Profit or Loss </Text>
                
                
                <RadioButton
                    value="mprofit"
                    status={checked === 'mprofit' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'mprofit' }); }}
                />
                </View>
                <View style={styles.leftradio}>
                <Text style={styles.label}> Gross Profit or Loss</Text>
                <RadioButton
                    value="gprofit"
                    status={checked === 'gprofit' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'gprofit' }); }}
                />
                </View>
                
                <View style={styles.inputright} >
                <Input 
                label='Profit or loss ( in % )' 
                keyboardType="numeric"  
                // value={this.state.checked == 'mprofit' ? this.state.mp.toString() : this.state.gp.toString()}
                onChangeText={mp => this.setState({mp})}
                />
                </View>
            </View>
            <View style={styles.button} >  
                <View style={styles.leftbutton} >
                    <Button title="Find selling price for loss"  onPress={this.lcalculate}></Button>
                </View>
                <View style={styles.rightbutton} >
                    <Button title="Find selling price for profit" onPress={this.pcalculate}></Button>
                </View>
            </View>
            

            <View> 
                <Text style={ (this.state.q == 'profit') ? styles.profit : styles.loss} > 
                    <Text>
                    { (this.state.q == '') ? '' : `The selling ${this.state.pl} ` } 
                    </Text>
                    <Text style={{fontWeight:'bold'}} >
                    { (this.state.q == '') ? '' : `${this.state.pr}` } 
                    </Text>
                    <Text  >
                    { (this.state.q == '') ? '' : ` is ` } 
                    </Text>
                    <Text style={{fontWeight:'bold'}}  >
                    { (this.state.pl == '') ? '' : `${this.state.total}` } 
                    </Text>
                </Text>
            </View>
            <Text style={styles.m_h} onPress={() => this.props.navigation.navigate('Spdetails')}>
                <Text style={styles.between_h} > 
                    <Text style={{margin:10}} >
                    <Ionicons name="md-information-circle" size={18}  />
                    </Text> 
                </Text>
                <Text style={styles.heading}> Click here to know the difference between</Text>
                <Text style={styles.between_h}> Markup and Gross profit  </Text>
                {/* <Text style={styles.heading}> w.r.t</Text> */}
                {/* <Text style={styles.between_h}> Cost price </Text> */}
                {/* <Text style={styles.heading}> are provided. </Text> */}
            </Text>
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
      margin:10,
      marginTop:20
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




