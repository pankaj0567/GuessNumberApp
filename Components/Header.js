import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';



const Header = (props)=>{
    return (
        <View style={style.header}>
            <Text style={style.titleStyle}>{props.title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        backgroundColor: Colors.primary,
        width:'100%',
        height:50,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
    titleStyle:{
        fontSize:20
    }
})

export default Header;