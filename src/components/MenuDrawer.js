import React, { Component } from 'react';
import { View, Image, TouchableOpacity , ScrollView , Text , StyleSheet ,  Platform , Dimensions } from 'react-native';
import { Ionicons,AntDesign,Entypo ,MaterialIcons} from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component{
    navlink(nav,text){
        return(
            <TouchableOpacity style={{height:50}} onPress={() => this.props.navigation.navigate(nav)}>        
                <Text style={styles.link}>
                    {/* <Text style={styles.icon}>
                        <Entypo name="home" size={20} />
                    </Text> */}
                    {text} 
                </Text>
            </TouchableOpacity>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <ScrollView style={{flex:1}} >
                <View style={styles.topLinks}>
                    <View style={styles.profile}>
                        <View style={styles.imgView}>
                            <Image style={styles.img} source={require('../../assets/profile.png')} />
                        </View>
                        <View style={styles.profileText}>
                            <Text style={styles.name} >
                            Savan Jasani
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navlink('Screen2' , '  Homescreen')}
                    {this.navlink('Screen3' , '  Suggestion')}
                </View>
                </ScrollView> 
                <View style={styles.footer}>
                    <Text style={styles.description}> Business Calculator </Text>
                    <Text style={styles.version}> v1.0.0 </Text>
                </View>
                <View style={styles.footer2}>
                    <Text style={styles.description2}> Made with love </Text>
                    <View style={styles.flagview}>
                        <Image style={styles.flag} source={require('../../assets/flag.png')} />
                    </View>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
      
    container:{
        flex:1,
        backgroundColor:'lightgrey'
    },
    profile:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:25,
    },
    profileText:{
        flex:3,
        flexDirection:'column',
        justifyContent:'center',
        // borderWidth:2,
        // borderColor:'red'
    },
    name:{
        fontSize:20,
        paddingBottom:5,
        color:'white',
        textAlign:'left',
        fontWeight:'bold'
    },
    imgView:{
        flex:1,
        paddingLeft:20,
        paddingRight:20,
        // borderWidth:2,
        // borderColor:'red'
    },
    img:{
        height:70,
        width:70,
        borderRadius:40,    
    },
    topLinks:{
        height:160,
        backgroundColor:'#29abe2'
    },
    bottomLinks:{
        flex:1,
        backgroundColor:'white',
        paddingTop:10,
        paddingBottom:450
    },
    icon:{
        borderWidth:2,
        color:'#29abe2',
        marginRight:5
    },
    link:{
        flex:1,
        fontSize:20,
        // padding:10,
        paddingTop:10,
        paddingLeft:14,
        // margin:5,
        textAlign:'left',
        // borderWidth:2,
        borderBottomWidth:1,
        borderBottomColor:'lightgrey'
        // color:'grey',
        // fontWeight:'bold'
    },
    footer:{
        height: 50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderTopWidth:1,
        borderTopColor:'lightgrey'
    },
    version:{
        flex:1,
        textAlign:'right',
        marginRight:20,
        color:'#8c8c8c'
    },
    description:{
        flex:2,
        marginLeft:20,
        fontSize:17,
        color:'#8c8c8c'
    },
    footer2:{
        height: 50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderTopWidth:1,
        borderTopColor:'lightgrey',
        
    },
    description2:{
        flex:2,
        marginLeft:20,
        fontSize:17,
        textAlign:'right',
        // borderWidth:2,
        // letterSpacing:2,
        // fontWeight:'100',
        color:'#666666'
    },
    flag:{
        height:20,
        width:20
    },
    flagview:{
        flex:1,
        marginLeft:5,
        // borderWidth:2,
        height:50,
        marginRight:20,
        paddingTop:15
    }
})
