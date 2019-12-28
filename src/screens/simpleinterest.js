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

export default class simpleinterest extends Component{
    constructor(props){
        super(props);
        this.state={p:'',y:'',i:'',fv:'',flag:1};
    }   

    clear = () =>{
        this.setState({ p:'' , y:'' , i:'',fv:'' ,flag:1})
    }

    m = ()=>{
        var fv1 = parseFloat(this.state.fv);
        var y1 = parseFloat(this.state.y);
        temp=y1*12;
        ans=fv1/temp;
        alert('Monthly interest will be ' + ans);
    }   

    a = ()=>{
        var fv1 = parseFloat(this.state.fv);
        var p1 = parseFloat(this.state.p);

        ans = fv1 + p1;
        alert('Your net payable amount is ' + ans)
    }

    fvcalculate = () =>{
        var fv1 = parseFloat(this.state.fv);
        var p1 = parseFloat(this.state.p);
        var y1 = parseFloat(this.state.y);
        var i1 = parseFloat(this.state.i);

        ans = p1*y1*i1/100;
        // this.setState({fv : ans});
        f = this.state.flag - 1;
        this.setState({flag : f,fv:ans});
    }
    pcalculate = () =>{
        var fv1 = parseFloat(this.state.fv);
        var p1 = parseFloat(this.state.p);
        var y1 = parseFloat(this.state.y);
        var i1 = parseFloat(this.state.i);

        ans = 100*fv1/(y1*i1);
        // this.setState({p : ans});
        f = this.state.flag - 1;
        this.setState({flag : f , p:ans});
    }
    icalculate = () =>{
        var fv1 = parseFloat(this.state.fv);
        var p1 = parseFloat(this.state.p);
        var y1 = parseFloat(this.state.y);
        var i1 = parseFloat(this.state.i);

        ans = 100*fv1/(p1*y1);
            // this.setState({i : ans});
            f = this.state.flag - 1;
        this.setState({flag : f,i:ans});
    }
    ycalculate = () =>{
        var fv1 = parseFloat(this.state.fv);
        var p1 = parseFloat(this.state.p);
        var y1 = parseFloat(this.state.y);
        var i1 = parseFloat(this.state.i);

        ans = 100*fv1/(p1*i1);
            // this.setState({y : ans});
            f = this.state.flag - 1;
        this.setState({flag : f , y:ans});
    }
    pacalculate = (e) =>{
        // alert(this.state.flag);
        if(this.state.flag != 0 && this.state.flag > 0 ){
            this.setState({p : e});
        }
        else
        {
            if(e != '')
                {
                var fv1 = parseFloat(this.state.fv);
                var p1 =e;
                var y1 = parseFloat(this.state.y);
                var i1 = parseFloat(this.state.i);

                    f1 = p1*y1*i1/100;
                    // i1 = 100*fv1/(p1*y1);
                    // y1 = 100*fv1/(p1*i1);
                    this.setState({p : p1 , fv:f1});
                }
            else{   

                this.setState({p : ''});
            }
        }         
    }
    yacalculate = (e) =>{
        // alert(this.state.flag);
        if(this.state.flag != 0 && this.state.flag > 0 ){
            this.setState({y : e});
        }
        else
        {
            if(e != '')
                {
                var fv1 = parseFloat(this.state.fv);
                var p1 = parseFloat(this.state.p);
                var y1 = e;
                var i1 = parseFloat(this.state.i);

                    f1 = p1*y1*i1/100;
                    // i1 = 100*fv1/(p1*y1);
                    // y1 = 100*fv1/(p1*i1);
                    this.setState({y : y1 , fv:f1});
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
                var fv1 = parseFloat(this.state.fv);
                var p1 = parseFloat(this.state.p);
                var y1 = parseFloat(this.state.y);
                var i1 = e;

                    f1 = p1*y1*i1/100;
                    // i1 = 100*fv1/(p1*y1);
                    // y1 = 100*fv1/(p1*i1);
                    // alert(f1);
                    this.setState({i : i1 , fv:f1});
                }
            else{   

                this.setState({i : ''});
            }
        }
    }
    fvacalculate = (e) =>{
        // alert(this.state.flag);
        if(this.state.flag != 0 && this.state.flag > 0 ){
            this.setState({fv : e});
        }
        else{
        alert(e);
        var fv1 = e;
        var p1 = parseFloat(this.state.p);
        var y1 = parseFloat(this.state.y);
        var i1 = parseFloat(this.state.i);

            // f1 = p1*y1*i1/100;
            i1 = 100*fv1/(p1*y1);
            y1 = 100*fv1/(p1*i1);
            p1 = 100*fv1/(i1*y1);
            this.setState({p : p1 , fv:f1 , i:i1 , y : y1 });
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
                    <Input label='Years' 
                    keyboardType="numeric" 
                    value={this.state.y.toString()}
                    onChangeText={this.yacalculate}
                    />
                 </View>
                <View style={styles.inneright} >
                    <Input label='Simple interest' 
                    keyboardType="numeric" 
                    disabled={this.state.fv == 0 ? false : true}
                    value={this.state.fv.toString()}
                    onChangeText={this.fvacalculate}
                    />    
                </View>
            </View>
            <View style={styles.button} >  
                <View style={styles.leftbutton}>
                    <Button title="Find principal amount"  
                    onPress={this.pcalculate}
                    disabled = {this.state.p ==0 ? false : true}
                    ></Button>
                </View>
                <View style={styles.rightbutton} >
                    <Button title="Find no of years" onPress={this.ycalculate}
                    disabled = {this.state.y ==0 ? false : true}></Button>
                </View>
            </View>
            <View style={styles.button} >  
                <View style={styles.leftbutton} >
                    <Button title="Find Rate of Interest"  onPress={this.icalculate}
                    disabled = {this.state.i ==0 ? false : true}></Button>
                </View>
                <View style={styles.rightbutton} >
                    <Button title="Find Simple Interest" onPress={this.fvcalculate}
                    disabled = {this.state.fv ==0 ? false : true}></Button>
                </View>
            </View>
            <View style={styles.button} >  
                <View style={styles.leftbutton} >
                    <Button title="Find net amount" color='green'  onPress={this.a} ></Button>
                </View>
                <View style={styles.leftbutton} >
                    <Button title="Clear all" color='#ee4444' onPress={this.clear} ></Button>
                </View>
                <View style={styles.leftbutton} >
                    <Button title="Monthly Interest" color='green' onPress={this.m} ></Button>
                </View>
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


