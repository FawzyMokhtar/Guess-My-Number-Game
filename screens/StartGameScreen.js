import { useState } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import Colors from '../utils/colors';

function StartGameScreen({ onPickNumber }) {
  const [inputNumber, setInputNumber] = useState('');

  function inputNumberHandler(value) {
    setInputNumber(value);
  }

  function confirmHandler() {
    const gameNumber = parseInt(inputNumber);

    if (isNaN(gameNumber) || gameNumber < 1 || gameNumber > 99) {
      return Alert.alert(
        'Invalid number',
        'You must enter a number between\n(1 and 99)',
        [{ text: 'OK', style: 'destructive', onPress: resetHandler }]
      );
    }

    onPickNumber(gameNumber);
  }

  function resetHandler() {
    setInputNumber('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={inputNumber}
        onChangeText={inputNumberHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonWrapper}>
          <PrimaryButton onPress={resetHandler}>Rest</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,

    // Shadow for Android
    elevation: 4,

    // Shadow for IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  buttonWrapper: {
    flex: 1,
  },
});
