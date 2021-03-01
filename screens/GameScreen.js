import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Card from '../Components/Card';
import NumberContainer from '../Components/NumberContainer';


const generateRandomBetween = (min, max, excluse) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max - min)) + min
    if (rndNumber == excluse) {
        return generateRandomBetween(min, max, excluse);
    }
    else {
        return rndNumber;
    }
}


const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

    const [round,setRound] = useState(0)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice,onGameOver}  = props

    useEffect(()=>{
        console.log('useEffect');
        console.log(currentGuess);
        console.log(userChoice);
        if(currentGuess == userChoice){
            onGameOver(round);
        }
    },[currentGuess,userChoice,onGameOver])
     

    const nextGuessNumber = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)
        ) {
            Alert.alert('Don\' lie!','You know that this is wrong...',[
                { text : 'Sorry!',style: 'cancel'}
            ]);
            return;
        }

        if(direction == 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess
        } 
        const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess)
        console.log('nextNumber');
        console.log(nextNumber);
        setCurrentGuess(nextNumber);
        setRound(r=>r+1);
    }

    return (
        <View style={style.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={style.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessNumber.bind(this, 'lower')} />
                <Button title="GREATER" onPress={nextGuessNumber.bind(this, 'greater')} />
            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen;