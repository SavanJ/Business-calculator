import React , {Component,useState} from 'react';
import { View ,TextInput , Text, StyleSheet , Button , TouchableOpacity , Keyboard} from 'react-native';


export default class pl extends Component{

    constructor(props){
        super(props);
        this.state={cp:0,sp:0,result:0,gross:0,pl:''};
    }

    calculate=()=>
    {
        var cp1 = parseFloat(this.state.cp);
        var sp1 = parseFloat(this.state.sp);
        // var sp1 = this.state.sp;
        // var cp1 = cp1.toFixed(2);
        // var sp1 = sp1.toFixed(2);

        if(cp1 < sp1){
            result = ((cp1-sp1)/cp1)*100;
            // alert(result);
            ans = ((cp1-sp1)/sp1)*100;
            ans = -1 * ans;
            result = -1 * result;
            result = result.toFixed(2);
            this.setState({total : result , gross:ans});
            this.setState({pl : 'profit'});
            Keyboard.dismiss();
            

        }
        else
        {
            result = ((cp1-sp1)/cp1)*100;
            ans = ((cp1-sp1)/sp1)*100;
            result = result.toFixed(2);
            this.setState({total : result , gross:ans});
            this.setState({pl : 'loss'});
            Keyboard.dismiss();
            // alert(this.state.total);
        }
    }

    render(){

        const user_name = this.props.navigation.getParam('heading');  

      return(
          
        <View style={styles.viewStyle}>

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
            <View style={styles.innerStyle} >
                <View style={styles.childStyle1}>
                    <Text style={styles.textStyle}> Selling Price ( S.P ) </Text>
                </View>
                <View style={styles.childStyle2}>
                    <TextInput 
                        keyboardType="numeric"
                        style={styles.input}  
                        placeholder="Enter a value"
                        // value={sp}
                        onChangeText={sp => this.setState({sp})}
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
                <Button title="Calculate Profit / Loss" onPress={this.calculate}></Button>
                 {/* <Text> {this.state.total} </Text> */}
            </View>

            <View>
                {/* <Text style={styles.msgdisplay} > There is a {this.state.pl} of {this.state.total}% </Text> */}
            </View>

            <View> 
                <Text style={ (this.state.pl == 'profit') ? styles.profit : styles.loss} > 
                    { (this.state.pl == '') ? '' : `There is a markup ${this.state.pl} of ${this.state.total}% and
Gross ${this.state.pl} of ${this.state.gross}% ` } 
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
      marginTop:10
  }
});


