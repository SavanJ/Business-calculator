import React , {Component,useState} from 'react';
import { View ,TextInput , Text, StyleSheet , Button , TouchableWithoutFeedback , Keyboard} from 'react-native';
import { Input } from 'react-native-elements';
import Constants from 'expo-constants';
import '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class Emi extends Component{
    constructor(props){
        super(props);
        this.state={p:'',i:'',y:'',flag:1,e:'',o:'y',checked:'mprofit',periodi:'monthly',periody:'monthly',};
    }  
    
    clear = () =>{
        this.setState({ p:'' , y:'' , i:'',flag:1 , e:'',o:'y'})
    }

    a = ()=>
    {
        var e = parseFloat(this.state.e);
        var p1 = parseFloat(this.state.p);
        var y1 = parseFloat(this.state.y);
        

        if(this.state.periodi == 'monthly' && this.state.periody == 'monthly'){

            temp = y1*e;
            temp1 = temp - p1;
        }
        if(this.state.periodi == 'monthly' && this.state.periody == 'yearly'){

            temp = 12*y1*e;
            temp1 = temp - p1;
        }
        if(this.state.periodi == 'yearly' && this.state.periody == 'monthly'){

            temp = y1*e;
            temp1 = temp - p1;
        }
        if(this.state.periodi == 'yearly' && this.state.periody == 'yearly'){

            temp = 12*y1*e;
            temp1 = temp - p1;
        }
        // ans = 'savan'
        alert('Total interest payable - ' + temp1.toFixed(2)  + "\n" + "\n" 
        + 'Principal amount - ' + p1 + "\n" + "\n" 
        + 'Total payment - ' + temp );
    }

    calculate = ()=>{

        var p1 = parseFloat(this.state.p);
        var y1 = parseFloat(this.state.y);
        var i1 = parseFloat(this.state.i);
        // var c1 = parseFloat(this.state.c);
        if(this.state.periodi == 'monthly' && this.state.periody == 'monthly'){
            temp4 = i1/100;    
        }
        if(this.state.periodi == 'monthly' && this.state.periody == 'yearly'){
            temp4 = i1/100;
            y1 = 12*y1;
        }
        if(this.state.periodi == 'yearly' && this.state.periody == 'monthly'){
            temp4 = i1/(100*12);
            // y1 = 12*y1;
        }
        if(this.state.periodi == 'yearly' && this.state.periody == 'yearly'){
            temp4 = i1/(100*12);
            y1 = 12*y1;
        }

        
        temp0 = p1*temp4;
        temp = 1+temp4;
        temp1 = Math.pow(temp,y1);
        temp2 = temp1 - 1;
        temp3 = (temp0*temp1)/(temp2);
        temp3 = temp3.toFixed(2);
        
        f = this.state.flag - 1;
        // this.setState({flag : f , y:ans});
        this.setState({e:temp3 , flag:f , o:'y'});
    }

    pacalculate = (e) =>{
        // alert(this.state.flag) ;
        if(this.state.flag != 0 && this.state.flag > 0 ){
            this.setState({p : e});
        }
        else
        {
            if(e != '')
                {
                var p1 = e;
                var y1 = parseFloat(this.state.y);
                var i1 = parseFloat(this.state.i);

                if(this.state.periodi == 'monthly' && this.state.periody == 'monthly'){
                    temp4 = i1/100;    
                }
                if(this.state.periodi == 'monthly' && this.state.periody == 'yearly'){
                    temp4 = i1/100;
                    y1 = 12*y1;
                }
                if(this.state.periodi == 'yearly' && this.state.periody == 'monthly'){
                    temp4 = i1/(100*12);
                    // y1 = 12*y1;
                }
                if(this.state.periodi == 'yearly' && this.state.periody == 'yearly'){
                    temp4 = i1/(100*12);
                    y1 = 12*y1;
                }

                temp0 = p1*temp4;
                temp = 1+temp4;
                temp1 = Math.pow(temp,y1);
                temp2 = temp1 - 1;
                temp3 = (temp0*temp1)/(temp2);
                temp3 = temp3.toFixed(2);
                    
                    this.setState({p : p1 , e:temp3});
                }
            else{   

                this.setState({p : ''});
            }
        }         
    }
    yacalculate = (e) =>{
        // alert(this.state.flag);
        if(this.state.flag != 0 && this.state.flag > 0 ){
            // alert('y');
            this.setState({y : e});
        }
        else
        {
            if(e != '')
                {
                var p1 = parseFloat(this.state.p);
                var y1 = e;
                var i1 = parseFloat(this.state.i);

                if(this.state.periodi == 'monthly' && this.state.periody == 'monthly'){
                    temp4 = i1/100;    
                }
                if(this.state.periodi == 'monthly' && this.state.periody == 'yearly'){
                    temp4 = i1/100;
                    y1 = 12*y1;
                }
                if(this.state.periodi == 'yearly' && this.state.periody == 'monthly'){
                    temp4 = i1/(100*12);
                    // y1 = 12*y1;
                }
                if(this.state.periodi == 'yearly' && this.state.periody == 'yearly'){
                    temp4 = i1/(100*12);
                    y1 = 12*y1;
                }
                
                temp0 = p1*temp4;
                temp = 1+temp4;
                temp1 = Math.pow(temp,y1);
                temp2 = temp1 - 1;
                temp3 = (temp0*temp1)/(temp2);
                temp3 = temp3.toFixed(2);
                    
                    this.setState({y : y1 , e:temp3});
                }
            else{   

                this.setState({y : ''});
            }
        }
    }
    iacalculate = (e) =>{
        // alert(this.state.flag);
        if(this.state.flag != 0 && this.state.flag > 0 ){
            
            this.setState({i : e});
        }
        else
        {
            if(e != '')
                {
                var p1 = parseFloat(this.state.p);
                var y1 = parseFloat(this.state.y);
                var i1 = e;

                if(this.state.periodi == 'monthly' && this.state.periody == 'monthly'){
                    temp4 = i1/100;    
                }
                if(this.state.periodi == 'monthly' && this.state.periody == 'yearly'){
                    temp4 = i1/100;
                    y1 = 12*y1;
                }
                if(this.state.periodi == 'yearly' && this.state.periody == 'monthly'){
                    temp4 = i1/(100*12);
                    // y1 = 12*y1;
                }
                if(this.state.periodi == 'yearly' && this.state.periody == 'yearly'){
                    temp4 = i1/(100*12);
                    y1 = 12*y1;
                }
                temp0 = p1*temp4;
                temp = 1+temp4;
                temp1 = Math.pow(temp,y1);
                temp2 = temp1 - 1;
                temp3 = (temp0*temp1)/(temp2);
                temp3 = temp3.toFixed(2);
                    
                    this.setState({i : i1 , e:temp3});
                }
            else{   

                this.setState({i : ''});
            }
        }
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

            <Text style={styles.m_h} >

                <Text style={styles.between_h} >{this.state.e == '' ? '' : 'Emi amount is - '} </Text>
                <Text style={styles.heading}>{this.state.e == '' ? '' : `${this.state.e}`}</Text>
                {/* <Text style={styles.heading}>A simple calculator use to find</Text>
                <Text style={styles.between_h} > Simple Interest</Text> */}
                {/* <Text style={styles.heading}> when</Text>
                <Text style={styles.between_h} > Cost Price</Text>
                <Text style={styles.heading}> and</Text>
                <Text style={styles.between_h}> Profit percentage </Text>
                <Text style={styles.heading}> are provided. </Text> */}
            </Text>

            {/* <Text>
                <Text> Principal Amount is  {this.state.p} </Text>
                <Text> Interest is  {this.state.i} </Text>
                <Text> Years is  {this.state.y} </Text>
                <Text> Final value is  {this.state.t} </Text>
            </Text>

            <Text style={styles.note} > Note : Any 3 fields is necessary </Text> */}

            <View style={styles.innerStyle} >
                <View style={styles.innerleft} > 
                    <Input label='Principal Amount'
                    keyboardType="numeric" 
                    value={this.state.p.toString()}
                    // value
                    onChangeText={this.pacalculate}
                    />
                 </View>
                 <View style={styles.leftbutton}  >
                    <Button title="Net amount" onPress={this.a}
                    ></Button>
                </View>
            </View>
            <View style={styles.innerStyle} >

            </View>
                <View style={styles.radiobutton} >
                    <View style={styles.inputright} >
                        <Input label='Rate of interest ( in % )' 
                        keyboardType="numeric" 
                        value={this.state.i.toString()}
                        onChangeText={this.iacalculate}
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
                        onChangeText={this.yacalculate}
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
                {this.state.o == 'y' ? (
                    <View style={styles.leftbutton}  >
                    <Button title="Find Emi" onPress={this.calculate}
                    ></Button>
                </View>
                ) : (
                    <View style={styles.leftbutton}  >
                    <Button title="Net amount" onPress={this.a}
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


