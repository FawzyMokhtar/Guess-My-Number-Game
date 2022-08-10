import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Title from '../components/ui/Title';
import GuessedNumberContainer from '../components/game/GuessedNumberContainer';
import GuessNumber from '../components/game/GuessNumber';

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ gameNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, gameNumber);
  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  useEffect(() => {
    if (guessedNumber === gameNumber) {
      onGameOver();
    }
  }, [guessedNumber, gameNumber, onGameOver]);

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
  }

  return (
    <View style={styles.container}>
      <Title>Computer's Guess</Title>
      <GuessedNumberContainer>{guessedNumber}</GuessedNumberContainer>
      <GuessNumber
        onLower={nextRandomHandler.bind(this, 'lower')}
        onHigher={nextRandomHandler.bind(this, 'greater')}
      />
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  gameOptionsContainer: {},
  higherOrLowerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gameOptionsButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  gameOptionsButtonContainer: {
    flex: 1,
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
