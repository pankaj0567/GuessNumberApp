import React, { useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';


const GameOverScreen = props =>{

    return(
        <View style={style.screen}>
            <Text>The Game is Over</Text>
            <Text>Number of Rounds : {props.roundNumber}</Text>
            <Text>Number was : {props.userNumber}</Text>
            <Button title = "New Game"  onPress={props.onRestart} />
        </View>
    )
}

const style=StyleSheet.create({
    screen : {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default GameOverScreen;