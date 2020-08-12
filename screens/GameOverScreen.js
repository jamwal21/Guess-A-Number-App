import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={{fontSize:30,marginBottom:10}}>Game Over!</Text>
      <Image
      source={require('../assets/success.png')}
      style={{width:'80%',height:200}} />
      <Text style={{fontSize:18}}>Number of rounds: {props.roundsNumber}</Text>
      <Text style={{fontSize:18,marginBottom:10}}>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
