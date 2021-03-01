import React, { useState } from 'react';
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Card from '../Components/Card';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';
import Colors from '../constants/colors'



const StartGameScreen = (props) => {
    const [enterValue, setEnterValue] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = inputText => {
        setEnterValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnterValue('');
        setConfirm(false);
    }

    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enterValue);

        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber >= 99) {
            Alert.alert('invalid number',"number should be between 1 to 99",[{text:'Okay',style:'destructive',onPress:resetInputHandler}])
            return;
        }

        setConfirm(true);
        setSelectedNumber(chooseNumber);
        setEnterValue('');
        Keyboard.dismiss();
    }

    let confirmOutput;
    if(confirm){
        confirmOutput =
            <Card style={style.summeryContainer}>
                 <Text> You selected</Text>
                    <NumberContainer>
                        {selectedNumber}
                    </NumberContainer>
                    <Button 
                        title="START GAME"
                        onPress={()=>{props.onStartGame(selectedNumber)}}
                        />
                 </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View >
                <Text style={style.title}>Start a New Game</Text>
                <Card style={style.inputContainer}>
                    <Text style={style.inputTitle}>Select a Number</Text>
                    <Input
                        onChangeText={numberInputHandler}
                        value={enterValue}
                        style={style.input} keyboardType={'number-pad'} maxLength={2} blurOnSubmit autoCapitalize='none' autoCorrect={false} />

                    <View style={style.buttonContainer}>
                        <View style={style.button}>
                            <Button
                                onPress={resetInputHandler}
                                title="Reset" color={Colors.accent} />
                        </View>
                        <View style={style.button}>
                            <Button
                                onPress={confirmInputHandler}
                                title="Confirm" color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const style = StyleSheet.create({
    startGame: {

    },
    title: {
        textAlign: 'center',
        fontSize: 20
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputTitle: {

        textAlign: 'center'
    },
    inputContainer: {
        marginTop: 10,
        width: '80%',
        marginHorizontal: 30

    },
    button: {
        width: 130
    },
    input: {
        textAlign: 'center',
        width: 50
    },
    summeryContainer:{
        marginTop:20,
        marginHorizontal:100,
        alignItems:'center'
    }
})

export default StartGameScreen;