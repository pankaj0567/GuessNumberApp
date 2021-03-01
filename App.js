import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';


export default function App() {
  const [userNumber,setUserNumber] = useState()
  const [round,setRound] = useState(0);

  const configureNewGameHandler = () =>{
    setRound(0);
    setUserNumber(null);
  }

  const onStartGameHandler = selectedNumber =>{
    setUserNumber(selectedNumber);
  }

  const onGameOverHandler = numOfRound =>{
    setRound(numOfRound);
  }

  let content = <StartGameScreen onStartGame={onStartGameHandler} />
  if(userNumber && round<=0){
    content = <GameScreen userChoice = {userNumber} onGameOver = { onGameOverHandler } />
  }else if(round > 0){
    content = <GameOverScreen roundNumber={round} userNumber = {userNumber} onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.container}>
        <Header title= "Guess a number" />
        {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
