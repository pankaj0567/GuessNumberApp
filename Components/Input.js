import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, TextInput, View } from 'react-native';


const Input = (props)=>{
    return (
        <TextInput {...props} style={{...style.input,...props.style}} />
    )
}

const style = StyleSheet.create({
    input:{
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginHorizontal:100
    }
})

export default Input;