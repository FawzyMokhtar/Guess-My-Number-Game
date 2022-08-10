import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './utils/colors';

export default function App() {
  const [gameNumber, setGameNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  function pickNumberHandler(pickedNumber) {
    setGameNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (gameNumber) {
    screen = (
      <GameScreen gameNumber={gameNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && gameNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
