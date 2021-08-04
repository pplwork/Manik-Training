import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
export default function App() {
  const [userNumber ,SetUserNumber] = useState();
  const [guessRounds , setGuessRounds]=useState(0);

  const configureNewGameHandler =()=>{
    setGuessRounds(0);
    SetUserNumber(null);
  }
  const  startGameHandler=(selectedNumber)=>{
    SetUserNumber(selectedNumber);
  }
  const GameOverHandler = numOfRounds=>{
    setGuessRounds(numOfRounds);
  }
  let content = <StartGameScreen onStartGame ={startGameHandler}/>;
  if(userNumber &&guessRounds<=0){
    console.log(guessRounds);
    content = <GameScreen userChoice={userNumber} onGameOver={GameOverHandler}/>
  }else if(guessRounds>0){
    content=<GameOverScreen round = {guessRounds} onRestart={configureNewGameHandler}/>;
  }
  return (
    <View style={styles.screen}>
      <Header title ="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
