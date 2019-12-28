import React , {Component,useState} from 'react';
import { View ,TextInput , Text, StyleSheet , Button , TouchableWithoutFeedback , Keyboard} from 'react-native';
import { Input } from 'react-native-elements';
import Constants from 'expo-constants';
import '@expo/vector-icons';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class Compoundinterest extends Component{
    constructor(props){
        super(props);
        this.state={p:'',i:'',y:'',t:'',flag:1,c:'',o:'y'};
    }  
    
    clear = () =>{
        this.setState({ p:'' , y:'' , i:'',t:'' ,flag:1 , c:'',o:'y'})
    }

    a = ()=>{
        var c1 = parseFloat(this.state.c);
        var p1 = parseFloat(this.state.p);

        ans = c1 + p1;
        alert('Your net payable amount is ' + ans)
    }

    calculate = ()=>{

        var t1 = parseFloat(this.state.t);
        var p1 = parseFloat(this.state.p);
        var y1 = parseFloat(this.state.y);
        var i1 = parseFloat(this.state.i);
        // var c1 = parseFloat(this.state.c);
        temp0 = i1/100;
        temp = 1+(temp0/t1);
        // alert(temp);
        temp1 = (y1*t1);
        // alert(temp1)
        temp2 = Math.pow(temp , temp1);
        // alert(temp2)
        temp3 = p1*temp2 - p1;
        // alert(temp3)
        temp3 = temp3.toFixed(2);
        
        f = this.state.flag - 1;
        // this.setState({flag : f , y:ans});
        this.setState({c:temp3 , flag:f , o:'n'});
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
                var t1 = parseFloat(this.state.t);
                var p1 = e;
                var y1 = parseFloat(this.state.y);
                var i1 = parseFloat(this.state.i);
                var c1 = parseFloat(this.state.c);

                temp0 = i1/100;
                temp = 1 + (temp0/t1);
                temp1 = (y1*t1);
                temp2 = Math.pow(temp , temp1);
                temp3 = p1*temp2 - p1;
                temp3 = temp3.toFixed(2);
                    
                    this.setState({p : p1 , c:temp3});
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
                var t1 = parseFloat(this.state.t);
                var p1 = parseFloat(this.state.p);
                var y1 = e;
                var i1 = parseFloat(this.state.i);
                
                temp0 = i1/100;
                temp = 1+(temp0/t1);
                temp1 = (y1*t1);
                temp2 = Math.pow(temp , temp1);
                temp3 = p1*temp2 - p1;
                temp3 = temp3.toFixed(2);
                    
                    this.setState({y : y1 , c:temp3});
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
                var t1 = parseFloat(this.state.t);
                var p1 = parseFloat(this.state.p);
                var y1 = parseFloat(this.state.y);
                var i1 = e;
                // alert(i1);
                temp0 = i1/100;
                temp = 1+(temp0/t1);
                temp1 = (y1*t1);
                temp2 = Math.pow(temp , temp1);
                // alert(temp2)
                temp3 = p1*temp2 - p1;
                temp3 = temp3.toFixed(2);
                // alert(temp3)
                    
                    this.setState({i : i1 , c:temp3});
                }
            else{   

                this.setState({i : ''});
            }
        }
    }
    tacalculate = (e) =>{
        if(this.state.flag != 0 && this.state.flag > 0 ){
            
            this.setState({t : e});
        }
        else
        {
            if(e != '')
                {
                var i1 = parseFloat(this.state.i);
                var p1 = parseFloat(this.state.p);
                var y1 = parseFloat(this.state.y);
                var t1 = e;
                
                temp0 = i1/100;
                temp = 1+(temp0/t1);
                temp1 = (y1*t1);
                temp2 = Math.pow(temp , temp1);
                temp3 = p1*temp2;
                temp3 = temp3.toFixed(2);
                    
                    this.setState({t : t1 , c:temp3});
                }
            else{   

                this.setState({t : ''});
            }
        
        }
    }
    
    
    render(){
        const user_name = this.props.navigation.getParam('heading');  
      return(
        <DismissKeyboard>
        <View style={styles.viewStyle}>

        <Text style={styles.m_h} >
                <Text style={styles.between_h} > {user_name}  </Text>
            </Text>

            <Text style={styles.m_h} >

                <Text style={styles.between_h} >{this.state.c == '' ? '' : 'Compount Interest - '} </Text>
                <Text style={styles.heading}>{this.state.c == '' ? '' : `${this.state.c}`}</Text>
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
                <View style={styles.inneright} >
                    <Input label='Rate of Interest' 
                    keyboardType="numeric" 
                    value={this.state.i.toString()}
                    onChangeText={this.iacalculate}
                    />    
                </View>
            </View>
            <View style={styles.innerStyle} >
                <View style={styles.innerleft} > 
                    <Input label='No of time period' 
                    keyboardType="numeric" 
                    value={this.state.y.toString()}
                    onChangeText={this.yacalculate}
                    />
                 </View>
                <View style={styles.innerleft} > 
                    <Input label='No of interest per time period' 
                    keyboardType="numeric" 
                    value={this.state.t.toString()}
                    onChangeText={this.tacalculate}
                    />
                 </View>
            </View>
            
            <View style={styles.button} >  
            {this.state.o == 'y' ? (
                <View style={styles.leftbutton}  >
                <Button title="Find Compound Interest" onPress={this.calculate}
                ></Button>
            </View>
            ) : null}
            </View>
            <View style={styles.button} >  
                <View style={styles.leftbutton} >
                    <Button title="Find net amount" color='green'  onPress={this.a} ></Button>
                </View>
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
    },m_h:{
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
  }
});


