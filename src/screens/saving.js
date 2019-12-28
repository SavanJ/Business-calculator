import React , {Component,useState} from 'react';
import { View , Picker ,TextInput , Text, StyleSheet , Button , TouchableWithoutFeedback , Keyboard} from 'react-native';
import { Input } from 'react-native-elements';
import Constants from 'expo-constants';
import '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class saving extends Component{
    constructor(props){
        super(props);
        this.state={result:'',i:'',y:'',flag:1,d:'',o:'y', option:'Final' , compounded:'12',fv:'',
        checked:'mprofit',periodi:'monthly',periody:'monthly',};
    }  
    
    clear = () =>{
        this.setState({result:'',i:'',y:'',flag:1,d:'',o:'y', option:'Final' , compounded:'12',fv:'',
        checked:'mprofit',periodi:'monthly',periody:'monthly'});
    }

    final = ()=>{

        var d1 = parseFloat(this.state.d);
        var r1 = parseFloat(this.state.i);
        var t1 = parseFloat(this.state.y);
        var n1 = parseFloat(this.state.compounded);

        // i = r , y = t

        if(this.state.periodi == 'monthly' && this.state.periody == 'monthly'){
            r1 = r1*12/(100);
            t1 = t1/12;
            // alert('gdfgdfgd')
        }
        if(this.state.periodi == 'monthly' && this.state.periody == 'yearly'){
            r1 = r1*12/(100);
        }
        if(this.state.periodi == 'yearly' && this.state.periody == 'monthly'){
            r1 = r1/100;
            t1 = t1/12;
        }
        if(this.state.periodi == 'yearly' && this.state.periody == 'yearly'){
            r1 = i1/100;
        }
        temp0 = (1 + (r1/n1));
        temp = (n1*t1);
        temp1 = Math.pow(temp0,temp) - 1;
        temp2 = (temp1*n1)/r1;
        ans = d1*temp2*temp0;
        ans = ans.toFixed(2);
        // alert(ans);
        this.setState({result : ans})

    }
    principal = ()=>{

        var fv1 = parseFloat(this.state.fv);
        var r1 = parseFloat(this.state.i);
        var t1 = parseFloat(this.state.y);
        var n1 = parseFloat(this.state.compounded);

        // i = r , y = t
        // alert(fv1 + " " + r1 + " " + t1 + " " + n1 )

        if(this.state.periodi == 'monthly' && this.state.periody == 'monthly'){
            r1 = r1*12/(100);
            t1 = t1/12;
            // alert('gdfgdfgd')
        }
        if(this.state.periodi == 'monthly' && this.state.periody == 'yearly'){
            r1 = r1*12/(100);
        }
        if(this.state.periodi == 'yearly' && this.state.periody == 'monthly'){
            r1 = r1/100;
            t1 = t1/12;
        }
        if(this.state.periodi == 'yearly' && this.state.periody == 'yearly'){
            r1 = r1/100;
        }
        temp0 = (1 + (r1/n1));
        // alert(temp0)
        temp = (n1*t1);
        temp1 = Math.pow(temp0,temp) - 1;
        // alert(temp0 + " " + temp + " " + temp1)
        temp2 = (temp1*n1)/r1;
        ans = fv1/(temp2*temp0);
        ans = ans.toFixed(2);
        // alert(ans);
        this.setState({result : ans})

    }
    
    
    render(){

        const { periodi } = this.state;
        const { periody } = this.state;
        const user_name = this.props.navigation.getParam('heading');  
      return(
        <DismissKeyboard>
        <View style={styles.viewStyle}>

            <Text style={styles.m_h} >
                <Text style={styles.between_h} > {user_name}  </Text>
            </Text>
            <View 
            style={{alignItems:'center' , borderRadius:10, backgroundColor:'lightgrey', color:'red',
            borderWidth:1 , borderColor:'grey' , marginHorizontal:10}} >
                <Picker
                selectedValue={this.state.option}
                style={{height: 50, width: 300}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({option: itemValue})
                }>
                <Picker.Item label="Find Final Value" value="Final" />
                <Picker.Item label="Find Principal Amount" value="Principal" />
                </Picker>
            </View>

        {this.state.option == 'Final' ? (
        <Text style={styles.m_h} >
            <Text style={styles.between_h} >{this.state.result == '' ? '' : 'Final amount is - '} </Text>
            <Text style={styles.heading}>{this.state.result == '' ? '' : `${this.state.result}`}</Text>
        </Text>
        ):(
        <Text style={styles.m_h} >
            <Text style={styles.between_h} >{this.state.result == '' ? '' : 'Principal amount is - '} </Text>
            <Text style={styles.heading}>{this.state.result == '' ? '' : `${this.state.result}`}</Text>
        </Text>
        )
        }
            

            <View style={styles.innerStyle} >
                {this.state.option == 'Final' ? (
                    <View style={styles.innerleft} > 
                        <Input label='Deposit'
                        keyboardType="numeric" 
                        value={this.state.d.toString()}
                        // onChangeText={this.eacalculate}
                        onChangeText={d => this.setState({d})}
                    />
                 </View>
                    ) : (
                    <View style={styles.innerleft} > 
                        <Input label='Final Value'
                        keyboardType="numeric" 
                        value={this.state.fv.toString()}
                        // onChangeText={this.eacalculate}
                        onChangeText={fv => this.setState({fv})}
                        />
                     </View>   
                    )
                    }
                
                 <View style={styles.leftbutton}  >
                     <Text style={{fontSize:14 , fontWeight:'bold',marginBottom:8}} > Deposit Frequency </Text>
                    <View 
                        style={{alignItems:'center' , borderRadius:10,
                        borderWidth:1 , borderColor:'grey'}} >
                        <Picker
                        selectedValue={this.state.compounded}
                        style={{height: 30, width: 150}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({compounded: itemValue})
                        }>
                        <Picker.Item label="Monthly" value="12" />
                        <Picker.Item label="Yearly" value="1" />
                        <Picker.Item label="Semi - Yearly" value="2" />
                        <Picker.Item label="Quarterly" value="4" />
                        <Picker.Item label="Semi - Monthly" value="24" />
                        <Picker.Item label="Weekly" value="52" />
                        <Picker.Item label="Daily" value="365" />
                        </Picker>
                    </View>
                    {/* <Button title="Net amount" onPress={this.a}
                    ></Button> */}
                </View>
            </View>
            <View style={styles.innerStyle} >

            </View>
                <View style={styles.radiobutton} >
                    <View style={styles.inputright} >
                        <Input label='Rate of interest ( in % )' 
                        keyboardType="numeric" 
                        value={this.state.i.toString()}
                        // onChangeText={this.iacalculate}
                        onChangeText={i => this.setState({i})}
                        />
                    </View>
                    <View style={styles.leftradio}>
                    <Text style={styles.label}> Monthly </Text>
                    <RadioButton
                        value="monthly"
                        status={periodi === 'monthly' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ periodi: 'monthly' }); }}
                    />
                    </View>
                    <View style={styles.leftradio}>
                    <Text style={styles.label}> Yearly </Text>
                    <RadioButton
                        value="yearly"
                        status={periodi === 'yearly' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ periodi: 'yearly' }); }}
                    />
                    </View>
                </View>
            <View style={styles.innerStyle} >

            </View>
            <View style={styles.radiobutton} >
                    <View style={styles.inputright} >
                        <Input label='Time period ' 
                        keyboardType="numeric" 
                        value={this.state.y.toString()}
                        // onChangeText={this.yacalculate}
                        onChangeText={y => this.setState({y})}
                        />
                    </View>
                   <View style={styles.leftradio}>
                    <Text style={styles.label}> Monthly </Text>
                    <RadioButton
                        value="monthly"
                        status={periody === 'monthly' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ periody: 'monthly' }); }}
                    />
                    </View>
                    <View style={styles.leftradio}>
                    <Text style={styles.label}> Yearly </Text>
                    <RadioButton
                        value="yearly"
                        status={periody === 'yearly' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ periody: 'yearly' }); }}
                    />
                    </View>
                </View>
            
            <View style={styles.button} >  
            {/* {this.state.o == 'y' ? (
                <View style={styles.leftbutton}  >
                <Button title="Find Emi" onPress={this.calculate}
                ></Button>
            </View>
            ) : null} */}
            </View>
            <View style={styles.button} >  
                {this.state.option == 'Final' ? (
                    <View style={styles.leftbutton}  >
                    <Button title="Find Final amount" onPress={this.final}
                    ></Button>
                </View>
                ) : (
                    <View style={styles.leftbutton}  >
                    <Button title="Find Principal amount" onPress={this.principal}
                    ></Button>
                </View>
                )}
                <View style={styles.leftbutton} >
                    <Button title="Clear all" color='#ee4444' onPress={this.clear} ></Button>
                </View>
                {/* <View style={styles.leftbutton} >
                    <Button title="Monthly Interest" color='green' onPress={this.m} ></Button>
                </View> */}
            </View>
            {/* <View style={styles.button} >  
                <View style={styles.leftbutton} >
                    <Button title="Find rate of interest"  onPress={this.lcalculate}></Button>
                </View>
                <View style={styles.rightbutton} >
                    <Button title="Find final value" onPress={this.pcalculate}></Button>
                </View>
            </View> */}
            
            
            <View> 
                {/* <Text style={ (this.state.pl == 'price with profit') ? styles.profit : styles.loss} > 
                    { (this.state.pl == '') ? '' : `The selling ${this.state.pl} will be ${this.state.total}` } 
                </Text> */}
            </View>
        </View>
        </DismissKeyboard>
        

        );
    }
};

const styles = StyleSheet.create({ 
    innerStyle:{
        // borderWidth:2,
        // borderColor:'red',
        marginTop:10,
        flexDirection:'row',
        marginHorizontal:10
    },
    innerleft:{
        // borderWidth:2,
        // borderColor:'green',
        flex:1,
        marginRight:5
    },
    inneright:{
        // borderWidth:2,
        // borderColor:'blue',
        flex:1,
        marginLeft:5
    },
    note:{
        // justifyContent:'flex-start',
        color:'red',
        padding:10,
        fontSize:18,
        // borderWidth:2,
        margin:20,
        marginTop:10,
        marginBottom:10
    },
    m_h:{
        fontSize:20,
        marginTop:10,
        marginBottom:10,
        textAlign:'center',
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


