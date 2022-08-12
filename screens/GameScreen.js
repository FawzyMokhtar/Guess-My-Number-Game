import { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import Title from '../components/ui/Title';
import GuessedNumberContainer from '../components/game/GuessedNumberContainer';
import GuessNumber from '../components/game/GuessNumber';
import RoundsLog from '../components/game/RoundsLog';

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ gameNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, gameNumber);
  const [guessedNumber, setGuessedNumber] = useState(initialGuess);
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    if (guessedNumber === gameNumber) {
      onGameOver(rounds.length);
    }
  }, [guessedNumber, gameNumber, onGameOver]);

  // Only reset them when the component is rendered for the first time.
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextRandomHandler(direction) {
    if (
      (direction === 'lower' && guessedNumber < gameNumber) ||
      (direction === 'greater' && guessedNumber > gameNumber)
    ) {
      return Alert.alert('Liar..!', "Don't give wrong answers..!", [
        { text: 'Sorry!', style: 'destructive' },
      ]);
    }

    if (direction === 'lower') {
      maxBoundary = guessedNumber;
    } else {
      minBoundary = guessedNumber + 1;
    }

    const newGuessedNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      guessedNumber
    );

    setGuessedNumber(newGuessedNumber);
    setRounds((prevRounds) => [newGuessedNumber, ...prevRounds]);
  }

  return (
    <View style={styles.container}>
      <Title>Computer's Guess</Title>
      <GuessedNumberContainer>{guessedNumber}</GuessedNumberContainer>
      <GuessNumber
        onLower={nextRandomHandler.bind(this, 'lower')}
        onHigher={nextRandomHandler.bind(this, 'greater')}
      />
      <RoundsLog rounds={rounds} />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
});

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
