import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './utils/colors';

export default function App() {
  const [gameNumber, setGameNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [roundsCount, setRoundsCount] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickNumberHandler(pickedNumber) {
    setGameNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(countOfRounds) {
    setGameIsOver(true);
    setRoundsCount(countOfRounds);
  }

  function startNewGameHandler() {
    setGameNumber(null);
    setGameIsOver(false);
    setRoundsCount(0);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (gameNumber) {
    screen = (
      <GameScreen gameNumber={gameNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && gameNumber) {
    screen = (
      <GameOverScreen
        gameNumber={gameNumber}
        roundsCount={roundsCount}
        onStartNewGame={startNewGameHandler}
      />
    );
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
