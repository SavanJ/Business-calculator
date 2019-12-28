import React , {Component} from 'react';
import { View , Image , Text, StyleSheet , Button , TouchableOpacity,FlatList} from 'react-native';
import { Input } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';

export default class inquiry extends React.Component{

    constructor(props){
        super(props);
        this.state={s:''}
    }

    render(){
        return (
            <View style={styles.main} >
                <Text style={styles.text}  >
                    There are some calculations which are required in business or finance are listed in this app.
                </Text>
                <Text style={styles.text}>
                    There may be some important calculations which i may not be aware of.
                </Text>
                <Text style={styles.text}>
                    So from here you can directly suggest me by sending an email and
                    i will surely consider your suggestions.
                </Text>
                <Text style={styles.text}>
                    Please suggest and support.
                </Text>
                <View  style={styles.input}>
                    <Input
                    label='Your suggestion' 
                    onChangeText={s => this.setState({s})}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Mail it" 
                    // onPress={()=>alert(this.state.s)}
                    onPress={() => 
                    Communications.email(['xyx@gmail.com'],null,null,'',this.state.s)}>
                     </Button>
                </View>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    main:{
        // borderWidth:2,
        marginHorizontal:12,
        marginVertical:30
    },
    text:{
        marginBottom:15,
        fontSize:18,
        letterSpacing:1,
    },
    input:{
        // borderWidth:2,
        marginTop:10
    },   
    button:{
        // borderWidth:2,
        marginTop:15
    }   
})